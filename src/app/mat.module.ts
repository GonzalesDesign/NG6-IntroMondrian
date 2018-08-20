import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
 /*  exports: [
    BrowserAnimationsModule, MatButtonModule, MatCheckboxModule
  ] */

  imports: [ BrowserAnimationsModule, MatButtonModule, MatCheckboxModule ],
  exports: [ BrowserAnimationsModule, MatButtonModule, MatCheckboxModule ]

})
export class MatModule { }
