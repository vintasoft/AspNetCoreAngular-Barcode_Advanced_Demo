import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ErrorMessageDialog } from "../dialogs/error-message-dialog";
import { BlockUiDialog } from "../dialogs/block-ui-dialog";
import { OpenFileHelper } from './open-file-helper';
import { BarcodeReaderUiHelper } from './barcode-reader-UI-helper'
import { BarcodeWriterUiHelper } from './barcode-writer-UI-helper'


let _barcodeAdvancedDemoComponent: BarcodeAdvancedDemoComponent;


@Component({
  selector: 'barcode-advanced-demo',
  templateUrl: './barcode-advanced-demo.html',
})
export class BarcodeAdvancedDemoComponent {

  // Document viewer.
  _docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS | null = null;

  // Helps to open files.
  _openFileHelper: OpenFileHelper | null = null;

  // Dialog that allows to block UI.
  _blockUiDialog: BlockUiDialog | null = null;

  _barcodeReaderUiHelper: BarcodeReaderUiHelper | null = null;
  _barcodeWriterUiHelper: BarcodeWriterUiHelper | null = null;



  constructor(public modalService: NgbModal, private httpClient: HttpClient) {
    _barcodeAdvancedDemoComponent = this;
  }



  /**
   * Component is initializing.
   */
  ngOnInit() {
    // get identifier of current HTTP session
    this.httpClient.get<any>('api/Session/GetSessionId').subscribe(data => {
      Vintasoft.Shared.VintasoftLocalizationJS.setStringConstant("vsdv-barcodeReaderSettingsDialog-title", "Barcode reader settings");

      // set the session identifier
      Vintasoft.Shared.WebImagingEnviromentJS.set_SessionId(data.sessionId);

      // specify web services
      Vintasoft.Shared.WebServiceJS.defaultFileService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftFileApi");
      Vintasoft.Shared.WebServiceJS.defaultImageCollectionService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftImageCollectionApi");
      Vintasoft.Shared.WebServiceJS.defaultImageService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftImageApi");
      Vintasoft.Shared.WebServiceJS.defaultBarcodeService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftBarcodeApi");

      this._barcodeReaderUiHelper = new BarcodeReaderUiHelper(this.modalService, this.__blockUI, this.__unblockUI, this.__showErrorMessage);
      this._barcodeWriterUiHelper = new BarcodeWriterUiHelper(this.__showErrorMessage);

      // register new UI elements
      this.__registerNewUiElements();

      // create the document viewer settings
      let docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS = new Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS("documentViewerContainer", "documentViewer");
      // enable image uploading from URL
      docViewerSettings.set_CanUploadImageFromUrl(true);
      docViewerSettings.set_CanClearSessionCache(true);

      // initialize main menu of document viewer
      this.__initMenu(docViewerSettings);

      // initialize side panel of document viewer
      this.__initSidePanel(docViewerSettings);

      // create the document viewer
      this._docViewer = new Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS(docViewerSettings);

      // subscribe to the "warningOccured" event of document viewer
      Vintasoft.Shared.subscribeToEvent(this._docViewer, 'warningOccured', this.__docViewer_warningOccured)
      // subscribe to the asyncOperationStarted event of document viewer
      Vintasoft.Shared.subscribeToEvent(this._docViewer, 'asyncOperationStarted', this.__docViewer_asyncOperationStarted)
      // subscribe to the asyncOperationFinished event of document viewer
      Vintasoft.Shared.subscribeToEvent(this._docViewer, 'asyncOperationFinished', this.__docViewer_asyncOperationFinished)
      // subscribe to the asyncOperationFailed event of document viewer
      Vintasoft.Shared.subscribeToEvent(this._docViewer, 'asyncOperationFailed', this.__docViewer_asyncOperationFailed)

      // get the image viewer of document viewer
      let imageViewer1: Vintasoft.Imaging.UI.WebImageViewerJS = this._docViewer.get_ImageViewer();
      // specify that image viewer must show images in the single continuous column mode
      imageViewer1.set_DisplayMode(new Vintasoft.Imaging.WebImageViewerDisplayModeEnumJS('SingleContinuousColumn'));
      // specify that image viewer must show images in the fit width mode
      imageViewer1.set_ImageSizeMode(new Vintasoft.Imaging.WebImageSizeModeEnumJS('FitToWidth'));
      // set 300 dpi resolution in image viewer
      imageViewer1.set_RenderingSettings(new Vintasoft.Shared.WebRenderingSettingsJS(new Vintasoft.Shared.WebResolutionJS(300, 300)));

      // create the progress image
      let progressImage: HTMLImageElement = new Image();
      progressImage.src = window.location + 'Images/fileUploadProgress.gif';
      // specify that the image viewer must use the progress image for indicating the image loading progress
      imageViewer1.set_ProgressImage(progressImage);

      // names of visual tools in composite visual tool
      let visualToolNames: string = "HighlightTool,PanTool";
      // if touch device is used
      if (this.__isTouchDevice()) {
        // get zoom tool from document viewer
        let zoomTool: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS = this._docViewer.getVisualToolById('ZoomTool');
        // specify that zoom tool should not disable context menu
        zoomTool.set_DisableContextMenu(false);

        // add name of zoom tool to the names of visual tools of composite visual tool
        visualToolNames = visualToolNames + ",ZoomTool";
      }
      // get the visual tool
      let visualTool: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS =
        this._docViewer.getVisualToolById(visualToolNames);
      this._docViewer.set_CurrentVisualTool(visualTool);

      // copy the default file to the uploaded image files directory and open the file
      this._openFileHelper = new OpenFileHelper(this.modalService, this._docViewer, this.__showErrorMessage);
      this._openFileHelper.openDefaultImageFile("VintasoftBarcodeDemo.png");
    });
  }



  // === "Tools" toolbar ===

  /**
   * Creates UI button for activating the visual tool, which allows to pan images in image viewer.
   */
  __createPanToolButton() {
    // if touch device is used
    if (_barcodeAdvancedDemoComponent.__isTouchDevice()) {
      return new Vintasoft.Imaging.UI.UIElements.WebUiVisualToolButtonJS({
        cssClass: "vsdv-tools-panButton",
        title: "Highlight, Pan, Zoom",
        localizationId: "panToolButton"
      }, "HighlightTool,PanTool,ZoomTool");
    }
    else {
      return new Vintasoft.Imaging.UI.UIElements.WebUiVisualToolButtonJS({
        cssClass: "vsdv-tools-panButton",
        title: "Highlight, Pan",
        localizationId: "panToolButton"
      }, "HighlightTool,PanTool");
    }
  }

  /**
   * Creates UI button for activating the visual tool, which allows to select the rectangular image region in image viewer.
   */
  __createRectangularSelectionToolButton() {
    return new Vintasoft.Imaging.UI.UIElements.WebUiVisualToolButtonJS({
      cssClass: "vsdv-tools-rectSelectionButton",
      title: "Highlight, Rectangular selection",
      localizationId: "rectangularSelectionToolButton"
    }, "HighlightTool,RectangularSelectionTool");
  }



  // === "Barcode" toolbar ===

  /**
   * Creates UI panel with barcode functionality.
   */
  __createBarcodePanel(): Vintasoft.Imaging.UI.Panels.WebUiPanelJS | null {
    let label: Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS =
      new Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS({ "text": "Barcode", localizationId: "barcodeLabel" });
    let button: Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS =
      new Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS([label], { cssClass: "vsui-subMenu-icon" });

    let readBarcodesButton: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS | null = null;
    let barcodeReaderSettingsButton: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS | null = null;
    let writeBarcodeButton: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS | null = null;
    let barcodeWriterSettingsButton: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS | null = null;
    if (_barcodeAdvancedDemoComponent._barcodeReaderUiHelper != null && _barcodeAdvancedDemoComponent._barcodeWriterUiHelper != null) {
      readBarcodesButton = _barcodeAdvancedDemoComponent._barcodeReaderUiHelper.createReadBarcodesButton();
      barcodeReaderSettingsButton = _barcodeAdvancedDemoComponent._barcodeReaderUiHelper.createBarcodeReaderSettingsButton();

      writeBarcodeButton = _barcodeAdvancedDemoComponent._barcodeWriterUiHelper.createWriteBarcodeButton();
      barcodeWriterSettingsButton = _barcodeAdvancedDemoComponent._barcodeWriterUiHelper.createBarcodeWriterSettingsButton();

      if (readBarcodesButton != null && barcodeReaderSettingsButton != null &&
        writeBarcodeButton != null && barcodeWriterSettingsButton != null) {
        return new Vintasoft.Imaging.UI.Panels.WebUiPanelJS(
          [Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.createElementById("panToolButton"),
          Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.createElementById("rectangularSelectionToolButton"),
          Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.createElementById("vertDivider"),
            readBarcodesButton,
            barcodeReaderSettingsButton,
          Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.createElementById("vertDivider"),
            writeBarcodeButton,
            barcodeWriterSettingsButton],
          { cssClass: "vsui-subMenu-contentPanel" }, button);
      }
    }
    return null;
  }



  // === Init UI ===

  /**
   * Registers custom UI elements in "WebUiElementsFactoryJS".
   */
  __registerNewUiElements() {
    // register the "Pan" button in web UI elements factory
    Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.registerElement("panToolButton", this.__createPanToolButton);
    // register the "Rectangular selection" button in web UI elements factory
    Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.registerElement("rectangularSelectionToolButton", this.__createRectangularSelectionToolButton);

    if (this._barcodeReaderUiHelper != null) {
      // register the "Barcode reading" panel in web UI elements factory
      Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.registerElement("barcodeReadingPanel", this._barcodeReaderUiHelper.createBarcodeReadingPanel);
    }

    // register the "Barcode" panel in web UI elements factory
    Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.registerElement("barcodeMenuPanel", this.__createBarcodePanel);
  }

  /**
   * Initializes main menu of document viewer.
   * @param docViewerSettings Settings of document viewer.
   */
  __initMenu(docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS) {
    // get items of document viewer
    let items: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS
      = docViewerSettings.get_Items();

    let uploadAndOpenFileButton: Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS = items.getItemByRegisteredId("uploadAndOpenFileButton") as Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS;
    if (uploadAndOpenFileButton != null)
      uploadAndOpenFileButton.set_FileExtensionFilter(".bmp, .cur, .doc, .docx, .gif, .ico, .j2k, .j2c, .jb2, .jbig2, .jp2, .jpc, .jpeg, .jpg, .jls, .pbm, .pcx, .pdf, .png, .tga, .tif, .tiff, .svg, .xls, .xlsx");

    // get the main menu of document viewer
    let mainMenu: Vintasoft.Imaging.UI.Panels.WebUiPanelContainerJS = items.getItemByRegisteredId("mainMenu") as Vintasoft.Imaging.UI.Panels.WebUiPanelContainerJS;
    // if main menu is found
    if (mainMenu != null) {
      // get items of main menu
      let mainMenuItems: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = mainMenu.get_Items();

      // remove the "Tools" menu
      mainMenuItems.removeItemAt(2);

      // add new item to the main menu
      mainMenuItems.addItem("barcodeMenuPanel");
    }
  }

  /**
   * Initializes the side panel of document viewer.
   * @param docViewerSettings Settings of document viewer.
   */
  __initSidePanel(docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS) {
    // get items of document viewer
    let items: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS
      = docViewerSettings.get_Items();

    let sidePanel: Vintasoft.Imaging.UI.Panels.WebUiSidePanelJS
      = items.getItemByRegisteredId('sidePanel') as Vintasoft.Imaging.UI.Panels.WebUiSidePanelJS;
    if (sidePanel != null) {
      let sidePanelItems: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS
        = sidePanel.get_PanelsCollection();

      sidePanelItems.addItem('barcodeReadingPanel');
    }
    // get the thumbnail viewer panel of document viewer
    let thumbnailViewerPanel: Vintasoft.Imaging.UI.Panels.WebUiThumbnailViewerPanelJS
      = items.getItemByRegisteredId('thumbnailViewerPanel') as Vintasoft.Imaging.UI.Panels.WebUiThumbnailViewerPanelJS;
    // if panel is found
    if (thumbnailViewerPanel != null)
      // subscribe to the "actived" event of the thumbnail viewer panel of document viewer
      Vintasoft.Shared.subscribeToEvent(thumbnailViewerPanel, 'activated', this.__thumbnailsPanelActivated);
  }

  /**
   * Thumbnail viewer panel of document viewer is actived.
   */
  __thumbnailsPanelActivated(event: any, eventArgs: any) {
    let uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS = event.target;
    let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;

    let thumbnailViewer: Vintasoft.Imaging.UI.WebThumbnailViewerJS = docViewer.get_ThumbnailViewer();
    if (thumbnailViewer != null) {
      // create the progress image
      let progressImage: HTMLImageElement = new Image();
      progressImage.src = window.location + 'Images/fileUploadProgress.gif';
      // specify that the thumbnail viewer must use the progress image for indicating the thumbnail loading progress
      thumbnailViewer.set_ProgressImage(progressImage);

      // additional bottom space for text with page number under thumbnail
      let textCaptionHeight: number = 18;
      let padding: any = thumbnailViewer.get_ThumbnailPadding();
      padding[2] += textCaptionHeight
      thumbnailViewer.set_ThumbnailPadding(padding);
      thumbnailViewer.set_DisplayThumbnailCaption(true);
    }
  }



  // === Document viewer events ===

  /**
   * Warning is occured in document viewer.
   */
  __docViewer_warningOccured(event: any, eventArgs: any) {
    // show the alert if warning occured
    alert(eventArgs.message);
  }

  /**
   * Asynchronous operation is started in document viewer.
   */
  __docViewer_asyncOperationStarted(event: any, data: any) {
    // get description of asynchronous operation
    let description: string = data.description;

    // if image is prepared for printing
    if (description === "Image prepared to print") {
      // do not block UI when images are preparing for printing
    }
    else {
      // block UI
      _barcodeAdvancedDemoComponent.__blockUI(data.description);
    }
  }

  /**
   * Asynchronous operation is finished in document viewer.
   */
  __docViewer_asyncOperationFinished(event: any, data: any) {
    // unblock UI
    _barcodeAdvancedDemoComponent.__unblockUI();
  }

  /**
   * Asynchronous operation is failed in document viewer.
   */
  __docViewer_asyncOperationFailed(event: any, data: any) {
    // unblock UI
    _barcodeAdvancedDemoComponent.__unblockUI();

    // get description of asynchronous operation
    let description: string = data.description;
    // get additional information about asynchronous operation
    let additionalInfo: any = data.data;
    // if additional information exists
    if (additionalInfo != null) {
      // show error message
      _barcodeAdvancedDemoComponent.__showErrorMessage(additionalInfo);
    }
    // if additional information does NOT exist
    else {
      // show error message
      _barcodeAdvancedDemoComponent.__showErrorMessage(description + ": unknown error.");
    }
  }


  // === Utils ===

  /**
   * Blocks the UI. 
   * @param text Message that describes why UI is blocked.
   */
  __blockUI(text: string) {
    _barcodeAdvancedDemoComponent._blockUiDialog = new BlockUiDialog(_barcodeAdvancedDemoComponent.modalService);
    _barcodeAdvancedDemoComponent._blockUiDialog.message = text;
    _barcodeAdvancedDemoComponent._blockUiDialog.open();
  }

  /**
   * Unblocks the UI.
   */
  __unblockUI() {
    if (_barcodeAdvancedDemoComponent._blockUiDialog == null)
      return;

    if (_barcodeAdvancedDemoComponent._blockUiDialog !== undefined)
      _barcodeAdvancedDemoComponent._blockUiDialog.close();
  }

  /**
   * Shows an error message.
   * @param data Information about error.
   */
  __showErrorMessage(data: any) {
    _barcodeAdvancedDemoComponent.__unblockUI();

    let dlg: ErrorMessageDialog = new ErrorMessageDialog(_barcodeAdvancedDemoComponent.modalService);
    dlg.errorData = data;
    dlg.open();
  }

  /**
   * Returns a value indicating whether touch device is used.
   */
  __isTouchDevice() {
    return navigator.maxTouchPoints > 0;
  }

}
