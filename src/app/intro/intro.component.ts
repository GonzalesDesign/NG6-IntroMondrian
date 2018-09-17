/***************************************************
* Project: R.Lloyd Gonzales Portfolio Website
* URL: RLGonzales.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2018 GonzalesDesign
* Platform: Angular 6
* Component Name: Intro Mondrian Component
* Note: This is the main component that controls
        most interactions. Service loaders and
        animation are all populated here.
        GSAP animation engine.
****************************************************/

/*--= Angular Core =----*/
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
/*--= Material: MDC =----*/
import { MdcDialog, MdcDialogRef } from '@angular-mdc/web';
/*--= Project's Components|Services =----*/
import { FunksionsService } from '../../services/funksions.service';
import { IntroAnimService } from '../../services/intro-anim.service';
import { IntroDataService } from '../../services/intro-data.service';
import { PopDialogComponent } from './pop-dialog/pop-dialog.component';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent implements OnInit, AfterViewInit {

  /*-= Assets variables from json file =----*/
  public photos = [];
  public photosLength: number;
  public photoKontainer = [];
  public foto = [];
  public fotoWidth = 500;
  public fotoHeight = 50;
    /*--= Secondary images =--*/
    public popUpImgsPath: string;
    public popUpImages = [];

  /*-= Loading variables =----*/
  public loading = '.loading';
  public loadingKontainer = '.loading-kontainer';
  /*-= Main container =----*/
  public mainContainerId = '#rlg-main-kontainer';
  /*-= Title variables =----*/
  public titleContainerId = '#title-kontainer';
  public title = '.title';
  public subTitle = '.sub-title';
  /*-= Photo layout container: Holds all the image containers =----*/
  public photoLayoutContainerId = '#rlg-kontainer';
  public fotoInfoKontainer = '.photo-info-kontainer';
  public infoButton = '.rlg-button';
  /*-= Animation variables =----*/
  public timeout = 1000;
  public tym1 = .5;
  public tym2 = .5;
  public tym3 = .5;
  /*-= Media queries variables =----*/
  public screenWidth: number = window.innerWidth;
  public innerWidth: any = window.innerWidth;
  public largeScreen = 1300;
  public mediumScreen = 900;
  public smallScreen = 600;
  /*-= Error variables =----*/
  public errorMsg;

  /*-= PopUp Modal Variables =---*/
  public isEscapeToClose = true;
  public isClickOutsideToClose = true;
  escapeToClose = true;
  clickOutsideToClose = true;
  backdrop = true;
  testText = 'Test text string from component';
  public aImahes = [];

  public imageName: string;


  constructor(private _funksions: FunksionsService,
              private _introDataService: IntroDataService,
              private _introAnim: IntroAnimService,
              private _dialog: MdcDialog) { }
              // private _dialogRef: MdcDialogRef<PopDialogComponent>) { } // IntroComponent PopDialogComponent

  ngOnInit() {

    /*---=|••• OBSERVABLE •••|=---*/
    this._introDataService.introData()
      .subscribe(data => {this.photos = data;
        this.photosLength =  data.length;
        console.log('this.photos: ', this.photos);

        /*--= Secondary images =---*/
        // console.log('data: ', data);
        // console.log('data[0]: ', data[0]);
        // console.log('data[0].imagePath: ', data[0].imagePath);
        // console.log('data[0].images: ', data[0].images);
        // console.log('data[0].images.image1: ', data[0].images.image1);

        /* this.popUpImgsPath = data[0].imagePath;
        console.log('this.popUpImgsPath: ', this.popUpImgsPath); */
        // const img = data[0].images[0]; // .image1;
        // console.log('img: ', img.length);

        // const imagePopUp = this.popUpImgsPath + img;
        // // console.log('imagePopUp: ', imagePopUp.toString());
        // this.popUpImages.push(imagePopUp);
        // console.log('popUpImage: ', this.popUpImgsPath + this.popUpImages);
        // const popUpImgsLength =  data.images.length; // test
        // console.log('popUpImgsLength: ', popUpImgsLength);

        // test
        for (let i = 0; i < 3; i++) {
          this.popUpImgsPath = data[0].imagePath;
          this.popUpImages.push(this.popUpImgsPath + data[i].images[i]);
          console.log('this.popUpImages: ', this.popUpImages);
        }

        /*--= Populating arrays =--*/
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          // this.photoKontainer.push('#' + element.kontainerId);
          this.photoKontainer[this.photoKontainer.length] = '#' + element.kontainerId; // push
          this.foto[this.foto.length] = '#' + element.imageId; // push
          // console.log('this.foto: ', this.foto);
          // console.log('this.photoKontainer[i]: ', this.photoKontainer[i], this.photoKontainer.length);
        }

        // this._funksions.fDisplay(this.loadingKontainer, 'flex'); // show loader
        this._funksions.fLoadTimer(this.loading, this.timeout / 1000); // loading pseudo percentage counter
      },
      error => this.errorMsg = error); // ????????? Work on this error

      this._funksions.fDisplay(this.mainContainerId, 'none');

      /*--= Triggering resizeMe on enter =--*/
      setTimeout(() => {
        this.resizeMe();
      }, 100);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._funksions.fRemoveLoader(this.loadingKontainer, 'none', .5); // remove loader
      this._funksions.fDisplay(this.mainContainerId, 'flex'); // display mainContainer
      this.resizeMe();
    }, this.timeout + 500);
  }

  /*---- Screen Resize ----*/
    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.resizeMe();
    }

  public smlScrnSliderAnim() {
    const zed = 100;
    const fontSize = '18px';
    const cardWidth = 450;
    const cardHeight = 1000;
    const cardUnoYPos = 90;
    const cardYPos = cardHeight + 30;
    const cardPadding = 8;
    const cardCenter = (this.smallScreen / 2) - (cardWidth / 2) - cardPadding;
    const fotoWidth = '100%';
    const fotoHeight = 60; // %
    // const fotoInfoHeight = '40%';
    const titleWidth = 450;
    const titleHeight = 60;

    console.log('this.popUpImages[0]: ', this.popUpImages[0]);

    /*--- Resize layout container: Used to position all content within ---*/
    this._funksions.fElementWidth(this.photoLayoutContainerId, this.smallScreen);

    /*--- Title and sub-title animation ---*/
    /* this._introAnim.fTranslateAnim              (elem,         tym,           xp,      yp,     zp,            w,             h,    fontSize, alfa); */
    this._introAnim.fTranslateAnim(this.titleContainerId,   this.tym3,   cardCenter,       0,    zed,    titleWidth,  titleHeight,    fontSize,    1);
    this._funksions.fTextAlign(this.title, 'left');
    this._funksions.fTextAlign(this.subTitle, 'left');

    /*--- Photo containers animation ---*/
    /* this._introAnim.fTranslateAnim2               (elem,         tym,           xp,                           yp,     zp,      w,                    h,  alfa); */
    this._introAnim.fTranslateAnim2(this.photoKontainer[0],   this.tym1,   cardCenter,                  cardUnoYPos,    zed,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[1],   this.tym1,   cardCenter,       cardYPos + cardUnoYPos,    200,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[2],   this.tym1,   cardCenter,   cardYPos * 2 + cardUnoYPos,    zed,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[3],   this.tym1,   cardCenter,   cardYPos * 3 + cardUnoYPos,    110,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[4],   this.tym1,   cardCenter,   cardYPos * 4 + cardUnoYPos,    zed,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[5],   this.tym1,   cardCenter,   cardYPos * 5 + cardUnoYPos,    120,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[6],   this.tym1,   cardCenter,   cardYPos * 6 + cardUnoYPos,    120,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[7],   this.tym1,   cardCenter,   cardYPos * 7 + cardUnoYPos,    120,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[8],   this.tym1,   cardCenter,   cardYPos * 8 + cardUnoYPos,    zed,    cardWidth,     cardHeight,     1);

    /*--- Photos animation ---*/
    /* this._introAnim.backgroundImageTransform(     elem,         tym,              w,                   h,      bgSize,          hPos,      vPos):---*/
    this._introAnim.backgroundImageTransform(this.foto[0],   this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',         '20%',     '10%');
    this._introAnim.backgroundImageTransform(this.foto[1],   this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',         '50%',      '20%');
    this._introAnim.backgroundImageTransform(this.foto[2],   this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',          '0%',       '0%');
    this._introAnim.backgroundImageTransform(this.foto[3],   this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',         '90%',       '5%');
    this._introAnim.backgroundImageTransform(this.foto[4],   this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',         '20%',      '10%');
    this._introAnim.backgroundImageTransform(this.foto[5],   this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',          '0%',       '0%');
    this._introAnim.backgroundImageTransform(this.foto[6],   this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',          '0%',       '0%');
    this._introAnim.backgroundImageTransform(this.foto[7],   this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',          '0%',       '0%');
    this._introAnim.backgroundImageTransform(this.foto[8],   this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',          '0%',       '0%');

  }

  public medScrnSliderAnim() {
    const zed = 100;
    const fontSize = '18px';
    const titleWidth = 350;
    const titleHeight = 100;

    const fotoWidth = '100%';
    const fotoHeight = 120; // %

    /*--- Resize layout container: Used to position all content within ---*/
    this._funksions.fElementWidth(this.photoLayoutContainerId, this.mediumScreen);

    /*--- Title and sub-title animation to place ---*/
    /* this._introAnim.fTranslateAnim              (elem,       tym,     xp, yp,     zp,            w,             h,    fontSize, alfa); */
    this._introAnim.fTranslateAnim(this.titleContainerId, this.tym3,    461,  28, zed, titleWidth, titleHeight, fontSize, 1);
    this._funksions.fTextAlign(this.title, 'left');
    this._funksions.fTextAlign(this.subTitle, 'left');

    /*--- Photo containers animation ---*/
    /* this._introAnim.fTranslateAnim                (elem,         tym,     xp,     yp,     zp,      w,       h,  alfa); */
    this._introAnim.fTranslateAnim2(this.photoKontainer[0],   this.tym1,    250,     10,    zed,    187,     243,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[1],   this.tym1,     83,    280,    200,    383,     243,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[2],   this.tym1,     50,    526,    zed,    387,     443,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[3],   this.tym1,     20,   1000,    110,    300,     550,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[4],   this.tym1,    460,    120,    zed,    483,     443,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[5],   this.tym1,    350,    856,    120,    200,     243,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[6],   this.tym1,    575,    856,    120,    200,     243,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[7],   this.tym1,    800,    856,    120,    200,     243,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[8],   this.tym1,    460,    588,    zed,    500,     243,     1);

    /*--- Photos animation ---*/
    /* this._introAnim.backgroundImageTransform(     elem,    tym,              w,                   h,      bgSize,        hPos,       vPos):---*/
    this._introAnim.backgroundImageTransform(this.foto[0],    this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '95%',      '20%');
    this._introAnim.backgroundImageTransform(this.foto[1],    this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '50%',      '20%');
    this._introAnim.backgroundImageTransform(this.foto[2],    this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '30%',       '0%');
    this._introAnim.backgroundImageTransform(this.foto[3],    this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '50%',      '20%');
    this._introAnim.backgroundImageTransform(this.foto[4],    this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',        '0%',      '0%');
    this._introAnim.backgroundImageTransform(this.foto[5],    this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '30%',      '20%');
    this._introAnim.backgroundImageTransform(this.foto[6],    this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '50%',       '0%');
    this._introAnim.backgroundImageTransform(this.foto[7],    this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '50%',      '0px');
    this._introAnim.backgroundImageTransform(this.foto[8],    this.tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '0px',      '35%');

  }

  public largeScrnSliderAnim() {
      const zed = 100;
      const fontSize = '22px';
      const titleWidth = 350;
      const titleHeight = 100;
      const fotoWidth = '100%';
      const fotoHeight = 120; // %

      /*--- Resize layout container: Used to position all content within ---*/
      this._funksions.fElementWidth(this.photoLayoutContainerId, this.largeScreen);
      // console.log('this.largeScreen: ', this.largeScreen);

      /*--- Title and sub-title animation to place ---*/
      this._introAnim.fTranslateAnim(this.titleContainerId, this.tym3, 70,  90, zed, titleWidth, titleHeight, fontSize, 1);
      this._funksions.fTextAlign(this.title, 'right');
      this._funksions.fTextAlign(this.subTitle, 'right');

      /*--- Photo containers animation ---*/
      /* this._introAnim.fTranslateAnim2               (elem,         tym,     xp,     yp,     zp,      w,       h,  alfa); */
      this._introAnim.fTranslateAnim2(this.photoKontainer[0],   this.tym1,    439,      0,    zed,    187,     243,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[1],   this.tym1,    242,    268,    200,    383,     243,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[2],   this.tym1,    438,    537,    zed,    187,     243,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[3],   this.tym1,    122,    537,    110,    291,     243,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[4],   this.tym1,    650,    -40,    zed,    350,     400,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[5],   this.tym1,    650,    387,    120,    187,     243,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[6],   this.tym1,    861,    387,    120,    187,     243,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[7],   this.tym1,   1072,    387,    120,    187,     243,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[8],   this.tym1,    650,    655,    zed,    500,     300,     1);

      /*--- Photos animation ---*/
      /* this._introAnim.backgroundImageTransform(     elem,          tym,               w,                   h,      bgSize,         hPos,       vPos):---*/
      this._introAnim.backgroundImageTransform(this.foto[0],    this.tym2,       fotoWidth,    fotoHeight + '%',     '150%, auto',   '80%',    '-40px');
      this._introAnim.backgroundImageTransform(this.foto[1],    this.tym2,       fotoWidth,    fotoHeight + '%',     'cover',        '50%',      '20%');
      this._introAnim.backgroundImageTransform(this.foto[2],    this.tym2,       fotoWidth,    fotoHeight + '%',     '200%, auto',   '70%',      '20%');
      this._introAnim.backgroundImageTransform(this.foto[3],    this.tym2,       fotoWidth,    fotoHeight + '%',     'cover',        '0px',    '-80px');
      this._introAnim.backgroundImageTransform(this.foto[4],    this.tym2,       fotoWidth,    fotoHeight + '%',     'cover',        '0px',      '20%');
      this._introAnim.backgroundImageTransform(this.foto[5],    this.tym2,       fotoWidth,    fotoHeight + '%',     'cover',        '30%',      '20%');
      this._introAnim.backgroundImageTransform(this.foto[6],    this.tym2,       fotoWidth,    fotoHeight + '%',     'cover',        '50%',       '0%');
      this._introAnim.backgroundImageTransform(this.foto[7],    this.tym2,       fotoWidth,    fotoHeight + '%',     'cover',        '90%',    '-30px');
      this._introAnim.backgroundImageTransform(this.foto[8],    this.tym2,       fotoWidth,    fotoHeight + '%',     'cover',        '0px',      '40%');

  }

  /*---- Media queries ----*/
  public resizeMe() {

    /*----- Get viewportSize working! ----*/
    // this.innerWidth = viewportSize.getWidth(); // window.innerWidth;
    this.innerWidth = window.innerWidth;

    if ( this.innerWidth >= this.largeScreen ) {
      this.largeScrnSliderAnim();
      this._funksions.fDisplayAll(this.fotoInfoKontainer, 'none');
      this._funksions.fDisplayAll(this.infoButton, 'flex');

    } else if ( this.innerWidth < this.largeScreen - 1 && this.innerWidth >= this.mediumScreen ) {
      this.medScrnSliderAnim();
      this._funksions.fDisplayAll(this.fotoInfoKontainer, 'none');
      this._funksions.fDisplayAll(this.infoButton, 'flex');

    } else {
      this.smlScrnSliderAnim();
      this._funksions.fDisplayAll(this.fotoInfoKontainer, 'flex');
      this._funksions.fDisplayAll(this.infoButton, 'none');
    }

  }

  // fOpenModal() {
  //     const dialogRef = this._dialog.open(PopDialogComponent, {
  //       // width: '300px';
  //       /* data: { img: img, name: name },
  //       escapeToClose: this.isEscapeToClose,
  //       clickOutsideToClose: this.isClickOutsideToClose, */
  //     });
  //       dialogRef.afterClosed().subscribe(result => {
  //           console.log(`The dialog was closed: ${result}`);
  //         //   this.animal = result;
  //         //   this.dialogResult = result;
  //       });

  //   }

  /* Modal test */
  fOpenModalX(img): void {
    const dialogRef = this._dialog.open(PopDialogComponent, {
      data: { img: img,
              text: 'This text is passed to the popup',
              width: '600px'
            }
      // console.log('OPEN!')
      // width: '600px'
    //   // data: { name: this.name, animal: this.animal, text: 'This text is passed to the popup' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed: ${result}`);
      // this.animal = result;
      // this.dialogResult = result;
    });

    console.log('OPEN!', this.foto[8]);


  }

  fOpenModal(img): void {
    const dialogRef = this._dialog.open(PopDialogComponent, {
      data: { imahe: img,
              text: 'This text is passed to the popup',
              width: '600px'
          },
          escapeToClose: this.isEscapeToClose,
          clickOutsideToClose: this.isClickOutsideToClose,
    });
    // this.imageName = img;
    console.log('OPEN!', img);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed: ${result}`);
      // this.animal = result;
      // this.dialogResult = result;
    });

  }

  openSimple(img, txt) {
    const dialogRef = this._dialog.open(DialogSimpleExample, {
      data: { imahe: img,
        text: 'This text is passed to the popup',
        width: '600px'
        // txt: this.testText
      },
      // this.testText: 'Test text',
      escapeToClose: this.escapeToClose,
      clickOutsideToClose: this.clickOutsideToClose,
      backdrop: this.backdrop
    });
    console.log('imahe: ', dialogRef.data.imahe, ' img: ', img, ' txt: ', txt );
    this.aImahes[this.aImahes.length] = img; // push
    console.log('this.aImahes: ', this.aImahes);
    console.log('this.foto: ', this.foto);



    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


/*----------------------------------------=
=---=| DialogSimpleExample Component |=---=
=-----------------------------------------*/
@Component({
  template: `
  <mdc-dialog class="popUpDialog">
    <mdc-dialog-surface>
      <mdc-dialog-header title="Use Google's location service?"></mdc-dialog-header>
      <mdc-dialog-body>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        <br>  {{testText}}
        </mdc-dialog-body>
      <mdc-dialog-footer>
        <button mdc-dialog-button [cancel]="true">Decline</button>
        <button mdc-dialog-button [accept]="true" (click)="closeDialog()">Accept</button>
      </mdc-dialog-footer>
    </mdc-dialog-surface>
  </mdc-dialog>
  `,
  styles: [`.popUpDialog {
                  z-index: 1000; // 99000 !important;
              }`]
})

export class DialogSimpleExample {

  public testText = 'Text from DialogSimpleExample';

  constructor(public dialogRef: MdcDialogRef<DialogSimpleExample>) { }

  closeDialog(): void {
    this.dialogRef.close('Pizza');
  }
}


