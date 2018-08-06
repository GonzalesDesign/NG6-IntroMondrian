import { IntroAnimService } from './../../services/intro-anim.service';


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

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IntroDataService } from './../../services/intro-data.service';
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
  public cardKontainer = [];
  /* Loading variables */
  public loading = '.loading';
  public loadingKontainer = '.loading-kontainer';
  /* Main container */
  public mainContainerId = '#rlg-main-kontainer';
  /* Animation variables */
  public animeDuration = 900;
  public timeout = 5000;
  /* Media queries variables */
  public screenWidth: number = window.innerWidth;


  constructor(private _funksions: FunksionsService,
              private _introDataService: IntroDataService,
              private _introAnim: IntroAnimService) { }

  ngOnInit() {
    this._introDataService.introData()
      .subscribe(data => {this.photos = data;
        this.photosLength =  data.length;
        // this.cardKontainer.push(data);
        // console.log('this.photosLength: ', this.photosLength, data);
        for (let i = 0; i < data.length; i++) {
          // this.cardKontainer.push(data.kontainerId);
          const element = this.photos[i].kontainerId;
          console.log('element: ', element);
        }
        for (const kontainerId in data) {
          if (data.hasOwnProperty(kontainerId)) {
            const element = data[kontainerId];
            this.cardKontainer.push(element.kontainerId);
            // console.log('element: ', element.kontainerId);
            // console.log('this.cardKontainer: ', this.cardKontainer);
          }
        }

        // this._funksions.fDisplay(this.loadingKontainer, 'flex'); // show loader
        this._funksions.fLoadTimer(this.loading, this.timeout / 1000); // loading percentage
      });
      this._funksions.fDisplay(this.mainContainerId, 'none');
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

  public medScrnSliderAnim() {
    // medium max width: 800px
    const undf = undefined;
    const animDuration = this.animeDuration;
    const radius = '0px';
    const zed = 100;
    const fontSize = '18px';
    const tym1 = this.animeDuration;
    const tym2 = 0;


    // this._introAnim.fTranslateAnim();


    this._introAnim.fTranslateAnim('#title-kontainer', 480,  100,   1, animDuration);
    // this._introAnim.fTranslateAnim('#rlg-kontainer', 680,  120,   1, animDuration);
    // this._createImageCard.imageContainer('rlg-kontainer', '900px');

    console.log('test: this.cardKontainer[0]: ', this.cardKontainer[0]);
    /*--- Animation service parameters listing for all the card-kontainer
     translateAni(this._sliderAnim.transAnim(this.img[0],   xp,     yp,   tym1,    zed,    fontSize,    w?:,     h?:,    cornerRadius)----*/
     // fTranslateAnim             (elem,                    tym, xp, yp, zp = 100, w?: any, h?: any, sizeFont?: any, alfa = 1);
     this._introAnim.fTranslateAnim(this.cardKontainer[0],   tym1,    250,     10,    zed,    187,     243,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.cardKontainer[1],   tym1,     83,    280,    200,    383,     243,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.cardKontainer[2],   tym1,     50,    526,    zed,    387,     443,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.cardKontainer[3],   tym1,     20,   1000,    110,    300,     550,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.cardKontainer[4],   tym1,    460,    120,    zed,    483,     443,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.cardKontainer[5],   tym1,    350,    856,    120,    200,     243,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.cardKontainer[6],   tym1,    575,    856,    120,    200,     243,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.cardKontainer[7],   tym1,    800,    856,    120,    200,     243,    fontSize, 1);
     this._introAnim.fTranslateAnim(this.cardKontainer[8],   tym1,    460,    588,    zed,    500,     243,    fontSize, 1);

     /*----- Animation service parameters listing for all the card.imageId: The h affect how the button overlaps with the image.
     this._sliderAnim.backgroundImageTransform(this.imageCard[elem],      w,        h,   scl,  tym2,    bgSize,     hPos,     vPos):----*/
     /* this._sliderAnim.backgroundImageTransform(this.imageCard[0],    '100%',   '250%',     1,  tym2,    '150%',    '95%',     '20%',  );
     this._sliderAnim.backgroundImageTransform(this.imageCard[1],    '100%',   '250%',     1,  tym2,    '130%',    '50%',     '20%',  );
     this._sliderAnim.backgroundImageTransform(this.imageCard[2],    '100%',   '250%',     1,  tym2,    '130%',    '30%',      '0%',  );
     this._sliderAnim.backgroundImageTransform(this.imageCard[3],    '100%',   '250%',     1,  tym2,    '250%',      100,        20,  );
     this._sliderAnim.backgroundImageTransform(this.imageCard[4],    '100%',   '250%',     1,  tym2,    '120%',  '-50px',      '0%',  );
     this._sliderAnim.backgroundImageTransform(this.imageCard[5],    '100%',   '250%',     1,  tym2,    '150%',    '30%',     '20%',  );
     this._sliderAnim.backgroundImageTransform(this.imageCard[6],    '100%',   '250%',     1,  tym2,    '150%',    '50%',         '0%',  );
     this._sliderAnim.backgroundImageTransform(this.imageCard[7],    '100%',   '250%',     1,  tym2,    '200%',    '90%',   '-70px',  );
     this._sliderAnim.backgroundImageTransform(this.imageCard[8],    '100%',   '250%',     1,  tym2,    '100%',    '0px',     '24%',  ); */

  }

}
