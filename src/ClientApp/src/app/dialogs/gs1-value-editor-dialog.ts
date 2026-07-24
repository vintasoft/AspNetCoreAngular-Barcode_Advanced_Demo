import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Gs1AppIdValueEditorDialog } from "../dialogs/gs1-app-id-value-editor-dialog";

let _gs1ValueEditorDialogContent: Gs1ValueEditorDialogContent;

/**
 A content for dialog that allows to edit the GS1 value.
 */
@Component({
  selector: 'gs1-value-editor-dialog-content',
  templateUrl: './gs1-value-editor-dialog.html'
})
export class Gs1ValueEditorDialogContent {

  modalService: NgbModal | null = null;
  // GS1 value (an array of GS1 Application Identifier values)
  _gs1Value: any[] = [];
  _gs1AppIdValueIndex: number = -1;



  constructor(public activeModal: NgbActiveModal) {
    _gs1ValueEditorDialogContent = this;

    this._gs1Value.push({ appId: "01", appIdName: "GTIN", appIdData: "01234567890128" });
    this._gs1Value.push({ appId: "17", appIdName: "USE BY OR EXPIRY", appIdData: "091115" });
  }


  /**
   Initializes this dialog.
   */
  ngOnInit() {
    // update UI of this dialog
    this.updateUI();
  }

  /**
   Updates the UI of this dialog.
   */
  public updateUI() {
    let gs1PrintableValueItem: HTMLTextAreaElement = document.getElementById("gs1PrintableValue") as HTMLTextAreaElement;
    gs1PrintableValueItem.value = this.__getGs1PrintableValue();

    this.__clearGs1ValueTable();

    let table: HTMLTableElement = document.getElementById("gs1Value") as HTMLTableElement;
    // for each GS1 Application Identifier value in GS1 value
    for (var i = 0; i < this._gs1Value.length; i++) {
      // insert new row to a table that contains information about GS1 value
      let newRow = table.insertRow(-1);

      // insert 4 cells to the table row
      let cell1 = newRow.insertCell(0);
      let cell2 = newRow.insertCell(1);
      let cell3 = newRow.insertCell(2);
      let cell4 = newRow.insertCell(3);

      // get the GS1 Application Identifier value from GS1 value
      let gs1AppIdValue = this._gs1Value[i];

      // set information about GS1 Application Identifier value to the table cells
      cell1.textContent = gs1AppIdValue.appId;
      cell2.textContent = gs1AppIdValue.appIdName;
      cell3.textContent = gs1AppIdValue.appIdData;

      // create "Edit" button
      let editButton: HTMLButtonElement = document.createElement("button");
      // set button settings
      editButton.textContent = "Edit";
      editButton.type = "button";
      editButton.id = "EditButton" + i;
      // subscribe to the "click" event
      editButton.addEventListener("click", (event: MouseEvent) => {
        if (_gs1ValueEditorDialogContent.modalService != null) {
          // get the index of GS1 Application Identifier value in GS1 value
          let button: HTMLButtonElement = event.target as HTMLButtonElement;
          let gs1AppIdValueIndex: number = Number(button.id.substring("EditButton".length));
          _gs1ValueEditorDialogContent._gs1AppIdValueIndex = gs1AppIdValueIndex;

          // create dialog that allows to edit the GS1 Application Identifier value
          let dialog: Gs1AppIdValueEditorDialog = new Gs1AppIdValueEditorDialog(_gs1ValueEditorDialogContent.modalService);

          // get the GS1 Application Identifier value from GS1 value
          let gs1AppIdValue: any = _gs1ValueEditorDialogContent._gs1Value[gs1AppIdValueIndex];

          // set information about the GS1 Application Identifier value
          dialog.gs1AppId = gs1AppIdValue.appId;
          dialog.gs1AppIdData = gs1AppIdValue.appIdData;

          // subscribe to the "OkButtonClicked" event
          dialog.okButtonClickedEvent.subscribe(receivedEntry => {
            // get the GS1 Application Identifier value from GS1 value
            let gs1AppIdValue: any = _gs1ValueEditorDialogContent._gs1Value[_gs1ValueEditorDialogContent._gs1AppIdValueIndex];
            // change the GS1 Application Identifier value
            gs1AppIdValue.appId = receivedEntry.gs1AppId;
            gs1AppIdValue.appIdName = receivedEntry.gs1AppIdName;
            gs1AppIdValue.appIdData = receivedEntry.gs1AppIdData;

            // update the UI of this dialog
            _gs1ValueEditorDialogContent.updateUI();
          });

          // open the dialog
          dialog.open();
        }
      });
      // add "Edit" button to the table cell
      cell4.appendChild(editButton);

      // create "Delete" button
      let deleteButton: HTMLButtonElement = document.createElement("button");
      // set button settings
      deleteButton.textContent = "Delete";
      deleteButton.type = "button";
      deleteButton.id = "DeleteButton" + i;
      // subscribe to the "click" event
      deleteButton.addEventListener("click", (event: MouseEvent) => {
        // get the index of GS1 Application Identifier value in GS1 value
        let button: HTMLButtonElement = event.target as HTMLButtonElement;
        let gs1AppIdValueIndex: number = Number(button.id.substring("DeleteButton".length));

        // remove GS1 Application Identifier value from the GS1 value
        _gs1ValueEditorDialogContent.__removeAppIdValueFromGs1Value(gs1AppIdValueIndex);
        // update UI of this dialog
        _gs1ValueEditorDialogContent.updateUI();
      });
      // add "Delete" button to the table cell
      cell4.appendChild(deleteButton);
    }
  }

  /**
   Adds the GS1 Application Identifier value to the GS1 value.
   */
  public addGs1AppIdValueToGs1Value() {
    if (this.modalService != null) {
      this._gs1AppIdValueIndex = -1;

      // create dialog that allows to edit the GS1 Application Identifier value
      let dialog: Gs1AppIdValueEditorDialog = new Gs1AppIdValueEditorDialog(this.modalService);
      // set information about new Application Identifier value
      dialog.gs1AppId = "00";
      dialog.gs1AppIdData = "";

      // subscribe to the "OkButtonClicked" event
      dialog.okButtonClickedEvent.subscribe(receivedEntry => {
        // add the GS1 Application Identifier value to the GS1 value
        this._gs1Value.push({ appId: receivedEntry.gs1AppId, appIdName: receivedEntry.gs1AppIdName, appIdData: receivedEntry.gs1AppIdData });

        // update UI of this dialog
        _gs1ValueEditorDialogContent.updateUI();
      });

      // open the dialog
      dialog.open();
    }
  }

  /**
   Copies the GS1 printable value to the clipboard.
   */
  public copyGs1PrintableValueToClipboad() {
    let gs1PrintableValueItem: HTMLTextAreaElement = document.getElementById("gs1PrintableValue") as HTMLTextAreaElement;
    gs1PrintableValueItem.select();
    document.execCommand("copy");
    alert("GS1 printable value is copied to the clipboard.");
  }

  /**
   Removes the GS1 application identifier value from the GS1 value.
   */
  __removeAppIdValueFromGs1Value(appIdIndex: number) {
    this._gs1Value.splice(appIdIndex, 1);
  }

  /**
   Clears the GS1 value table in UI of this dialog.
   */
  __clearGs1ValueTable() {
    let table: HTMLTableElement = document.getElementById("gs1Value") as HTMLTableElement;
    let allRows = table.rows;
    while (allRows.length > 1) {
      allRows[1].remove();
    }
  }

  /**
   Returns the GS1 printable value.
   */
  __getGs1PrintableValue() {
    var gs1PrintableValue = "";
    for (var i = 0; i < this._gs1Value.length; i++) {
      gs1PrintableValue += "(" + this._gs1Value[i].appId + ")" + this._gs1Value[i].appIdData;
    }
    return gs1PrintableValue;
  }

  /**
   Closes the dialog.
   */
  public closeDialog() {
    this.activeModal.close();
  }

}


/**
 A dialog that allows to edit the GS1 value.
 */
@Component({
  selector: 'gs1-value-editor-dialog',
  templateUrl: './gs1-value-editor-dialog.html'
})
export class Gs1ValueEditorDialog {

  private _modalReference: NgbModalRef | null;


  constructor(private modalService: NgbModal) {
    this._modalReference = null;
  }


  public open() {
    this._modalReference = this.modalService.open(Gs1ValueEditorDialogContent);
    this._modalReference.componentInstance.modalService = this.modalService;
  }

  /**
   Adds the GS1 Application Identifier value to the GS1 value.
   */
  public addGs1AppIdValueToGs1Value() {
    if (this._modalReference != null)
      this._modalReference.componentInstance.addGs1AppIdValueToGs1Value();
  }

  /**
   Copies the GS1 printable value to the clipboard.
   */
  public copyGs1PrintableValueToClipboad() {
    if (this._modalReference != null)
      this._modalReference.componentInstance.copyGs1PrintableValueToClipboad();
  }

  /**
   Closes the dialog.
  */
  public closeDialog() {
    if (this._modalReference != null)
      this._modalReference.componentInstance.closeDialog();
  }

}
