import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BarcodeReaderHelper } from "./barcode-reader-helper";
import { BarcodeReaderSettingsDialog } from "../dialogs/barcode-reader-settings-dialog";
import { BarcodeRecognitionResultDialog } from "../dialogs/barcode-recognition-result-dialog";

let _barcodeReaderUiHelper: BarcodeReaderUiHelper;

/**
 A helper that helps to create UI for barcode reading.
*/
export class BarcodeReaderUiHelper {

  _docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS | null = null;
  _blockUiFunc: Function;
  _unblockUiFunc: Function;
  _showErrorMessageFunc: Function;

  // Helper class for barcode reader.
  _barcodeReaderHelper: BarcodeReaderHelper | null = null;
  // Dialog that allows to view and change settings of barcode reader.
  _barcodeReaderSettingsDialog: BarcodeReaderSettingsDialog;
  // Button for barcode reading.
  _readBarcodesButton: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS | null = null;
  // Textarea that displays barcode reading information.
  _recognizedInformationTextarea: Vintasoft.Imaging.UI.UIElements.WebUiTextareaElementJS | null = null;



  constructor(private modalService: NgbModal, blockUiFunc: Function, unblockUiFunc: Function, showErrorMessageFunc: Function) {
    _barcodeReaderUiHelper = this;

    this._blockUiFunc = blockUiFunc;
    this._unblockUiFunc = unblockUiFunc;
    this._showErrorMessageFunc = showErrorMessageFunc;

    let barcodeReaderSettings: Vintasoft.Barcode.WebBarcodeReaderSettingsJS
      = new Vintasoft.Barcode.WebBarcodeReaderSettingsJS();
    barcodeReaderSettings.set_SearchQRModel1Barcodes(true);
    this._barcodeReaderSettingsDialog = new BarcodeReaderSettingsDialog(this.modalService);
    this._barcodeReaderSettingsDialog.barcodeReaderSettings = barcodeReaderSettings;
  }



  /**
   * Creates UI panel with barcode recognition functionality.
   */
  createBarcodeReadingPanel() {
    // create the button that allows to start the asynchronous barcode recognition process
    _barcodeReaderUiHelper._readBarcodesButton = new Vintasoft.Imaging.UI.UIElements.WebUiButtonJS({
      cssClass: 'vsui-button readBarcodes',
      title: 'Read barcodes',
      localizationId: 'readBarcodesButton',
      css: {
        "margin-left": "5px"
      },
      onClick: _barcodeReaderUiHelper.__readBarcodesButton_clicked
    });

    // create the button that allows to view and change the barcode reader settings
    let barcodeReaderSettingsButton: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS
      = new Vintasoft.Imaging.UI.UIElements.WebUiButtonJS({
        cssClass: 'vsui-button barcodeReaderSettings',
        title: 'Barcode reader settings',
        localizationId: 'barcodeReaderSettingsButton',
        css: {
          "margin-left": "5px"
        },
        onClick: _barcodeReaderUiHelper.__barcodeReaderSettingsButton_clicked
      });

    // create the text area, where information about recognized barcodes will be shown
    _barcodeReaderUiHelper._recognizedInformationTextarea = new Vintasoft.Imaging.UI.UIElements.WebUiTextareaElementJS({
      text: "Please do the following steps for reading barcode:\n\n1. Select region on image using the selection tool if barcodes must be searched in the region.\n\n2. Click the 'Barcode Reader Settings' button and specify necessary settings.\n\n3. Click the 'Read Barcodes' button and barcode recognition results will be shown in this text box.\n\n4. Click on highlighted barcode in image viewer and you will see an extended information about recognized barcode.",
      readonly: true,
      css: {
        position: "relative",
        width: "100%",
        height: "calc(100% - 45px)",
        "line-height": 1,
        "font-family": "monospace",
        "border-top": "1px solid #dddddd",
        "border-bottom": "1px solid #dddddd",
        "border-right": "0px",
        "border-left": "0px",
        resize: "none"
      }
    });

    // create the button that allows to open/close the barcode recognition panel
    let panelOpenButton: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS
      = new Vintasoft.Imaging.UI.UIElements.WebUiButtonJS({
        cssClass: 'vsui-button barcodeReader',
        title: 'Barcode reading',
        localizationId: 'barcodeReaderPanelButton'
      });

    // create an UI panel, which allows to recognize barcodes in image and see the barcode recognition results
    let barcodeReadingPanel: Vintasoft.Imaging.UI.Panels.WebUiPanelJS
      = new Vintasoft.Imaging.UI.Panels.WebUiPanelJS(
        [Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.createElementById('rectangularSelectionToolButton'),
          _barcodeReaderUiHelper._readBarcodesButton, barcodeReaderSettingsButton, _barcodeReaderUiHelper._recognizedInformationTextarea],
        { cssClass: 'vsui-sidePanel-content' },
        panelOpenButton
      );

    _barcodeReaderUiHelper._barcodeReaderHelper = new BarcodeReaderHelper(
      _barcodeReaderUiHelper._recognizedInformationTextarea,
      _barcodeReaderUiHelper._blockUiFunc,
      _barcodeReaderUiHelper._unblockUiFunc,
      _barcodeReaderUiHelper._showErrorMessageFunc);

    // subscribe to the "activated" event of the barcode recognition panel
    Vintasoft.Shared.subscribeToEvent(barcodeReadingPanel, 'activated', _barcodeReaderUiHelper.__barcodeReadingPanel_activated);
    return barcodeReadingPanel;
  }

  /**
   * "Read barcodes" button is clicked.
   * @param event
   * @param uiElement
   */
  __readBarcodesButton_clicked(event: any, uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS) {
    if (_barcodeReaderUiHelper._barcodeReaderHelper == null)
      return;

    _barcodeReaderUiHelper._docViewer = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
    let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = _barcodeReaderUiHelper._docViewer.get_ImageViewer();
    _barcodeReaderUiHelper._barcodeReaderHelper.sendReadBarcodeRequest(uiElement, imageViewer, _barcodeReaderUiHelper._barcodeReaderSettingsDialog.get_Settings());
  }

  /**
   * "Barcode reader settings" button is clicked.
   * @param event
   * @param uiElement
   */
  __barcodeReaderSettingsButton_clicked(event: any, uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS) {
    // show the barcode reader settings dialog
    _barcodeReaderUiHelper._barcodeReaderSettingsDialog.open();
  }

  /**
   * Barcode recognition panel is activated.
   */
  __barcodeReadingPanel_activated(event: any, eventArgs: any) {
    let uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS = event.target;
    // get the document viewer
    _barcodeReaderUiHelper._docViewer = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
    // get the image viewer
    let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = _barcodeReaderUiHelper._docViewer.get_ImageViewer();

    // subscribe to the "imagesChanged" event of image viewer
    Vintasoft.Shared.subscribeToEvent(imageViewer.get_Images(), 'changing', _barcodeReaderUiHelper.__images_changing)

    // subscribe to the "focusedIndexChanged" event of image viewer
    Vintasoft.Shared.subscribeToEvent(imageViewer, 'focusedIndexChanged', _barcodeReaderUiHelper.__imageViewer_focusedIndexChanged);
    // get the image viewer control
    let imageViewerControl: object = imageViewer.get_Control();
    // specify that barcode recognition result must be shown when left mouse button is double clicked over the recognized barcode in image viewer
    Vintasoft.Shared.subscribeToEvent(imageViewerControl, 'dblclick', _barcodeReaderUiHelper.__onViewerDoubleClick);
    Vintasoft.Shared.subscribeToEvent(imageViewerControl, 'pointerdown', _barcodeReaderUiHelper.__onViewerDoubleClick);
    // specify that barcode recognition result must be shown when right mouse button is clicked over the recognized barcode in image viewer
    imageViewer.set_ContextMenuFunc(_barcodeReaderUiHelper.__onViewerDoubleClick);
  }

  /**
   * Images are changing in document viewer.
   */
  __images_changing() {
    if (_barcodeReaderUiHelper._docViewer == null)
      return;

    // get the image viewer
    let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = _barcodeReaderUiHelper._docViewer.get_ImageViewer();

    // clear information about recognized barcodes
    _barcodeReaderUiHelper.__clearBarcodeInformationTextBox(imageViewer);
  }

  /**
   * Focused image is changed in document viewer.
   */
  __imageViewer_focusedIndexChanged() {
    if (_barcodeReaderUiHelper._docViewer == null)
      return;

    // get the image viewer
    let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = _barcodeReaderUiHelper._docViewer.get_ImageViewer();

    // clear information about recognized barcodes
    _barcodeReaderUiHelper.__clearBarcodeInformationTextBox(imageViewer);
  }

  /**
   * Clears information about recognized barcodes.
   * @param viewer Image viewer.
   */
  __clearBarcodeInformationTextBox(viewer: Vintasoft.Imaging.UI.WebImageViewerJS) {
    if (this._barcodeReaderHelper == null)
      return;

    if (viewer.get_FocusedImage() !== this._barcodeReaderHelper._barcodeImage) {
      if (this._readBarcodesButton != null) {
        // enable the "Read barcodes" button
        this._readBarcodesButton.set_IsEnabled(true);
      }

      let barcodeRecognizeRequest: any = this._barcodeReaderHelper.get_BarcodeRecognizeRequest();
      // if request is defined
      if (barcodeRecognizeRequest != null) {
        barcodeRecognizeRequest.abort();
        this._barcodeReaderHelper.clearBarcodeRecognizeRequest();
      }

      // get the highlight tool
      let highLightTool: Vintasoft.Imaging.UI.VisualTools.WebHighlightToolJS | null
        = this._barcodeReaderHelper.getHighLightSelectionTool(viewer);
      if (highLightTool != null)
        // clear the previous barcode recognition results
        highLightTool.clearItems();

      this._barcodeReaderHelper.__writeBarcodeInformation("Please do the following steps for reading barcode:\n\n1. Select region on image using the selection tool if barcodes must be searched in the region.\n\n2. Click the 'Barcode Reader Settings' button and specify necessary settings.\n\n3. Click the 'Read Barcodes' button and barcode recognition results will be shown in this text box.\n\n4. Click on highlighted barcode in image viewer and you will see an extended information about recognized barcode.");

      this._barcodeReaderHelper.clearBarcodeImage();
    }
  }

  /**
   * Mouse button is double clicked in image viewer.
   * @param event Event.
   */
  __onViewerDoubleClick(event: any) {
    if (_barcodeReaderUiHelper._docViewer == null || _barcodeReaderUiHelper._barcodeReaderHelper == null)
      return;

    let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = _barcodeReaderUiHelper._docViewer.get_ImageViewer();

    // get the highlight tool
    let highLightTool: Vintasoft.Imaging.UI.VisualTools.WebHighlightToolJS | null
      = _barcodeReaderUiHelper._barcodeReaderHelper.getHighLightSelectionTool(imageViewer);
    if (highLightTool != null) {
      // get selected item
      let item: any = highLightTool.findItem(event.pageX, event.pageY);
      // if selected item is not found
      if (item == null)
        // exit
        return;

      highLightTool.selectItem(item);
      // get information about the recognized barcode
      let barcodeInfo: any = _barcodeReaderUiHelper._barcodeReaderHelper.getBarcodeInformation(item.data);
      let barcodeQualityTestInfo: object | null = null;
      // if information about quality tests exist
      if (barcodeInfo.printQualityTest != null)
        // get information about the print quality test of recognized barcode
        barcodeQualityTestInfo = barcodeInfo.printQualityTest;

      if (barcodeQualityTestInfo != null)
        _barcodeReaderUiHelper.__showBarcodeResultDialog(barcodeInfo, barcodeQualityTestInfo);
    }
  }

  /**
   * Shows the dialog with barcode recognition result.
   * @param barcodeInfo Information about recognized barcode.
   * @param barcodeQualityTestInfo Information about print quality test of recognized barcode.
   */
  __showBarcodeResultDialog(barcodeInfo: object, barcodeQualityTestInfo: object) {
    // create a modal window with the barcode reading result
    let dlg: BarcodeRecognitionResultDialog = new BarcodeRecognitionResultDialog(_barcodeReaderUiHelper.modalService);
    dlg.barcodeRecognitionResult = barcodeInfo;
    dlg.open();
  }

}
