import { Component, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'barcode-reader-settings-dialog-content',
  templateUrl: './barcode-reader-settings-dialog.html'
})
export class BarcodeReaderSettingsDialogContent {

  public barcodeReaderSettings: Vintasoft.Barcode.WebBarcodeReaderSettingsJS | null = null;
  public event: EventEmitter<any> = new EventEmitter();
  private _barcoderSettingsControl: PropertyGridControlJS | null = null;


  constructor(public activeModal: NgbActiveModal) {
  }


  // OnInit event occurs.
  ngOnInit() {
    if (this.barcodeReaderSettings == null)
      return;

    // create WebPropertyGridJS object for _barcode1DReaderSettings
    let propertyGrid = new Vintasoft.Shared.WebPropertyGridJS(this.barcodeReaderSettings);
    // create PropertyGridControlJS
    this._barcoderSettingsControl = new PropertyGridControlJS(propertyGrid, "barcodeReaderSettingGrid", { hideNestedElements: false, showReadOnlyElements: false });
    this._barcoderSettingsControl.createMarkup();

  }

  public closeDialog() {
    this.event.emit({ barcodeReaderSettings: this.barcodeReaderSettings });
    this.activeModal.close();
  }

}


@Component({
  selector: 'barcode-reader-settings-dialog',
  templateUrl: './barcode-reader-settings-dialog.html'
})
export class BarcodeReaderSettingsDialog {

  public barcodeReaderSettings: Vintasoft.Barcode.WebBarcodeReaderSettingsJS | null = null;
  public event: EventEmitter<any> = new EventEmitter();
  private _modalReference: NgbModalRef | null = null;


  constructor(private modalService: NgbModal) {
  }


  public get_Settings(): Vintasoft.Barcode.WebBarcodeReaderSettingsJS | null {
    return this.barcodeReaderSettings;
  }

  public open() {
    this._modalReference = this.modalService.open(BarcodeReaderSettingsDialogContent);
    this._modalReference.componentInstance.barcodeReaderSettings = this.barcodeReaderSettings;
    this._modalReference.componentInstance.event.subscribe((receivedEntry: any) => {
      this.event.emit({ barcodeReaderSettings: receivedEntry.barcodeReaderSettings });
    });
  }

  public closeDialog() {
    if (this._modalReference == null)
      return;

    this._modalReference.componentInstance.closeDialog();
  }

}
