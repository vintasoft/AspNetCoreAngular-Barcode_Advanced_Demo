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

      // register new UI elements
      this.__registerNewUiElements();

      // create the document viewer settings
      let docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS = new Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS("documentViewerContainer", "documentViewer");
      // enable image uploading from URL
      docViewerSettings.set_CanUploadImageFromUrl(true);

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
      imageViewer1.set_RenderingSettings(new Vintasoft.Shared.WebRenderingSettingsJS({ x: 300, y: 300 }));

      // create the progress image
      let progressImage: HTMLImageElement = new Image();
      progressImage.src = window.location + 'Images/fileUploadProgress.gif';
      // specify that the image viewer must use the progress image for indicating the image loading progress
      imageViewer1.set_ProgressImage(progressImage);

      // create the composite visual tool, which allows to highligh barcode recongition results in image viewer, select rectangular region on image in image viewer and pan image in image viewer
      let compositeTool: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS = this._docViewer.getVisualToolById('HighlightTool,PanTool,RectangularSelectionTool');
      // set the composite visual tool as active visual tool in image viewer
      this._docViewer.set_CurrentVisualTool(compositeTool);

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
    return new Vintasoft.Imaging.UI.UIElements.WebUiButtonJS({
      cssClass: 'vsui-button vsdv-tools-panButton',
      title: 'Pan',
      localizationId: 'panToolButton',
      onClick: _barcodeAdvancedDemoComponent.__panToolButton_clicked
    });
  }

  /**
   * "Pan" button is clicked.
   * @param event
   * @param uiElement
   */
  __panToolButton_clicked(event: any, uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS) {
    let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
    if (docViewer != null) {
      let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = docViewer.get_ImageViewer();
      if (imageViewer != null) {
        let compositeTool: Vintasoft.Imaging.UI.VisualTools.WebCompositeVisualToolJS = imageViewer.get_VisualTool() as Vintasoft.Imaging.UI.VisualTools.WebCompositeVisualToolJS;

        let rectangularSelectionTool: Vintasoft.Imaging.UI.VisualTools.WebRectangularSelectionToolJS
          = compositeTool.getTool(2) as Vintasoft.Imaging.UI.VisualTools.WebRectangularSelectionToolJS;
        rectangularSelectionTool.set_Rectangle({ x: 0, y: 0, width: 0, height: 0 });

        let panTool: Vintasoft.Imaging.UI.VisualTools.WebPanToolJS
          = compositeTool.getTool(1) as Vintasoft.Imaging.UI.VisualTools.WebPanToolJS;
        compositeTool.set_ActiveVisualTool(panTool);
      }
    }
  }

  /**
   * Creates UI button for activating the visual tool, which allows to select the rectangular image region in image viewer.
   */
  __createRectangularSelectionToolButton() {
    return new Vintasoft.Imaging.UI.UIElements.WebUiButtonJS({
      cssClass: 'vsui-button vsdv-tools-rectSelectionButton',
      title: 'Rectangular selection',
      localizationId: 'rectangularSelectionToolButton',
      onClick: _barcodeAdvancedDemoComponent.__rectangularSelectionToolButton_clicked
    });
  }

  /**
   * "Rectangular selection" button is clicked.
   * @param event
   * @param uiElement
   */
  __rectangularSelectionToolButton_clicked(event: any, uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS) {
    let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
    if (docViewer != null) {
      let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = docViewer.get_ImageViewer();
      if (imageViewer != null) {
        let compositeTool: Vintasoft.Imaging.UI.VisualTools.WebCompositeVisualToolJS
          = imageViewer.get_VisualTool() as Vintasoft.Imaging.UI.VisualTools.WebCompositeVisualToolJS;
        let rectangularSelectionTool: Vintasoft.Imaging.UI.VisualTools.WebRectangularSelectionToolJS
          = compositeTool.getTool(2) as Vintasoft.Imaging.UI.VisualTools.WebRectangularSelectionToolJS;
        compositeTool.set_ActiveVisualTool(rectangularSelectionTool);
      }
    }
  }



  // === Init UI ===

  /**
   * Registers custom UI elements in "WebUiElementsFactoryJS".
   */
  __registerNewUiElements() {
    var barcodeReaderUiHelper = new BarcodeReaderUiHelper(this.modalService, this.__blockUI, this.__unblockUI, this.__showErrorMessage);
    var barcodeWriterUiHelper = new BarcodeWriterUiHelper(this.__showErrorMessage);

    // register the "Pan" button in web UI elements factory
    Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.registerElement("panToolButton", this.__createPanToolButton);
    // register the "Rectangular selection" button in web UI elements factory
    Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.registerElement("rectangularSelectionToolButton", this.__createRectangularSelectionToolButton);

    // register the "Barcode reading" panel in web UI elements factory
    Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.registerElement("barcodeReadingPanel", barcodeReaderUiHelper.createBarcodeReadingPanel);
    // register the "Barcode generation" panel in web UI elements factory
    Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.registerElement("barcodeWritingPanel", barcodeWriterUiHelper.createBarcodeWritingPanel);
  }

  /**
   * Initializes main menu of document viewer.
   * @param docViewerSettings Settings of document viewer.
   */
  __initMenu(docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS) {
    // get items of document viewer
    let items: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS
      = docViewerSettings.get_Items();

    let uploadFileButton: Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS
      = items.getItemByRegisteredId('uploadFileButton') as Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS;
    if (uploadFileButton != null)
      uploadFileButton.set_FileExtensionFilter('.bmp, .emf, .gif, .ico, .cur, .jpg, .jpeg, .jls, .pcx, .png, .tif, .tiff, .wmf, .jb2, .jbig2, .jp2, .j2k, .j2c, .jpc, .pdf, .docx, .doc, .xlsx, .xls');

    // get the "Visual tools" menu panel
    let visualToolsToolbarPanel: Vintasoft.Imaging.DocumentViewer.Panels.WebUiVisualToolsToolbarPanelJS
      = items.getItemByRegisteredId("visualToolsToolbarPanel") as Vintasoft.Imaging.DocumentViewer.Panels.WebUiVisualToolsToolbarPanelJS;
    // if menu panel founded
    if (visualToolsToolbarPanel != null) {
      // get items of visual tool menu panel
      let visualToolsToolbarPanelItems: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS
        = visualToolsToolbarPanel.get_Items();

      // remove all items
      visualToolsToolbarPanelItems.clearItems();
      // add "Pan" button to the menu panel
      visualToolsToolbarPanelItems.addItem('panToolButton');
      // add "Rectangular Selection" button to the menu panel
      visualToolsToolbarPanelItems.addItem('rectangularSelectionToolButton');
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
      sidePanelItems.addItem('barcodeWritingPanel');
    }
    // get the thumbnail viewer panel of document viewer
    let thumbnailViewerPanel: Vintasoft.Imaging.DocumentViewer.Panels.WebUiThumbnailViewerPanelJS
      = items.getItemByRegisteredId('thumbnailViewerPanel') as Vintasoft.Imaging.DocumentViewer.Panels.WebUiThumbnailViewerPanelJS;
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
   Unblocks the UI.
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

}
