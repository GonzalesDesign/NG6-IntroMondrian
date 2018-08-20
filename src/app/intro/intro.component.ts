


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
  public foto = [];
  public fotoWidth = 500;
  public fotoHeight = 50;
  public errorMsg;
  /* Loading variables */
  public loading = '.loading';
  public loadingKontainer = '.loading-kontainer';
  /* Main container */
  public mainContainerId = '#rlg-main-kontainer';
  /* Title variables */
  public titleContainerId = '#title-kontainer';
  public title = '.title';
  public subTitle = '.sub-title';
  /* Photo layout container: Holds all the image containers */
  public photoLayoutContainerId = '#rlg-kontainer';
  public fotoInfoKontainer = '.photo-info-kontainer';

  /* Animation variables */
  public animDuration = 2;
  public timeout = 2000;
  /* Media queries variables */
  public screenWidth: number = window.innerWidth;
  public innerWidth: any = window.innerWidth;
  public largeScreen = 1300;
  public mediumScreen = 900;
  public smallScreen = 600;


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
          this.foto[this.foto.length] = '#' + element.imageId; // push
          // console.log('this.photoKontainer[i]: ', this.photoKontainer[i], this.photoKontainer.length);
        }

        // this._funksions.fDisplay(this.loadingKontainer, 'flex'); // show loader
        this._funksions.fLoadTimer(this.loading, this.timeout / 1000); // loading percentage
      },
      error => this.errorMsg = error); // ????????? Work on this error

      this._funksions.fDisplay(this.mainContainerId, 'none');

      setTimeout(() => {
        this.resizeMe();
      }, 100);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // this.fSliderInit();
      this._funksions.fRemoveLoader(this.loadingKontainer, 'none', .5); // remove loader
      this._funksions.fDisplay(this.mainContainerId, 'flex'); // display mainContainer
      // this._funksions.fTLMx(this.mainContainer, this.imageNameKontainer); // animate images and titles
      // this.medScrnSliderAnim();
      this.resizeMe();
    }, this.timeout + 500);
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
    const zed = 100;
    const fontSize = '18px';
    const tym1 = this.animDuration;
    const tym2 = 2;
    const cardWidth = 450;
    const cardHeight = 600;
    const cardUnoYPos = 90;
    const cardYPos = cardHeight + 30;
    const cardPadding = 8;
    const cardCenter = (this.smallScreen / 2) - (cardWidth / 2) - cardPadding;
    const fotoWidth = '100%';
    const fotoHeight = 60; // %
    // const fotoInfoHeight = '40%';
    const titleWidth = 450;
    const titleHeight = 60;

    // console.log('card-info-kontainer: ', document.getElementsByClassName('card-info-kontainer'));
    // console.log('card-kontainer-100: ', document.getElementById('#card-kontainer-100'));
    // console.log('this.cards.id: ', this.cards.id );
    // console.log('smlScrnSliderAnim() cardCenter: ', cardCenter );

    // this._sliderAnim.translateAnim('#title-kontainer', 0,  0,   1, animDuration);

    // this._createImageCard.imageContainer('rlg-kontainer', '466px', '450px');

    /*--- Resize layout container: Used to position all content within ---*/
    this._funksions.fElementWidth(this.photoLayoutContainerId, this.smallScreen);

    /*--- Title and sub-title animation to place ---*/
    /* this._introAnim.fTranslateAnim              (elem,    tym,           xp,      yp,     zp,            w,             h,    fontSize, alfa); */
    this._introAnim.fTranslateAnim(this.titleContainerId,   tym1,   cardCenter,       0,    zed,    titleWidth,  titleHeight,    fontSize,    1);
    this._funksions.fTextAlign(this.title, 'left');
    this._funksions.fTextAlign(this.subTitle, 'left');

    const fotoInfoHeight = (100 - fotoHeight) + '%';
    this._funksions.fElementHeight(this.fotoInfoKontainer, fotoInfoHeight);
    console.log('fotoHeight: ', fotoHeight);
    console.log('fotoInfoHeight: ', fotoInfoHeight);
    console.log('this.fotoInfoKontainer: ', this.fotoInfoKontainer);



    /*--- Photo containers animation ---*/
    /* this._introAnim.fTranslateAnim2               (elem,    tym,           xp,                           yp,     zp,      w,                    h,  alfa); */
    this._introAnim.fTranslateAnim2(this.photoKontainer[0],   tym1,   cardCenter,                  cardUnoYPos,    zed,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[1],   tym1,   cardCenter,       cardYPos + cardUnoYPos,    200,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[2],   tym1,   cardCenter,   cardYPos * 2 + cardUnoYPos,    zed,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[3],   tym1,   cardCenter,   cardYPos * 3 + cardUnoYPos,    110,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[4],   tym1,   cardCenter,   cardYPos * 4 + cardUnoYPos,    zed,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[5],   tym1,   cardCenter,   cardYPos * 5 + cardUnoYPos,    120,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[6],   tym1,   cardCenter,   cardYPos * 6 + cardUnoYPos,    120,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[7],   tym1,   cardCenter,   cardYPos * 7 + cardUnoYPos,    120,    cardWidth,     cardHeight,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[8],   tym1,   cardCenter,   cardYPos * 8 + cardUnoYPos,    zed,    cardWidth,     cardHeight,     1);

    /*--- Photos animation ---*/
    /* this._introAnim.backgroundImageTransform2(     elem,   tym,       bgSize,          hPos,       vPos):---*/
    // this._introAnim.backgroundImageTransform2(this.foto[0],  tym2,      'cover',         '20%',      '10%');
    // this._introAnim.backgroundImageTransform2(this.foto[1],  tym2,      'cover',         '50%',      '20%');
    // this._introAnim.backgroundImageTransform2(this.foto[2],  tym2,      'cover',          '0%',       '0%');
    // this._introAnim.backgroundImageTransform2(this.foto[3],  tym2,      'cover',         '90%',       '5%');
    // this._introAnim.backgroundImageTransform2(this.foto[4],  tym2,      'cover',         '20%',      '10%');
    // this._introAnim.backgroundImageTransform2(this.foto[5],  tym2,      'cover',          '0%',       '0%');
    // this._introAnim.backgroundImageTransform2(this.foto[6],  tym2,      'cover',          '0%',       '0%');
    // this._introAnim.backgroundImageTransform2(this.foto[7],  tym2,      'cover',          '0%',       '0%');
    // this._introAnim.backgroundImageTransform2(this.foto[8],  tym2,      'cover',          '0%',       '0%');

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
    // console.log('medScrnSliderAnim()');
    // this.onSmallScreen(this.fotoInfoKontainer, 'none'); // TEMP! hide this. this code goes to the media queries
    // medium max width: 800px
    const zed = 100;
    const fontSize = '18px';
    const tym1 = this.animDuration;
    const tym2 = .5;
    const titleWidth = 350;
    const titleHeight = 100;

    const fotoWidth = '100%';
    const fotoHeight = 120; // %

    /*--- Resize layout container: Used to position all content within ---*/
    this._funksions.fElementWidth(this.photoLayoutContainerId, this.mediumScreen);

    /*--- Title and sub-title animation to place ---*/
    /* this._introAnim.fTranslateAnim              (elem,  tym,     xp, yp,     zp,            w,             h,    fontSize, alfa); */
    this._introAnim.fTranslateAnim(this.titleContainerId, tym1,    460,  25, zed, titleWidth, titleHeight, fontSize, 1);
    this._funksions.fTextAlign(this.title, 'left');
    this._funksions.fTextAlign(this.subTitle, 'left');

    // const fotoInfoHeight = (100 - fotoHeight) + '%';
    // this._funksions.fElementHeight(this.fotoInfoKontainer, fotoInfoHeight);
    // console.log('fotoHeight: ', fotoHeight);
    // console.log('fotoInfoHeight: ', fotoInfoHeight);
    // console.log('this.fotoInfoKontainer: ', this.fotoInfoKontainer);

    /*--- Photo containers animation ---*/
    /* this._introAnim.fTranslateAnim                (elem,    tym,     xp,     yp,     zp,      w,       h,  alfa); */
    this._introAnim.fTranslateAnim2(this.photoKontainer[0],   tym1,    250,     10,    zed,    187,     243,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[1],   tym1,     83,    280,    200,    383,     243,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[2],   tym1,     50,    526,    zed,    387,     443,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[3],   tym1,     20,   1000,    110,    300,     550,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[4],   tym1,    460,    120,    zed,    483,     443,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[5],   tym1,    350,    856,    120,    200,     243,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[6],   tym1,    575,    856,    120,    200,     243,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[7],   tym1,    800,    856,    120,    200,     243,     1);
    this._introAnim.fTranslateAnim2(this.photoKontainer[8],   tym1,    460,    588,    zed,    500,     243,     1);

    /*--- Photos animation ---*/
    /* this._introAnim.backgroundImageTransform(           elem,     tym,       bgSize,       hPos,       vPos): ---*/
    // this._introAnim.backgroundImageTransform2(this.foto[0],    tym2,      'cover',      '95%',      '20%');
    // this._introAnim.backgroundImageTransform2(this.foto[1],    tym2,      'cover',      '50%',      '20%');
    // this._introAnim.backgroundImageTransform2(this.foto[2],    tym2,      'cover',      '30%',       '0%');
    // this._introAnim.backgroundImageTransform2(this.foto[3],    tym2,      'cover',     '50%',      '20%');
    // this._introAnim.backgroundImageTransform2(this.foto[4],    tym2,      'cover',      '0px',       '0%');
    // this._introAnim.backgroundImageTransform2(this.foto[5],    tym2,      'cover',      '30%',      '20%');
    // this._introAnim.backgroundImageTransform2(this.foto[6],    tym2,      'cover',      '50%',       '0%');
    // this._introAnim.backgroundImageTransform2(this.foto[7],    tym2,      'cover',       '50%',      '0px');
    // this._introAnim.backgroundImageTransform2(this.foto[8],    tym2,      'cover',      '0px',      '24%');

    /* this._introAnim.backgroundImageTransform(     elem,    tym,              w,                   h,      bgSize,        hPos,       vPos):---*/
    this._introAnim.backgroundImageTransform(this.foto[0],    tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '95%',      '20%');
    this._introAnim.backgroundImageTransform(this.foto[1],    tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '50%',      '20%');
    this._introAnim.backgroundImageTransform(this.foto[2],    tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '30%',       '0%');
    this._introAnim.backgroundImageTransform(this.foto[3],    tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '50%',      '20%');
    this._introAnim.backgroundImageTransform(this.foto[4],    tym2,      fotoWidth,    fotoHeight + '%',     'cover',        '0%',      '0%');
    this._introAnim.backgroundImageTransform(this.foto[5],    tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '30%',      '20%');
    this._introAnim.backgroundImageTransform(this.foto[6],    tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '50%',       '0%');
    this._introAnim.backgroundImageTransform(this.foto[7],    tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '50%',      '0px');
    this._introAnim.backgroundImageTransform(this.foto[8],    tym2,      fotoWidth,    fotoHeight + '%',     'cover',      '0px',      '24%');

  }

  public largeScrnSliderAnim() {
      const zed = 100;
      const fontSize = '22px';
      const tym1 = this.animDuration;
      const tym2 = .5;
      const titleWidth = 350;
      const titleHeight = 100;

      /*--- Resize layout container: Used to position all content within ---*/
      this._funksions.fElementWidth(this.photoLayoutContainerId, this.largeScreen);
      console.log('this.largeScreen: ', this.largeScreen);

      /*--- Title and sub-title animation to place ---*/
      this._introAnim.fTranslateAnim(this.titleContainerId, tym1, 70,  90, zed, titleWidth, titleHeight, fontSize, 1);
      this._funksions.fTextAlign(this.title, 'right');
      this._funksions.fTextAlign(this.subTitle, 'right');

      /*--- Photo containers animation ---*/
      /* this._introAnim.fTranslateAnim2               (elem,    tym,     xp,     yp,     zp,      w,       h,  alfa); */
      this._introAnim.fTranslateAnim2(this.photoKontainer[0],   tym1,    439,      0,    zed,    187,     243,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[1],   tym1,    242,    268,    200,    383,     243,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[2],   tym1,    438,    537,    zed,    187,     243,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[3],   tym1,    122,    537,    110,    291,     243,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[4],   tym1,    650,    -40,    zed,    350,     400,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[5],   tym1,    650,    387,    120,    187,     243,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[6],   tym1,    861,    387,    120,    187,     243,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[7],   tym1,   1072,    387,    120,    187,     243,     1);
      this._introAnim.fTranslateAnim2(this.photoKontainer[8],   tym1,    650,    655,    zed,    500,     243,     1);

      /*--- Photos animation ---*/
      /* this._introAnim.backgroundImageTransform2(          elem,   tym,       bgSize,          hPos,       vPos):---*/
      this._introAnim.backgroundImageTransform2(this.foto[0],  tym2,       '150%, auto',   '95%',      '0px');
      this._introAnim.backgroundImageTransform2(this.foto[1],  tym2,       'cover',        '50%',      '20%');
      this._introAnim.backgroundImageTransform2(this.foto[2],  tym2,       '200%, auto',   '30%',      '20%');
      this._introAnim.backgroundImageTransform2(this.foto[3],  tym2,       'cover',        '0px',   '-120px');
      this._introAnim.backgroundImageTransform2(this.foto[4],  tym2,       'cover',        '0px',      '20%');
      this._introAnim.backgroundImageTransform2(this.foto[5],  tym2,       'cover',        '30%',      '20%');
      this._introAnim.backgroundImageTransform2(this.foto[6],  tym2,       'cover',        '50%',       '0%');
      this._introAnim.backgroundImageTransform2(this.foto[7],  tym2,       'cover',        '90%',    '-30px');
      this._introAnim.backgroundImageTransform2(this.foto[8],  tym2,       'cover',        '0px',      '40%');
      /* this._introAnim.backgroundImageTransform(this.foto[0],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.foto[1],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.foto[2],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.foto[3],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.foto[4],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.foto[5],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.foto[6],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.foto[7],  tym2,   '100%',   '250%',   1,       'cover');
      this._introAnim.backgroundImageTransform(this.foto[8],  tym2,   '100%',   '250%',   1,       'cover'); */

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

    // this.animDuration = 0;

    // /*----- Get viewportSize working! ----*/
    // this.innerWidth = viewportSize.getWidth(); // window.innerWidth;
    this.innerWidth = window.innerWidth;
    /*------------------------------------*/
    console.log('this.innerWidth: ', this.innerWidth);

    if ( this.innerWidth >= this.largeScreen ) {
      // this.animDuration = 1000;
      this.largeScrnSliderAnim();
      // this.onVisibility('card-info-kontainer', 'none');
      // this.isSmallScreen = true;
      this.onSmallScreen(this.fotoInfoKontainer, 'none'); // hide this
      this.onSmallScreen('rlg-button', 'flex');
      console.log('this.innerWidth: >= 1300');

    } else if ( this.innerWidth < this.largeScreen - 1 && this.innerWidth >= this.mediumScreen ) {
      // this.animDuration = 1000; 768
      this.medScrnSliderAnim();
      // this.onVisibility('card-info-kontainer', 'none'); // hidden collapse
    // } else if ( this.innerWidth < 799 || this.innerWidth > 500 ) {
      this.onSmallScreen('photo-info-kontainer', 'none');
      this.onSmallScreen('rlg-button', 'flex');
      console.log('this.innerWidth: <1299 && >= 900');

    } else {
      // this.animDuration = 1000;
      this.smlScrnSliderAnim();
      // this.onVisibility('card-info-kontainer', 'flex');
      // this.onVisibility('card-info-kontainer', 'flex');
      /* setTimeout(() => {
        this.onSmallScreen(this.fotoInfoKontainer, 'flex');
      }, 2 * 1000 ); */
      this.onSmallScreen('photo-info-kontainer', 'flex');
      this.onSmallScreen('rlg-button', 'none');
      console.log('this.innerWidth: <899');
      // console.log('card-info-kontainer: ', document.getElementsByClassName('card-info-kontainer'));
    }

  }

}
