let _barcodeWriterUiHelper: BarcodeWriterUiHelper;

/**
 A helper that helps to create UI for barcode writing.
*/
export class BarcodeWriterUiHelper {

  _docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS | null = null;
  _writeBarcodeButton: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS | null = null;
  _dialogInitialized: boolean;

  // create settings
  _barcode1DWriterSettings: Vintasoft.Barcode.Web1DBarcodeWriterSettingsJS;
  _barcode2DWriterSettings: Vintasoft.Barcode.Web2DBarcodeWriterSettingsJS;

  // create property grids
  _barcode1DPropertyGrid: Vintasoft.Shared.WebPropertyGridJS;
  _barcode2DPropertyGrid: Vintasoft.Shared.WebPropertyGridJS;

  // create dialog for changing settings
  _barcodeWriterSettingsDialog: Vintasoft.Imaging.UI.Dialogs.WebUiMultiPropertyGridDialogJS;

  _showErrorMessageFunc: Function;



  constructor(showErrorMessageFunc: Function) {
    _barcodeWriterUiHelper = this;
    this._dialogInitialized = false;

    // create settings
    this._barcode1DWriterSettings = new Vintasoft.Barcode.Web1DBarcodeWriterSettingsJS();
    this._barcode2DWriterSettings = new Vintasoft.Barcode.Web2DBarcodeWriterSettingsJS();

    // create property grids
    this._barcode1DPropertyGrid = new Vintasoft.Shared.WebPropertyGridJS(this._barcode1DWriterSettings);
    this._barcode2DPropertyGrid = new Vintasoft.Shared.WebPropertyGridJS(this._barcode2DWriterSettings);

    // create dialog for changing settings
    this._barcodeWriterSettingsDialog = new Vintasoft.Imaging.UI.Dialogs.WebUiMultiPropertyGridDialogJS(
      {
        title: "Barcode dimension:",
        selectors: [
          { text: "1D", value: "1d", localizationId: "1d", propertyGrid: this._barcode1DPropertyGrid },
          { text: "2D", value: "2d", localizationId: "2d", propertyGrid: this._barcode2DPropertyGrid },
        ],
        selectedIndex: 0
      },
      {
        title: "Barcode writer settings"
      }
    );

    this._showErrorMessageFunc = showErrorMessageFunc;
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
    if (_barcodeWriterUiHelper._writeBarcodeButton == null) {
      return;
    }

    // create the barcode writer
    let barcodeWriter = new Vintasoft.Barcode.WebBarcodeWriterJS(Vintasoft.Shared.WebServiceJS.defaultBarcodeService);

    // get the barcode writer settings from the barcode writer settings dialog
    let barcodeWriterSettings;
    // if current selected property grid index equals 1D settings index
    if (_barcodeWriterUiHelper._barcodeWriterSettingsDialog.get_SelectedPropertyGridIndex() == 0) {
      barcodeWriterSettings = _barcodeWriterUiHelper._barcode1DWriterSettings;
    }
    else {
      barcodeWriterSettings = _barcodeWriterUiHelper._barcode2DWriterSettings;
    }

    let writeBarcodeButton = _barcodeWriterUiHelper._writeBarcodeButton;
    let showErrorMessageFunc = _barcodeWriterUiHelper._showErrorMessageFunc;

    // set the barcode writer settings
    barcodeWriter.set_Settings(barcodeWriterSettings);
    // send an asynchronous request for generting the barcode image as a Base64 image
    barcodeWriter.getBarcodeAsBase64Image(
      function (data: any) {
        // get barcode image
        var imageAsBase64string = data.barcodeImage;
        // upload barcode image to the server
        Vintasoft.Imaging.VintasoftFileAPI.uploadBase64Image(
          imageAsBase64string,
          function (data: any) {
            var docViewer = uiElement.get_RootControl();
            var imageViewer = docViewer.get_ImageViewer();

            // get image collection of image viewer
            var images = imageViewer.get_Images();
            // get count of images in image collection
            var count = images.get_Count();

            // create new image
            var image = new Vintasoft.Shared.WebImageJS(new Vintasoft.Shared.WebImageSourceJS(data.imageInfo.fileInfo.id), data.imageInfo.pageIndex);
            // add new image to the image collection
            images.add(image);

            // set focus to the added image
            imageViewer.set_FocusedIndex(count);

            // enable the "Generate barcode" button
            let writeBarcodeButtonElement: HTMLButtonElement = writeBarcodeButton.get_DomElement() as HTMLButtonElement;
            writeBarcodeButtonElement.disabled = false;
          },
          function (data: any) {
            // show the error message
            showErrorMessageFunc(data);

            // enable the "Generate barcode" button
            let writeBarcodeButtonElement: HTMLButtonElement = writeBarcodeButton.get_DomElement() as HTMLButtonElement;
            writeBarcodeButtonElement.disabled = false;
          });
      },
      function (data: any) {
        // show the error message
        showErrorMessageFunc(data);

        // enable the "Generate barcode" button
        let writeBarcodeButtonElement: HTMLButtonElement = writeBarcodeButton.get_DomElement() as HTMLButtonElement;
        writeBarcodeButtonElement.disabled = false;
      });

    // disable the "Generate barcode" button
    let writeBarcodeButtonElement: HTMLButtonElement = writeBarcodeButton.get_DomElement() as HTMLButtonElement;
    writeBarcodeButtonElement.disabled = true;
  }

  /**
   * "Barcode writer settings" button is clicked.
   */
  __barcodeWriterSettingsButton_clicked(event: any, uiElement: any) {
    _barcodeWriterUiHelper._docViewer = uiElement.get_RootControl();

    if (!_barcodeWriterUiHelper._dialogInitialized) {
      _barcodeWriterUiHelper._docViewer?.get_Items().addItem(_barcodeWriterUiHelper._barcodeWriterSettingsDialog);
      _barcodeWriterUiHelper._dialogInitialized = true;
    }

    _barcodeWriterUiHelper._barcodeWriterSettingsDialog.show();
  }
}
