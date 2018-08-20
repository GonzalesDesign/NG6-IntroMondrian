import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdcModule } from './mdc.module';
import { DialogModule } from './dialog.module';
import { MatModule } from './mat.module';

import { IntroComponent, DialogSimpleExample } from './intro/intro.component';
// import { PopDialogComponent } from './intro/pop-dialog/pop-dialog.component';
import { LoaderSvgComponent } from './loader-svg/loader-svg.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    // PopDialogComponent,
    DialogSimpleExample,
    LoaderSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MdcModule,
    DialogModule,
    // BrowserAnimationsModule,
    MatModule
  ],
  entryComponents: [
    // PopDialogComponent
    DialogSimpleExample
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
