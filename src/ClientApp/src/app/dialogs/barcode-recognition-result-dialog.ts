import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BarcodeRecognitionResultHelper } from '../barcode-advanced-demo/barcode-recognition-result-helper';


@Component({
  selector: 'barcode-recognition-result-dialog-content',
  templateUrl: './barcode-recognition-result-dialog.html'
})
export class BarcodeRecognitionResultDialogContent {

  public barcodeRecognitionResult: any;


  constructor(public activeModal: NgbActiveModal) {
  }


  /**
   * OnInit event occurs.
   */
  ngOnInit() {
    let barcodeRecognitionResultHelper: BarcodeRecognitionResultHelper = new BarcodeRecognitionResultHelper();
    let htmlMarkup: string = barcodeRecognitionResultHelper.createHtmlMarkupForBarcodeReadingResult(this.barcodeRecognitionResult);

    let barcodeInformationDialogElement: HTMLElement | null = document.getElementById("barcodeInformationDialog");
    if (barcodeInformationDialogElement != null)
      barcodeInformationDialogElement.innerHTML = htmlMarkup;
  }

  public closeDialog() {
    this.activeModal.close();
  }

}


@Component({
  selector: 'barcode-recognition-result-dialog',
  templateUrl: './barcode-recognition-result-dialog.html'
})
export class BarcodeRecognitionResultDialog {

  public barcodeRecognitionResult: any;
  private _modalReference: NgbModalRef | null = null;


  constructor(private modalService: NgbModal) {
  }


  public open() {
    this._modalReference = this.modalService.open(BarcodeRecognitionResultDialogContent);
    this._modalReference.componentInstance.barcodeRecognitionResult = this.barcodeRecognitionResult;
  }

  public closeDialog() {
    if (this._modalReference == null)
      return;

    this._modalReference.componentInstance.closeDialog();
  }

}
