import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BarcodeAdvancedDemoComponent } from './barcode-advanced-demo/barcode-advanced-demo';

import { ErrorMessageDialogContent, ErrorMessageDialog } from './dialogs/error-message-dialog';
import { BlockUiDialogContent, BlockUiDialog } from './dialogs/block-ui-dialog';
import { ImageViewerSettingsDialogContent, ImageViewerSettingsDialog } from "./dialogs/image-viewer-settings-dialog"
import { BarcodeWriterSettingsDialogContent, BarcodeWriterSettingsDialog } from "./dialogs/barcode-writer-settings-dialog";
import { BarcodeReaderSettingsDialog, BarcodeReaderSettingsDialogContent } from "./dialogs/barcode-reader-settings-dialog";
import { BarcodeRecognitionResultDialogContent, BarcodeRecognitionResultDialog } from "./dialogs/barcode-recognition-result-dialog";

@NgModule({
  declarations: [
    AppComponent,
    BarcodeAdvancedDemoComponent,
    ErrorMessageDialogContent,
    ErrorMessageDialog,
    BlockUiDialog,
    BlockUiDialogContent,
    ImageViewerSettingsDialog,
    ImageViewerSettingsDialogContent,
    BarcodeWriterSettingsDialog,
    BarcodeWriterSettingsDialogContent,
    BarcodeReaderSettingsDialog,
    BarcodeReaderSettingsDialogContent,
    BarcodeRecognitionResultDialog,
    BarcodeRecognitionResultDialogContent
  ],
  entryComponents: [
    BlockUiDialog,
    BlockUiDialogContent,
    ErrorMessageDialog,
    ErrorMessageDialogContent,
    ImageViewerSettingsDialog,
    ImageViewerSettingsDialogContent,
    BarcodeWriterSettingsDialog,
    BarcodeWriterSettingsDialogContent,
    BarcodeReaderSettingsDialog,
    BarcodeReaderSettingsDialogContent,
    BarcodeRecognitionResultDialog,
    BarcodeRecognitionResultDialogContent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: BarcodeAdvancedDemoComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
