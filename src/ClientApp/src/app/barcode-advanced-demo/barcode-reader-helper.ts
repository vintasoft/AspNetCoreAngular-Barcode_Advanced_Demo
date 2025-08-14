import { BarcodeRecognitionResultHelper } from "./barcode-recognition-result-helper";

let _barcodeReaderHelper: BarcodeReaderHelper;

export class BarcodeReaderHelper {

  _recognizedInformationTextarea: Vintasoft.Imaging.UI.UIElements.WebUiTextareaElementJS;
  _blockUiFunc: Function;
  _unblockUiFunc: Function;
  _showErrorMessageFunc: Function;

  _readBarcodesButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS | null = null;

  // barcode reader
  _barcodeReader = new Vintasoft.Barcode.WebBarcodeReaderJS(new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftBarcodeApi"));

  _imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS | null = null;

  barcodeRecognitionResultHelper: BarcodeRecognitionResultHelper;

  // array that contains information about recognized barcodes
  _barcodeInformation: object[] | null = null;

  _barcodeImage: Vintasoft.Shared.WebImageJS | null = null;

  _barcodeRecognizeRequest: any = null;



  constructor(
    recognizedInformationTextarea: Vintasoft.Imaging.UI.UIElements.WebUiTextareaElementJS,
    blockUiFunc: Function,
    unblockUiFunc: Function,
    showErrorMessageFunc: Function) {
    _barcodeReaderHelper = this;

    this._recognizedInformationTextarea = recognizedInformationTextarea;
    this._blockUiFunc = blockUiFunc;
    this._unblockUiFunc = unblockUiFunc;
    this._showErrorMessageFunc = showErrorMessageFunc;

    this.barcodeRecognitionResultHelper = new BarcodeRecognitionResultHelper();
  }



  get_BarcodeImage(): Vintasoft.Shared.WebImageJS | null {
    return this._barcodeImage;
  }

  clearBarcodeImage() {
    this._barcodeImage = null;
  }

  get_BarcodeRecognizeRequest(): object {
    return this._barcodeRecognizeRequest;
  }

  clearBarcodeRecognizeRequest() {
    this._barcodeRecognizeRequest = null;
  }



  // === Utils ===

  /**
   Writes information about barcode recognition process.
   @param {string} message Message.
   */
  __writeBarcodeInformation(message: string) {
    let recognizedInformationTextareaObj: HTMLTextAreaElement = _barcodeReaderHelper._recognizedInformationTextarea.get_DomElement() as HTMLTextAreaElement;
    if (recognizedInformationTextareaObj != null) {
      message = message.split("\\n").join('\n')
      recognizedInformationTextareaObj.value = message;
    }
  }



  // === Barcode recognition ===

  sendReadBarcodeRequest(readBarcodesButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS,
    imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS,
    barcodeReaderSettings: Vintasoft.Barcode.WebBarcodeReaderSettingsJS | null): boolean | null {
    if (barcodeReaderSettings == null)
      return null;

    this._readBarcodesButton = readBarcodesButton;
    this._imageViewer = imageViewer;

    // get focused image
    let image: Vintasoft.Shared.WebImageJS = this._imageViewer.get_FocusedImage();
    // if focused image exists
    if (image != null) {
      // disable the "Read barcodes" button
      readBarcodesButton.set_IsEnabled(false);

      // reset information about recognized barcodes
      this._barcodeInformation = Array();

      // get the highlight tool
      let highLightTool = this.getHighLightSelectionTool(imageViewer);
      if (highLightTool != null)
        // clear the previous barcode recognition results
        highLightTool.clearItems();

      // block UI
      this._blockUiFunc("Read barcodes...");
      // show a message about start of barcode recognition
      this.__writeBarcodeInformation("Read barcodes...");

      // set scan rectangle
      this.__setScanRectangle(imageViewer, barcodeReaderSettings);

      // set barcode reader settings
      _barcodeReaderHelper._barcodeReader.set_Settings(barcodeReaderSettings);

      // send an asynchronous request for barcode recognition
      let request: any = this._barcodeReader.readBarcodes(image, _barcodeReaderHelper.__readBarcodes_success, _barcodeReaderHelper.__readBarcodes_fail);
      this._barcodeRecognizeRequest = request.object;
    }
    return false;
  }

  /**
   Barcode recognition is finished successully.
   @param {object} data Object with information about recognized barcodes.
   */
  __readBarcodes_success(data: any) {
    if (_barcodeReaderHelper._imageViewer == null)
      return;

    // unblock UI
    _barcodeReaderHelper._unblockUiFunc();

    // barcode image, where barcodes are searching
    _barcodeReaderHelper._barcodeImage = _barcodeReaderHelper._imageViewer.get_FocusedImage();

    // save information about recognized barcodes
    _barcodeReaderHelper._barcodeInformation = data.results;

    // get text information about recognized barcodes
    let infoAboutBarcodes = _barcodeReaderHelper.__getTextInformationAboutBarcodes(_barcodeReaderHelper._barcodeInformation);

    // show information about recognized barcodes
    _barcodeReaderHelper.__writeBarcodeInformation(infoAboutBarcodes);

    // if barcodes are found
    if (_barcodeReaderHelper._barcodeInformation != null && _barcodeReaderHelper._barcodeInformation.length !== 0) {
      // create the objects, which will highlight the recognized barcodes on an image
      let coloredObjects: Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectsJS = _barcodeReaderHelper.__createHighlightingForBarcodes(_barcodeReaderHelper._barcodeInformation);
      // get the highlight tool
      let highLightTool: Vintasoft.Imaging.UI.VisualTools.WebHighlightToolJS | null = _barcodeReaderHelper.getHighLightSelectionTool(_barcodeReaderHelper._imageViewer);
      if (highLightTool != null)
        // add the objects in highlight tool
        highLightTool.addItems(coloredObjects);
    }

    _barcodeReaderHelper.__barcodeRecognizeRequest_finished();
  }

  /**
   Barcode recognition is failed.
   @param {object} data Object with information about barcode recognition error.
   */
  __readBarcodes_fail(data: any) {
    // unblock UI
    _barcodeReaderHelper._unblockUiFunc();

    _barcodeReaderHelper.__writeBarcodeInformation("");
    // if error occurred during the request (request was not aborted)
    if (data.statusText !== "abort") {
      // show information about error
      _barcodeReaderHelper._showErrorMessageFunc(data);
    }

    _barcodeReaderHelper.__barcodeRecognizeRequest_finished();
  }

  /**
   Barcode recognition request is finished.
   */
  __barcodeRecognizeRequest_finished() {
    _barcodeReaderHelper._barcodeRecognizeRequest = null;

    if (_barcodeReaderHelper._readBarcodesButton != null) {
      // enable the "Read barcodes" button
      _barcodeReaderHelper._readBarcodesButton.set_IsEnabled(true);
    }

    if (_barcodeReaderHelper._imageViewer == null)
      return;

    // get the rectangular selection tool
    let rectangularSelectionTool: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS | null =
      _barcodeReaderHelper.__getVisualToolByName(_barcodeReaderHelper._imageViewer, "RectangularSelection");
    // if tool exists
    if (rectangularSelectionTool != null) {
      // clear the selection
      rectangularSelectionTool.reset();
    }
  }


  /**
   Sets the scan rectangle in barcode reader settings.
   @param {object} imageViewer Image viewer.
   @param {object} barcodeReaderSettings Barcode reader settings.
   */
  __setScanRectangle(imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS, barcodeReaderSettings: Vintasoft.Barcode.WebBarcodeReaderSettingsJS) {
    // scan rectangle where barcodes must be searched
    let scanRectangle: any = { x: 0, y: 0, width: 0, height: 0 };
    // get the composite visual tool
    let visualTool: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS = imageViewer.get_VisualTool();
    if (visualTool != null) {
      // get the rectangular selection tool
      let rectangularSelectionTool: Vintasoft.Imaging.UI.VisualTools.WebRectangularSelectionToolJS | null =
        _barcodeReaderHelper.__getVisualToolByName(_barcodeReaderHelper._imageViewer as Vintasoft.Imaging.UI.WebImageViewerJS, "RectangularSelection") as Vintasoft.Imaging.UI.VisualTools.WebRectangularSelectionToolJS;
      if (rectangularSelectionTool != null) {
        // if rectangular selection tool active
        if (rectangularSelectionTool.get_IsEnabled()) {
          // get the scan rectangle
          scanRectangle = rectangularSelectionTool.get_Rectangle();
          //  scale the scan rectangle
          scanRectangle.x = Math.floor(scanRectangle.x);
          scanRectangle.y = Math.floor(scanRectangle.y);
          scanRectangle.width = Math.floor(scanRectangle.width);
          scanRectangle.height = Math.floor(scanRectangle.height);
        }
      }
    }
    // set the scan rectangle
    barcodeReaderSettings.set_ScanRectangle(scanRectangle);
  }



  // === Barcode recognition results ===

  getBarcodeInformation(barcodeIndex: any): any {
    if (_barcodeReaderHelper._barcodeInformation == null)
      return;

    return _barcodeReaderHelper._barcodeInformation[barcodeIndex];
  }

  /**
   Returns the highlight tool.
   @param {object} imageViewer Image viewer.
   */
  getHighLightSelectionTool(imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS): Vintasoft.Imaging.UI.VisualTools.WebHighlightToolJS | null {
    let compositeTool: Vintasoft.Imaging.UI.VisualTools.WebCompositeVisualToolJS = imageViewer.get_VisualTool() as Vintasoft.Imaging.UI.VisualTools.WebCompositeVisualToolJS;
    if (compositeTool != null) {
      // get the highlight tool
      return compositeTool.getTool(0) as Vintasoft.Imaging.UI.VisualTools.WebHighlightToolJS;
    }
    return null;
  }

  /**
   Returns the rectangular selection tool.
   @param {object} imageViewer Image viewer.
   @param {string} visualToolName Visual tool name.
  */
  __getVisualToolByName(imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS, visualToolName: string): Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS | null {
    let visualTool: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS = imageViewer.get_VisualTool();
    if (visualTool != null) {
      if (visualTool.get_Name().startsWith("Composite:")) {
        let compositeVisualTool: Vintasoft.Imaging.UI.VisualTools.WebCompositeVisualToolJS =
          visualTool as Vintasoft.Imaging.UI.VisualTools.WebCompositeVisualToolJS;
        var visualTools = compositeVisualTool.get_VisualTools();
        for (var i = 0; i < visualTools.length; i++) {
          if (visualTools[i].get_Name() == visualToolName)
            return visualTools[i];
        }
      }
      else {
        if (visualTool.get_Name() == visualToolName)
          return visualTool;
      }
    }
    return null;
  }


  // === Create highlight objects ===

  /**
   Returns text information about recognized barcodes.
   @param {object} barcodeInfoArray An array with information about recognized barcodes.
   */
  __getTextInformationAboutBarcodes(barcodeInfoArray: any): string {
    let information: string = "";
    if (barcodeInfoArray.length == 0) {
      // show a message with the barcode recognition result
      information += "No barcodes found.\n\nYou should try to change barcode recognition settings, for example decrease scan interval, add new scan direction, etc if you are sure that image contains a barcode.\n\nPlease send image with barcode to support@vintasoft.com if you cannot recognize barcode - we will do the best to help you.";
    }
    // else
    else {
      // show the count of recognized barcodes
      information += 'Recognized barcodes: ' + barcodeInfoArray.length + '.\n\n';
      // for each recognized barcode
      for (let i = 0; i < barcodeInfoArray.length; i++) {
        let barcodeInfo = barcodeInfoArray[i];

        var barcodeValue;
        if (barcodeInfo.barcodeType == "Mailmark CMDM Type7" || barcodeInfo.barcodeType == "Mailmark CMDM Type9" || barcodeInfo.barcodeType == "Mailmark CMDM Type29") {
          barcodeValue = '\n===\n' + _barcodeReaderHelper.barcodeRecognitionResultHelper.createMarkupWithInformationAboutMailmarkCMDMBarcode(barcodeInfo, false, '\n') + '\n===';
        }
        else if (barcodeInfo.barcodeType == "PPN") {
          barcodeValue = '\n===\n' + _barcodeReaderHelper.barcodeRecognitionResultHelper.createMarkupWithInformationAboutPpnBarcode(barcodeInfo, false, '\n') + '\n===';
        }
        else if (barcodeInfo.barcodeType == "AAMVA") {
          barcodeValue = '\n===\n' + _barcodeReaderHelper.barcodeRecognitionResultHelper.createMarkupWithInformationAboutAamvaBarcode(barcodeInfo, false, '\n') + '\n===';
        }
        else if (barcodeInfo.barcodeType == "Swiss QR Code") {
          barcodeValue = '\n===\n' + _barcodeReaderHelper.barcodeRecognitionResultHelper.createMarkupWithInformationAboutSwissQrCodeBarcode(barcodeInfo, false, '\n') + '\n===';
        }
        else {
          barcodeValue = barcodeInfo.value;
        }

        // create a string with information about barcode
        information += '[' + (i + 1) + ':' + barcodeInfo.barcodeType + ']\n' +
          'Value: ' + barcodeValue + '\n' +
          'Confidence: ' + barcodeInfo.confidence + '\n' +
          'ReadingQuality: ' + barcodeInfo.readingQuality.toFixed(2) + '\n' +
          'Threshold: ' + barcodeInfo.threshold + '\n' +
          'Region: ' +
          'LT=(' + barcodeInfo.region.leftTop.x + ',' + barcodeInfo.region.leftTop.y +
          '); RT=(' + barcodeInfo.region.rightTop.x + ',' + barcodeInfo.region.rightTop.y +
          '); LB=(' + barcodeInfo.region.leftBottom.x + ',' + barcodeInfo.region.leftBottom.y +
          '); RB=(' + barcodeInfo.region.rightBottom.x + ',' + barcodeInfo.region.rightBottom.y + '); ' +
          'Angle=' + barcodeInfo.region.angle.toFixed(1) + '°\n\n';
      }
    }
    return information;
  }

  /**
   Creates the objects, which will highlight the recognized barcodes on an image.
   @param {object} barcodeInfoArray An array with information about recognized barcodes.
   @returns {object} The objects, which will highlight the recognized barcodes on an image.
   */
  __createHighlightingForBarcodes(barcodeInfoArray: any): Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectsJS {
    // an array with highlighting of barcodes
    let objects: Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS[] = Array();
    // for each recognized barcode
    for (let i = 0; i < barcodeInfoArray.length; i++) {
      // get information about recognized barcode
      let item: any = barcodeInfoArray[i];
      // create an object, which will highlight the recognized barcode on an image
      let obj: any = _barcodeReaderHelper.__createHighlightingForBarcode(item);
      // save link between highlighting and barcode info
      obj.data = i;

      // add highlighting to an array
      objects.push(obj);
    }
    // create the objects, which will highlight the recognized barcodes on an image
    return new Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectsJS(objects, 'rgba(0,128,0,0.18)', 'rgba(0,128,0,0.75)');
  }

  /**
   Creates an object, which will highlight the recognized barcode on an image.
   @param {object} barcodeInfo Information about recognized barcode.
   @returns {object} An object, which will highlight the recognized barcode on an image.
   */
  __createHighlightingForBarcode(barcodeInfo: any): Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS {
    // create an array with points of barcode region
    let points: any = Array();
    let region: any = barcodeInfo.region;
    points.push({ x: region.leftTop.x, y: region.leftTop.y });
    points.push({ x: region.rightTop.x, y: region.rightTop.y });
    points.push({ x: region.rightBottom.x, y: region.rightBottom.y });
    points.push({ x: region.leftBottom.x, y: region.leftBottom.y });

    // creates an object, which will highlight the recognized barcode on an image
    let obj: Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS = Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS.createObjectFromPolygon(points);
    // create the tooltip for highlighting
    obj.set_ToolTip(barcodeInfo.barcodeType + '\n' + barcodeInfo.value);
    // return the highlighting
    return obj;
  }

}
