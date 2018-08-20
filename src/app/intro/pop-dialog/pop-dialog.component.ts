/***********************************************
* Project: R.Lloyd Gonzales Portfolio Website
* URL: RLGonzales.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2018 GonzalesDesign
* Platform: Angular 6
* Component Name: PopDialogComponent
* Note: This is the pop-up that was called from
  MdcImageListComponent.
  MdcDialogRef & MDC_DIALOG_DATA is used to read
  the data passed from MdcImageListComponent.
************************************************/



import { Component, OnInit, Input, Inject } from '@angular/core';
import { MdcDialog, MdcDialogComponent, DIALOG_DATA, MdcDialogRef, MdcTextField } from '@angular-mdc/web';
// import { MdcDialog, MdcDialogComponent, MdcDialogRef, MdcTextField } from '@angular-mdc/web';
// import { MdcImageListComponent } from '../mdc-image-list.component';
// import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pop-dialog',
  // templateUrl: './pop-dialog.component.html',
  templateUrl: './popTest.html',
  styleUrls: ['./pop-dialog.component.scss']
})

export class PopDialogComponent implements OnInit {

  // public imageName = 'Image Name Test'; // = this.datax.name;
  public imageToLoad = this.datax.img; // '../../assets/Photos/photo6.jpg';
  // public imageName = this.datax.name;
  // public imageYpos = this.datax.posY; // '50'; // image vertical position
  // public description = this.datax.name + this.datax.desc;

  // constructor(private _dialog: MdcDialog) {}

  constructor(
    public _dialogRef: MdcDialogRef<PopDialogComponent>,
    @Inject(DIALOG_DATA) private datax: any ) {
      // @Inject(MAT_DIALOG_DATA) public datax: any ) {
  }

  ngOnInit () {
    // To convert json data to an html
    // const popDescription = document.getElementById('pop-image-description');
    // popDescription.innerHTML = this.datax.desc;
    // console.log('popDescription: ', popDescription);
  }

  fCloseModal() {
    console.log('CLOSED: ');
    // const dialogRef = this._dialogRef.close();
  }

}

