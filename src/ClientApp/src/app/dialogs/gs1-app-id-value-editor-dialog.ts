import { Component, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

let _gs1AppIdValueEditorDialogContent: Gs1AppIdValueEditorDialogContent;

/**
 A content for dialog that allows to edit the Application Identifier value of GS1 value.
 */
@Component({
  selector: 'gs1-app-id-value-editor-dialog-content',
  templateUrl: './gs1-app-id-value-editor-dialog.html'
})
export class Gs1AppIdValueEditorDialogContent {

  public gs1AppId: string = "";
  public gs1AppIdData: string = "";
  public okButtonClickedEvent: EventEmitter<any> = new EventEmitter();


  constructor(public activeModal: NgbActiveModal) {
    _gs1AppIdValueEditorDialogContent = this;
  }


  ngOnInit() {
    // initialize the 'gs1AppId' item
    let gs1AppIdItem: HTMLSelectElement = document.getElementById('gs1AppId') as HTMLSelectElement;
    gs1AppIdItem.value = this.gs1AppId;

    // initialize the 'gs1AppIdData' item
    let gs1AppIdDataItem: HTMLTextAreaElement = document.getElementById('gs1AppIdData') as HTMLTextAreaElement;
    gs1AppIdDataItem.value = this.gs1AppIdData;
  }

  /**
   Closes the dialog.
   */
  public closeDialog() {
    let gs1AppIdItem: HTMLSelectElement = document.getElementById('gs1AppId') as HTMLSelectElement;
    let gs1AppIdDataItem: HTMLTextAreaElement = document.getElementById('gs1AppIdData') as HTMLTextAreaElement;

    // get the application identifier
    let gs1AppId: string = gs1AppIdItem.value;
    // get the data of application identifier
    let gs1AppIdData: string = gs1AppIdDataItem.value;

    // get the name of application identifier
    let gs1AppIdSelectedText: string = gs1AppIdItem.options[gs1AppIdItem.selectedIndex].text;
    let splittedItems = gs1AppIdSelectedText.split(':');
    let gs1AppIdName: string = splittedItems[1].trim();


    function __validateGs1AppIdValueRequest_success(data: any) {
      // close this dialog
      _gs1AppIdValueEditorDialogContent.activeModal.close();

      // raise the "okButtonClicked" event
      _gs1AppIdValueEditorDialogContent.okButtonClickedEvent.emit({ gs1AppId: gs1AppId, gs1AppIdName: gs1AppIdName, gs1AppIdData: gs1AppIdData });
    }
    function __validateGs1AppIdValueRequest_error(data: any) {
      // show error message
      alert('ERROR: ' + data.errorMessage);
    }


    // create parameters for web request
    let requestParams = {
      type: 'POST',
      data: {
        gs1AppId: gs1AppId,
        gs1AppIdData: gs1AppIdData
      }
    }
    // create the web request for validating the GS1 Application Identifier value
    let request = new Vintasoft.Shared.WebRequestJS(
      "ValidateGs1AppIdValue",
      __validateGs1AppIdValueRequest_success,
      __validateGs1AppIdValueRequest_error,
      requestParams);
    // send the request to the Barcode web service
    Vintasoft.Shared.WebServiceJS.defaultBarcodeService.sendRequest(request);
  }

}


/**
 A dialog that allows to edit the Application Identifier value of GS1 value.
 */
@Component({
  selector: 'gs1-app-id-value-editor-dialog',
  templateUrl: './gs1-app-id-value-editor-dialog.html'
})
export class Gs1AppIdValueEditorDialog {

  private _modalReference: NgbModalRef | null;
  public gs1AppId: string = "";
  public gs1AppIdData: string = "";
  public okButtonClickedEvent: EventEmitter<any> = new EventEmitter();


  constructor(private modalService: NgbModal) {
    this._modalReference = null;
  }


  public open() {
    this._modalReference = this.modalService.open(Gs1AppIdValueEditorDialogContent);
    this._modalReference.componentInstance.gs1AppId = this.gs1AppId;
    this._modalReference.componentInstance.gs1AppIdData = this.gs1AppIdData;

    this._modalReference.componentInstance.okButtonClickedEvent.subscribe((receivedEntry: any) => {
      this.okButtonClickedEvent.emit(receivedEntry);
    });
  }

  /**
   Closes the dialog.
  */
  public closeDialog() {
    if (this._modalReference != null)
      this._modalReference.componentInstance.closeDialog();
  }

}
