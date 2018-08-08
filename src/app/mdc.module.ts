import { NgModule } from '@angular/core';
import {
  MdcButtonModule,
  MdcIconModule,
  MdcCardModule,
  MdcIconToggleModule,
  MdcRippleModule,
  MdcTextFieldModule,
  MdcListModule,
  MdcThemeModule,
  MdcTypographyModule,
  MdcFabModule,
  MdcMenuModule
} from '@angular-mdc/web';

@NgModule({
  exports: [
    MdcCardModule,
    MdcButtonModule,
    MdcIconModule,
    MdcIconToggleModule,
    MdcRippleModule,
    MdcTextFieldModule,
    MdcListModule,
    MdcThemeModule,
    MdcTypographyModule,
    MdcFabModule,
    MdcMenuModule
  ]
})
export class AppMaterialModule { }
