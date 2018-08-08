


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

import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { IntroDataService } from './../../services/intro-data.service';
import { IntroAnimService } from './../../services/intro-anim.service';
import { FunksionsService } from '../../services/funksions.service';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, AfterViewInit {

  /* Assets variables from json file */
  public photos = [];
  public photosLength: number;
  public photoKontainer = [];
  public imageCard = [];
  public fotoWidth = 500;
  public fotoHeight = 50;
  public errorMsg;
  /* Loading variables */
  public loading = '.loading';
  public loadingKontainer = '.loading-kontainer';
  /* Main container */
  public mainContainerId = '#rlg-main-kontainer';
  /* Animation variables */
  public animeDuration = .5;
  public timeout = 1000;
  /* Media queries variables */
  public screenWidth: number = window.innerWidth;
  public innerWidth: any = window.innerWidth;


  constructor(private _funksions: FunksionsService,
              private _introDataService: IntroDataService,
              private _introAnim: IntroAnimService) { }

  ngOnInit() {
    this._introDataService.introData()
      .subscribe(data => {this.photos = data;
        this.photosLength =  data.length;
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          // this.photoKontainer.push('#' + element.kontainerId);
          this.photoKontainer[this.photoKontainer.length] = '#' + element.kontainerId; // push
          this.imageCard[this.imageCard.length] = '#' + element.imageId; // push
          // console.log('this.photoKontainer[i]: ', this.photoKontainer[i], this.photoKontainer.length);
        }

        // this._funksions.fDisplay(this.loadingKontainer, 'flex'); // show loader
        this._funksions.fLoadTimer(this.loading, this.timeout / 1000); // loading percentage
      },
      error => this.errorMsg = error); // ????????? Work on this error

      this._funksions.fDisplay(this.mainContainerId, 'none');

      setTimeout(() => {
        this.resizeMe();
        console.log('setTimeout');
      }, 100);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // this.fSliderInit();
      this._funksions.fRemoveLoader(this.loadingKontainer, 'none', .5); // remove loader
      this._funksions.fDisplay(this.mainContainerId, 'block'); // display mainContainer
      // this._funksions.fTLMx(this.mainContainer, this.imageNameKontainer); // animate images and titles
      this.medScrnSliderAnim();
    }, this.timeout);
  }

  /* fPhotosKontainer(d, val) {
    d.forEach(eachObj => {
      val = eachObj.kontainerId;
      console.log('val: ', eachObj.id, ' ', val);
    });
  } */

  /*---- Screen Resize ----*/
    // @HostListener('document:mousedown', ['$event'])
    @HostListener('window:resize', ['$event'])
    // @HostListener(this._windowRef._window(), ['$event'])
    onResize(event) {
    // onMouseDown(event) {
      this.resizeMe();
      // console.log('HostListener');
      // this.getViewportSize();
    }

  public smlScrnSliderAnim() {
    console.log('smlScrnSliderAnim()');
    // small max width: 600px
    const undf = undefined;
    const animDuration = this.animeDuration;
    const radius = '2px';
    const zed = 100;
    const fontSize = '18px';
    const tym1 = this.animeDuration;
    const tym2 = 2;
    // console.log('card-info-kontainer: ', document.getElementsByClassName('card-info-kontainer'));
    // console.log('card-kontainer-100: ', document.getElementById('#card-kontainer-100'));
    // console.log('this.cards.id: ', this.cards.id );
    // console.log('this.cardKontainer[0]: ', this.cardKontainer[0] );

    // this._sliderAnim.translateAnim('#title-kontainer', 0,  0,   1, animDuration);

    // this._createImageCard.imageContainer('rlg-kontainer', '466px', '450px');

    // fTranslateAnim             (elem,                    tym,      xp,      yp,  zp = 100,  w?: any, h?: any, sizeFont?: any, alfa = 1);
    this._introAnim.fTranslateAnim(this.photoKontainer[0],   tym1,    0,       0,    zed,    187,     243,    fontSize, 1);
    this._introAnim.fTranslateAnim(this.photoKontainer[1],   tym1,    0,     630,    200,    383,     243,    fontSize, 1);
    this._introAnim.fTranslateAnim(this.photoKontainer[2],   tym1,    0,    1260,    zed,    387,     443,    fontSize, 1);
    this._introAnim.fTranslateAnim(this.photoKontainer[3],   tym1,    0,    1890,    110,    300,     550,    fontSize, 1);
    this._introAnim.fTranslateAnim(this.photoKontainer[4],   tym1,    0,    2520,    zed,    483,     443,    fontSize, 1);
    this._introAnim.fTranslateAnim(this.photoKontainer[5],   tym1,    0,    3150,    120,    200,     243,    fontSize, 1);
    this._introAnim.fTranslateAnim(this.photoKontainer[6],   tym1,    0,    3780,    120,    200,     243,    fontSize, 1);
    this._introAnim.fTranslateAnim(this.photoKontainer[7],   tym1,    0,    4410,    120,    200,     243,    fontSize, 1);
    this._introAnim.fTranslateAnim(this.photoKontainer[8],   tym1,    0,    5040,    zed,    500,     243,    fontSize, 1);

    /*----- Animation service parameters listing for all the photo.imageId: The h affect how the button overlaps with the image.
    public backgroundImageTransform(                 elem,        tym,        w,        h, scl, bgSize?: any, hPos?: any, vPos?: any): any {x----*/
    this._introAnim.backgroundImageTransform(this.imageCard[0],  tym2,   '100%',      400,   1,       '100%',         20,      10);
    this._introAnim.backgroundImageTransform(this.imageCard[1],  tym2,   '100%',      550,   1,       '100%',      '50%',   '20%');
    this._introAnim.backgroundImageTransform(this.imageCard[2],  tym2,   '100%',      450,   1,       '100%',          0,       0);
    this._introAnim.backgroundImageTransform(this.imageCard[3],  tym2,   '100%',      450,   1,       '180%',      '90%',       5);
    this._introAnim.backgroundImageTransform(this.imageCard[4],  tym2,   '100%',      450,   1,       '100%',      '20%',   '10%');
    this._introAnim.backgroundImageTransform(this.imageCard[5],  tym2,   '100%',      450,   1,       '100%',          0,       0);
    this._introAnim.backgroundImageTransform(this.imageCard[6],  tym2,   '100%',      450,   1,       '100%',          0,       0);
    this._introAnim.backgroundImageTransform(this.imageCard[7],  tym2,   '100%',      450,   1,       '100%',          0,       0);
    this._introAnim.backgroundImageTransform(this.imageCard[8],  tym2,   '100%',      450,   1,       '100%',          0,       0);

  }

  public medScrnSliderAnim() {
    console.log('medScrnSliderAnim()');
    this.onSmallScreen('photo-info-kontainer', 'none'); // TEMP! hide this. this code goes to the media queries
    // medium max width: 800px
    const undf = undefined;
    const animDuration = this.animeDuration;
    const radius = '0px';
    const zed = 100;
    const fontSize = '18px';
    const tym1 = this.animeDuration;
    const tym2 = 2;


    // this._introAnim.fTranslateAnim();


    // this._introAnim.fTranslateAnim('#title-kontainer', 480,  100,   1, animDuration);
    // this._introAnim.fTranslateAnim('#rlg-kontainer', 680,  120,   1, animDuration);
    // this._createImageCard.imageContainer('rlg-kontainer', '900px');

    console.log('test: this.photoKontainer[0]: ', this.photoKontainer[0]);
    console.log('test: this.imageCard[0]: ', this.imageCard[0]);
    /*--- Animation service parameters listing for all the photo-kontainer
     translateAni(this._introAnim.transAnim(this.img[0],   xp,     yp,   tym1,    zed,    fontSize,    w?:,     h?:,    cornerRadius)----*/
     // fTranslateAnim             (elem,                    tym,      xp,      yp,  zp = 100,  w?: any, h?: any, sizeFont?: any, alfa = 1);
     this._introAnim.fTranslateAnim(this.photoKontainer[0],   tym1,    250,     10,    zed,    187,     243,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.photoKontainer[1],   tym1,     83,    280,    200,    383,     243,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.photoKontainer[2],   tym1,     50,    526,    zed,    387,     443,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.photoKontainer[3],   tym1,     20,   1000,    110,    300,     550,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.photoKontainer[4],   tym1,    460,    120,    zed,    483,     443,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.photoKontainer[5],   tym1,    350,    856,    120,    200,     243,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.photoKontainer[6],   tym1,    575,    856,    120,    200,     243,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.photoKontainer[7],   tym1,    800,    856,    120,    200,     243,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.photoKontainer[8],   tym1,    460,    588,    zed,    500,     243,    fontSize, 1);

     /*----- Animation service parameters listing for all the photo.imageId: The h affect how the button overlaps with the image.
     public backgroundImageTransform(                 elem,        tym,        w,        h, scl, bgSize?: any, hPos?: any, vPos?: any): any {x----*/
     this._introAnim.backgroundImageTransform(this.imageCard[0],  tym2,   '100%',   '250%',   1,       '150%',      '95%',      '20%');
     this._introAnim.backgroundImageTransform(this.imageCard[1],  tym2,   '100%',   '250%',   1,       '130%',      '50%',      '20%');
     this._introAnim.backgroundImageTransform(this.imageCard[2],  tym2,   '100%',   '250%',   1,       '130%',      '30%',       '0%');
     this._introAnim.backgroundImageTransform(this.imageCard[3],  tym2,   '100%',   '250%',   1,       '250%',        100,         20);
     this._introAnim.backgroundImageTransform(this.imageCard[4],  tym2,   '100%',   '250%',   1,       '120%',    '-50px',       '0%');
     this._introAnim.backgroundImageTransform(this.imageCard[5],  tym2,   '100%',   '250%',   1,       '150%',      '30%',      '20%');
     this._introAnim.backgroundImageTransform(this.imageCard[6],  tym2,   '100%',   '250%',   1,       '150%',      '50%',       '0%');
     this._introAnim.backgroundImageTransform(this.imageCard[7],  tym2,   '100%',   '250%',   1,       '200%',      '90%',    '-70px');
     this._introAnim.backgroundImageTransform(this.imageCard[8],  tym2,   '100%',   '250%',   1,       '100%',      '0px',      '24%');

  }

  public largeScrnSliderAnim() {
    const undf = undefined;
      const animDuration = this.animeDuration;
      const radius = '0px';
      const zed = 100;
      const fontSize = '18px';
      const tym1 = this.animeDuration;
      const tym2 = 2;

      // this._createImageCard.imageContainer('rlg-kontainer', '1300px');

      // this._sliderAnim.translateAnim('#title-kontainer', 652,  110,   1,    animDuration);

      /*--- Animation service parameters listing for all the card-kontainer
       translateAni(this._sliderAnim.transAnim(this.img[0],   xp,     yp,  animDuration,    zed,    fontSize,    w?:,     h?:,    cornerRadius)----*/
      //  this._sliderAnim.translateAnim(this.cardKontainer[0],    440,      0,   animDuration,    zed,    fontSize,    187,     243,     radius);
      //  this._sliderAnim.translateAnim(this.cardKontainer[1],    242,    268,   animDuration,    200,    fontSize,    383,     243,     radius);
      //  this._sliderAnim.translateAnim(this.cardKontainer[2],    438,    537,   animDuration,    zed,    fontSize,    187,     243,     radius);
      //  this._sliderAnim.translateAnim(this.cardKontainer[3],    122,    537,   animDuration,    110,    fontSize,    291,     243,     radius);
      //  this._sliderAnim.translateAnim(this.cardKontainer[4],    650,    121,   animDuration,    zed,    fontSize,    383,     243,     radius);
      //  this._sliderAnim.translateAnim(this.cardKontainer[5],    650,    388,   animDuration,    120,    fontSize,    187,     243,     radius);
      //  this._sliderAnim.translateAnim(this.cardKontainer[6],    860,    388,   animDuration,    120,    fontSize,    187,     243,     radius);
      //  this._sliderAnim.translateAnim(this.cardKontainer[7],   1070,    388,   animDuration,    120,    fontSize,    187,     243,     radius);
      //  this._sliderAnim.translateAnim(this.cardKontainer[8],    650,    655,   animDuration,    zed,    fontSize,    500,     243,     radius);

       /*----- Animation service parameters listing for all the card.imageId: The h affect how the button overlaps with the image.
       this._sliderAnim.backgroundImageTransform(this.imageCard[elem],      w,        h,   scl,  tym,    bgSize,     hPos,     vPos):----*/
      //  this._sliderAnim.backgroundImageTransform(this.imageCard[0],    '100%',   '250%',     1,    1,    '150%',    '95%',     '20%',  );
      //  this._sliderAnim.backgroundImageTransform(this.imageCard[1],    '100%',   '250%',     1,    1,    '130%',    '50%',     '20%',  );
      //  this._sliderAnim.backgroundImageTransform(this.imageCard[2],    '100%',   '250%',     1,    1,    '130%',    '30%',      '0%',  );
      //  this._sliderAnim.backgroundImageTransform(this.imageCard[3],    '100%',   '250%',     1,    1,    '250%',      100,        20,  );
      //  this._sliderAnim.backgroundImageTransform(this.imageCard[4],    '100%',   '250%',     1,    1,    '120%',  '-50px',      '0%',  );
      //  this._sliderAnim.backgroundImageTransform(this.imageCard[5],    '100%',   '250%',     1,    1,    '150%',    '30%',     '20%',  );
      //  this._sliderAnim.backgroundImageTransform(this.imageCard[6],    '100%',   '250%',     1,    1,    '150%',    '50%',         0,  );
      //  this._sliderAnim.backgroundImageTransform(this.imageCard[7],    '100%',   '250%',     1,    1,    '200%',    '90%',   '-70px',  );
      //  this._sliderAnim.backgroundImageTransform(this.imageCard[8],    '100%',   '250%',     1,    1,    '100%',    '0px',     '24%',  );

       // fTranslateAnim             (elem,                    tym,      xp,      yp,  zp = 100,  w?: any, h?: any, sizeFont?: any, alfa = 1);
      this._introAnim.fTranslateAnim(this.photoKontainer[0],   tym1,    440,      0,    zed,    187,     243,    fontSize, 1);
      this._introAnim.fTranslateAnim(this.photoKontainer[1],   tym1,    242,    268,    200,    383,     243,    fontSize, 1);
      this._introAnim.fTranslateAnim(this.photoKontainer[2],   tym1,    438,    537,    zed,    187,     243,    fontSize, 1);
      this._introAnim.fTranslateAnim(this.photoKontainer[3],   tym1,    122,    537,    110,    291,     243,    fontSize, 1);
      this._introAnim.fTranslateAnim(this.photoKontainer[4],   tym1,    650,    121,    zed,    383,     243,    fontSize, 1);
      this._introAnim.fTranslateAnim(this.photoKontainer[5],   tym1,    650,    388,    120,    187,     243,    fontSize, 1);
      this._introAnim.fTranslateAnim(this.photoKontainer[6],   tym1,    860,    388,    120,    187,     243,    fontSize, 1);
      this._introAnim.fTranslateAnim(this.photoKontainer[7],   tym1,   1070,    388,    120,    187,     243,    fontSize, 1);
      this._introAnim.fTranslateAnim(this.photoKontainer[8],   tym1,    650,    655,    zed,    500,     243,    fontSize, 1);

      /*----- Animation service parameters listing for all the photo.imageId: The h affect how the button overlaps with the image.
      public backgroundImageTransform(                 elem,        tym,        w,        h, scl, bgSize?: any, hPos?: any, vPos?: any): any {x----*/
      // this._introAnim.backgroundImageTransform(this.imageCard[0],  tym2,   '100%',   '250%',   1,       '150%',      '95%',      '20%');
      // this._introAnim.backgroundImageTransform(this.imageCard[1],  tym2,   '100%',   '250%',   1,       '130%',      '50%',      '20%');
      // this._introAnim.backgroundImageTransform(this.imageCard[2],  tym2,   '100%',   '250%',   1,       '130%',      '30%',       '0%');
      // this._introAnim.backgroundImageTransform(this.imageCard[3],  tym2,   '100%',   '250%',   1,       '250%',        100,         20);
      // this._introAnim.backgroundImageTransform(this.imageCard[4],  tym2,   '100%',   '250%',   1,       '120%',    '-50px',       '0%');
      // this._introAnim.backgroundImageTransform(this.imageCard[5],  tym2,   '100%',   '250%',   1,       '150%',      '30%',      '20%');
      // this._introAnim.backgroundImageTransform(this.imageCard[6],  tym2,   '100%',   '250%',   1,       '150%',      '50%',       '0%');
      // this._introAnim.backgroundImageTransform(this.imageCard[7],  tym2,   '100%',   '250%',   1,       '200%',      '90%',    '-70px');
      // this._introAnim.backgroundImageTransform(this.imageCard[8],  tym2,   '100%',   '250%',   1,       '100%',      '0px',      '24%');
      this._introAnim.backgroundImageTransform(this.imageCard[0],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.imageCard[1],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.imageCard[2],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.imageCard[3],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.imageCard[4],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.imageCard[5],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.imageCard[6],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.imageCard[7],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.imageCard[8],  tym2,   '100%',   '250%',   1,       'cover');

  }

  public onSmallScreen(cl, disp) {
    // const elem = document.getElementsByClassName(cl); // as HTMLCollectionOf<HTMLElement>;
    // const smallScreen = bool;
    // elem.style.cssText = 'display:' + bool + ';';
    // elem.style.display = bool;

    /* const myStyle = {
      elem.style.display = bool;
      // 'display': !smallScreen ? 'visible' : 'none'
    };
    return myStyle; */

    const elems = document.getElementsByClassName(cl) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.display = disp;
    }
  }

  /*---- Media queries ----*/
  public resizeMe() {

    // this.onImageCardsData();

    // console.log('resizeMe');
    // console.log('this.cards: ', this.cards[0]);
    // this.endAndStartTimer();

    // this.animeDuration = 0;

    // /*----- Get viewportSize working! ----*/
    // this.innerWidth = viewportSize.getWidth(); // window.innerWidth;
    this.innerWidth = window.innerWidth;
    /*------------------------------------*/
    console.log('this.innerWidth: ', this.innerWidth);

    if ( this.innerWidth >= 1300 ) {
      // this.animeDuration = 1000;
      this.largeScrnSliderAnim();
      // this.onVisibility('card-info-kontainer', 'none');
      // this.isSmallScreen = true;
      this.onSmallScreen('photo-info-kontainer', 'none'); // hide this
      this.onSmallScreen('rlg-button', 'flex');
      console.log('this.innerWidth: >= 1300');

    } else if ( this.innerWidth < 1299 && this.innerWidth >= 900 ) {
      // this.animeDuration = 1000; 768
      this.medScrnSliderAnim();
      // this.onVisibility('card-info-kontainer', 'none'); // hidden collapse
    // } else if ( this.innerWidth < 799 || this.innerWidth > 500 ) {
      this.onSmallScreen('photo-info-kontainer', 'none');
      this.onSmallScreen('rlg-button', 'flex');
      console.log('this.innerWidth: <1299 && >= 900');

    } else {
      // this.animeDuration = 1000;
      this.smlScrnSliderAnim();
      // this.onVisibility('card-info-kontainer', 'flex');
      // this.onVisibility('card-info-kontainer', 'flex');
      this.onSmallScreen('photo-info-kontainer', 'flex');
      this.onSmallScreen('rlg-button', 'none');
      console.log('this.innerWidth: <899');
      // console.log('card-info-kontainer: ', document.getElementsByClassName('card-info-kontainer'));
    }

  }

}
