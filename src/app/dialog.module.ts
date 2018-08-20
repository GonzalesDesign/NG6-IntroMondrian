import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdcModule } from './mdc.module';

import { PopDialogComponent } from './intro/pop-dialog/pop-dialog.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MdcModule,
  ],
  declarations: [
    PopDialogComponent
  ],
  entryComponents: [
    PopDialogComponent
  ]
})
export class DialogModule { }
