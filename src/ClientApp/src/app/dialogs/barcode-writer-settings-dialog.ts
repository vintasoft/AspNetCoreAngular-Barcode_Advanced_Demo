import { Component, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'barcode-writer-settings-dialog-content',
  templateUrl: './barcode-writer-settings-dialog.html'
})
export class BarcodeWriterSettingsDialogContent {

  // barcode writer settings
  public barcode1DWriterSettings: Vintasoft.Barcode.Web1DBarcodeWriterSettingsJS | null = null;
  public barcode2DWriterSettings: Vintasoft.Barcode.Web2DBarcodeWriterSettingsJS | null = null;
  public activeBarcodeWriterSettings: Vintasoft.Barcode.WebBarcodeWriterBaseSettingsJS | null = null;

  public event: EventEmitter<any> = new EventEmitter();

  // WebPropertyGridJS object for barcode writer settings
  private _1dBarcoderSettingsControl: Vintasoft.Imaging.DocumentViewer.Panels.WebUiPropertyGridPanelJS | null = null;
  private _2dBarcoderSettingsControl: Vintasoft.Imaging.DocumentViewer.Panels.WebUiPropertyGridPanelJS | null = null;


  constructor(public activeModal: NgbActiveModal) {
  }


  // OnInit event occurs.
  ngOnInit() {
    let propertyGrid;
    if (this.barcode1DWriterSettings != null) {
      // create WebPropertyGridJS object for barcode1DWriterSettings
      propertyGrid = new Vintasoft.Shared.WebPropertyGridJS(this.barcode1DWriterSettings);
      // create PropertyGridControlJS
      this._1dBarcoderSettingsControl = new Vintasoft.Imaging.DocumentViewer.Panels.WebUiPropertyGridPanelJS(
        propertyGrid,
        {
          cssClass: "vsui-dialogContent",
          css: { "padding": "0px", "border": "1px solid gray" }
        });
    }

    if (this.barcode2DWriterSettings != null) {
      // create WebPropertyGridJS object for barcode2DWriterSettings
      propertyGrid = new Vintasoft.Shared.WebPropertyGridJS(this.barcode2DWriterSettings);
      // create PropertyGridControlJS
      this._2dBarcoderSettingsControl = new Vintasoft.Imaging.DocumentViewer.Panels.WebUiPropertyGridPanelJS(
        propertyGrid,
        {
          cssClass: "vsui-dialogContent",
          css: { "padding": "0px", "border": "1px solid gray" }
        });
    }

    if (this.activeBarcodeWriterSettings == this.barcode2DWriterSettings) {
      let barcodeDimensionSelectDiv: HTMLSelectElement = document.getElementById("barcodeDimensionSelect") as HTMLSelectElement;
      barcodeDimensionSelectDiv.selectedIndex = 1;
    }

    this.barcodeDimensionChanged();
  }

  /**
   Barcode dimension (1D or 2D) is changed.
  */
  public barcodeDimensionChanged() {
    let barcodeDimensionSelectDiv: HTMLSelectElement = document.getElementById("barcodeDimensionSelect") as HTMLSelectElement;
    let currentDimension: string = barcodeDimensionSelectDiv.value;

    if (currentDimension === "1D") {
      this.activeBarcodeWriterSettings = this.barcode1DWriterSettings;
      if (this._1dBarcoderSettingsControl != null)
        this._1dBarcoderSettingsControl.show();
      if (this._2dBarcoderSettingsControl != null)
        this._2dBarcoderSettingsControl.hide();
    }
    else {
      this.activeBarcodeWriterSettings = this.barcode2DWriterSettings;
      if (this._1dBarcoderSettingsControl != null)
        this._1dBarcoderSettingsControl.hide();
      if (this._2dBarcoderSettingsControl != null)
        this._2dBarcoderSettingsControl.show();
    }
  }

  closeDialog() {
    this.event.emit({ barcodeWriterSettings: this.activeBarcodeWriterSettings });
    this.activeModal.close();
  }

}


@Component({
  selector: 'barcode-writer-settings-dialog',
  templateUrl: './barcode-writer-settings-dialog.html'
})
export class BarcodeWriterSettingsDialog {

  public barcode1DWriterSettings: Vintasoft.Barcode.Web1DBarcodeWriterSettingsJS | null = null;
  public barcode2DWriterSettings: Vintasoft.Barcode.Web2DBarcodeWriterSettingsJS | null = null;
  public activeBarcodeWriterSettings: Vintasoft.Barcode.WebBarcodeWriterBaseSettingsJS | null = null;
  public event: EventEmitter<any> = new EventEmitter();
  private _modalReference: NgbModalRef | null = null;



  constructor(private modalService: NgbModal) {
  }


  public get_Settings() {
    return this.activeBarcodeWriterSettings;
  }

  public open() {
    this._modalReference = this.modalService.open(BarcodeWriterSettingsDialogContent);
    this._modalReference.componentInstance.barcode1DWriterSettings = this.barcode1DWriterSettings;
    this._modalReference.componentInstance.barcode2DWriterSettings = this.barcode2DWriterSettings;
    this._modalReference.componentInstance.activeBarcodeWriterSettings = this.activeBarcodeWriterSettings;
    this._modalReference.componentInstance.event.subscribe((receivedEntry: any) => {
      this.event.emit({ barcodeWriterSettings: receivedEntry.barcodeWriterSettings });
    });
  }

  /**
   Barcode dimension (1D or 2D) is changed.
  */
  public barcodeDimensionChanged() {
    if (this._modalReference == null)
      return;

    this._modalReference.componentInstance.barcodeDimensionChanged();
  }

  public closeDialog() {
    if (this._modalReference == null)
      return;

    this._modalReference.componentInstance.closeDialog();
  }

}
