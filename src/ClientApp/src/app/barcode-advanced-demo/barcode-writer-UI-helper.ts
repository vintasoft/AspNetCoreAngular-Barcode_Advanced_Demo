import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BarcodeWriterSettingsDialog } from "../dialogs/barcode-writer-settings-dialog";

let _barcodeWriterUiHelper: BarcodeWriterUiHelper;

/**
 A helper that helps to create UI for barcode writing.
*/
export class BarcodeWriterUiHelper {

  _docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS | null = null;
  _showErrorMessageFunc: Function;

  // Barcode writer.
  _barcodeWriter: Vintasoft.Barcode.WebBarcodeWriterJS;
  // Settings of barcode writer.
  _barcodeWriterSettingsDialog: BarcodeWriterSettingsDialog;
  // Button for barcode writing.
  _writeBarcodeButton: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS | null = null;



  constructor(private modalService: NgbModal, showErrorMessageFunc: Function) {
    _barcodeWriterUiHelper = this;

    this._showErrorMessageFunc = showErrorMessageFunc;

    let barcodeWriterSettings: Vintasoft.Barcode.Web1DBarcodeWriterSettingsJS = new Vintasoft.Barcode.Web1DBarcodeWriterSettingsJS();

    this._barcodeWriterSettingsDialog = new BarcodeWriterSettingsDialog(modalService);
    this._barcodeWriterSettingsDialog.barcode1DWriterSettings = barcodeWriterSettings;
    this._barcodeWriterSettingsDialog.barcode2DWriterSettings = new Vintasoft.Barcode.Web2DBarcodeWriterSettingsJS();
    this._barcodeWriterSettingsDialog.activeBarcodeWriterSettings = barcodeWriterSettings;

    this._barcodeWriter = new Vintasoft.Barcode.WebBarcodeWriterJS(Vintasoft.Shared.WebServiceJS.defaultBarcodeService);
    this._barcodeWriterSettingsDialog.event.subscribe(receivedEntry => {
      this._barcodeWriter.set_Settings(receivedEntry.barcodeWriterSettings);
    });
  }



  /**
   * Creates UI panel with barcode creation functionality.
   */
  createBarcodeWritingPanel() {
    // create the button that allows to start the asynchronous barcode generation process
    _barcodeWriterUiHelper._writeBarcodeButton
      = new Vintasoft.Imaging.UI.UIElements.WebUiButtonJS({
        cssClass: 'vsui-button writeBarcode',
        title: 'Write barcode',
        localizationId: 'writeBarcodeButton',
        css: {
          "margin-left": "5px"
        },
        onClick: _barcodeWriterUiHelper.__writeBarcodeButton_clicked
      });

    // create the button that allows to view and change the barcode writer settings
    let barcodeWriterSettingsButton: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS
      = new Vintasoft.Imaging.UI.UIElements.WebUiButtonJS({
        cssClass: 'vsui-button barcodeWriterSettings',
        title: 'Barcode writer settings',
        localizationId: 'barcodeWriterSettingsButton',
        css: {
          "margin-left": "5px"
        },
        onClick: _barcodeWriterUiHelper.__barcodeWriterSettingsButton_clicked
      });

    // create the text area with instructions how to create barcode
    let informationAboutWritingTextarea: Vintasoft.Imaging.UI.UIElements.WebUiTextareaElementJS
      = new Vintasoft.Imaging.UI.UIElements.WebUiTextareaElementJS({
        text: "Please do the following steps for writing barcode:\n1. Click the 'Barcode Writer Settings' button and specify necessary settings.\n\n2. Click the 'Write Barcode' button and new barcode image will be added to image viewer.",
        localizationId: 'barcodeWritingInstructionMessage',
        readonly: true,
        css: {
          position: "relative",
          width: "100%",
          height: "calc(100% - 45px)",
          "line-height": 1,
          "border-top": "1px solid #dddddd",
          "border-bottom": "1px solid #dddddd",
          "border-right": "0px",
          "border-left": "0px",
          resize: "none",
        }
      });

    // create the button that allows to open/close the barcode generation panel
    let panelOpenButton: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS
      = new Vintasoft.Imaging.UI.UIElements.WebUiButtonJS({
        cssClass: 'vsui-button barcodeWriter',
        title: 'Barcode writing',
        localizationId: 'barcodeWriterPanelButton'
      });

    // create an UI panel, which allows to generate barcode image
    return new Vintasoft.Imaging.UI.Panels.WebUiPanelJS([_barcodeWriterUiHelper._writeBarcodeButton, barcodeWriterSettingsButton, informationAboutWritingTextarea],
      { cssClass: 'vsui-sidePanel-content' }, panelOpenButton);
  }

  /**
   * "Write barcode" button is clicked.
   */
  __writeBarcodeButton_clicked(event: any, uiElement: any) {
    if (_barcodeWriterUiHelper._writeBarcodeButton == null)
      return;

    _barcodeWriterUiHelper._docViewer = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;

    _barcodeWriterUiHelper._barcodeWriter.getBarcodeAsBase64Image(_barcodeWriterUiHelper.__writeBarcode_success, _barcodeWriterUiHelper.__writeBarcode_error);

    // disable the "Generate barcode" button
    let writeBarcodeButtonElement: HTMLButtonElement = _barcodeWriterUiHelper._writeBarcodeButton.get_DomElement() as HTMLButtonElement;
    writeBarcodeButtonElement.disabled = true;
  }

  /**
   * "Barcode writer settings" button is clicked.
   */
  __barcodeWriterSettingsButton_clicked(event: any, uiElement: any) {
    _barcodeWriterUiHelper._docViewer = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;

    _barcodeWriterUiHelper._barcodeWriterSettingsDialog.open();
  }

  /**
   * Barcode generation is finished successfully.
   * @param data Information about created barcode.
   */
  __writeBarcode_success(data: any) {
    // get barcode image
    let imageAsBase64string: string = data.barcodeImage;
    // upload barcode image to the server
    Vintasoft.Imaging.VintasoftFileAPI.uploadBase64Image(imageAsBase64string, _barcodeWriterUiHelper.__saveBarcodeImage_success, _barcodeWriterUiHelper.__saveBarcodeImage_error);
  }

  /**
   * Barcode generation is failed.
   * @param data Information about error.
   */
  __writeBarcode_error(data: any) {
    if (_barcodeWriterUiHelper._writeBarcodeButton == null)
      return;

    // show the error message
    _barcodeWriterUiHelper._showErrorMessageFunc(data);

    // enable the "Generate barcode" button
    let writeBarcodeButtonElement: HTMLButtonElement = _barcodeWriterUiHelper._writeBarcodeButton.get_DomElement() as HTMLButtonElement;
    writeBarcodeButtonElement.disabled = false;
  }

  /**
   * Barcode image is successfully uploaded to the server.
   */
  __saveBarcodeImage_success(data: any) {
    if (_barcodeWriterUiHelper._docViewer == null || _barcodeWriterUiHelper._writeBarcodeButton == null)
      return;

    let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = _barcodeWriterUiHelper._docViewer.get_ImageViewer();

    // get image collection of image viewer
    let images: Vintasoft.Shared.WebImageCollectionJS = imageViewer.get_Images();
    // get count of images in image collection
    let count: number = images.get_Count();

    // create new image
    let image: Vintasoft.Shared.WebImageJS
      = new Vintasoft.Shared.WebImageJS(new Vintasoft.Shared.WebImageSourceJS(data.imageInfo.fileInfo.id), data.imageInfo.pageIndex);
    // add new image to the image collection
    images.add(image);

    // set focus to the added image
    imageViewer.set_FocusedIndex(count);

    // enable the "Generate barcode" button
    let writeBarcodeButtonElement: HTMLButtonElement = _barcodeWriterUiHelper._writeBarcodeButton.get_DomElement() as HTMLButtonElement;
    writeBarcodeButtonElement.disabled = false;
  }

  /**
   * Barcode uploading is failed.
   * @param data Information about error.
   */
  __saveBarcodeImage_error(data: any) {
    if (_barcodeWriterUiHelper._writeBarcodeButton == null)
      return;

    // show the error message
    _barcodeWriterUiHelper._showErrorMessageFunc(data);

    // enable the "Generate barcode" button
    let writeBarcodeButtonElement: HTMLButtonElement = _barcodeWriterUiHelper._writeBarcodeButton.get_DomElement() as HTMLButtonElement;
    writeBarcodeButtonElement.disabled = false;
  }

}
