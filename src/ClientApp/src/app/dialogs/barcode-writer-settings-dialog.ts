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
  private _1dBarcoderSettingsControl: PropertyGridControlJS | null = null;
  private _2dBarcoderSettingsControl: PropertyGridControlJS | null = null;


  constructor(public activeModal: NgbActiveModal) {
  }


  // OnInit event occurs.
  ngOnInit() {
    let propertyGrid;
    if (this.barcode1DWriterSettings != null) {
      // create WebPropertyGridJS object for _barcode1DWriterSettings
      propertyGrid = new Vintasoft.Shared.WebPropertyGridJS(this.barcode1DWriterSettings);
      // create PropertyGridControlJS
      this._1dBarcoderSettingsControl = new PropertyGridControlJS(propertyGrid, "Barcode1DSettingsPropertyGrid", { hideNestedElements: false, showReadOnlyElements: false });
      this._1dBarcoderSettingsControl.createMarkup();
    }

    if (this.barcode2DWriterSettings != null) {
      propertyGrid = new Vintasoft.Shared.WebPropertyGridJS(this.barcode2DWriterSettings);
      this._2dBarcoderSettingsControl = new PropertyGridControlJS(propertyGrid, "Barcode2DSettingsPropertyGrid", { hideNestedElements: false, showReadOnlyElements: false });
      this._2dBarcoderSettingsControl.createMarkup();
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

    let barcode1DSettingsPropertyGridElement: HTMLElement | null = document.getElementById("Barcode1DSettingsPropertyGrid");
    let barcode2DSettingsPropertyGridElement: HTMLElement | null = document.getElementById("Barcode2DSettingsPropertyGrid");
    if (barcode1DSettingsPropertyGridElement != null && barcode2DSettingsPropertyGridElement != null) {
      if (currentDimension === "1D") {
        this.activeBarcodeWriterSettings = this.barcode1DWriterSettings;
        barcode1DSettingsPropertyGridElement.style.display = "block";
        barcode2DSettingsPropertyGridElement.style.display = "none";
      }
      else {
        this.activeBarcodeWriterSettings = this.barcode2DWriterSettings;
        barcode1DSettingsPropertyGridElement.style.display = "none";
        barcode2DSettingsPropertyGridElement.style.display = "block";
      }
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
