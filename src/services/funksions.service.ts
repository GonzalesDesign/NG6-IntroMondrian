

/***********************************************************
* Project: R.Lloyd Gonzales Portfolio Website
* URL: RLGonzales.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2018 GonzalesDesign
* Platform: Angular 6
* Service Name: FunksionsService
* Note: Miscellaneous functions that can be called anywhere
***********************************************************/


import { Injectable, OnInit } from '@angular/core';
// import anime from 'animejs';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
// import { Carousel3DataService } from './../services/carousel3-data.service';
import { TweenMax, TimelineMax, TweenLite, Power2, Power4, Elastic } from "gsap/TweenMax";

@Injectable({
  providedIn: 'root'
})
// export class FunksionsService implements OnInit {

  export class FunksionsService {

  // public aFotos = [];
  // public aFotosLength: number;
  // public imgOrientation: string;

  public hideElement = false;
  public tL = new TimelineMax();



  // constructor(private _carousel3DataService: Carousel3DataService) {

    constructor() {}

  /* ngOnInit() {
    this._carousel3DataService.carousel3Data()
      // .pipe(
      //   throttleTime(1000)
      // )
      .subscribe(data => {this.aFotos = data;
        this.aFotosLength =  data.length;
        // console.log('this.aFotosLength: ', this.aFotosLength);
        // this.imgOrientation = this.aFotos.orientation;
        // this._carousel.fDisplay(this.loading);
        // data is in but not outside .subscribe
        });
  } */

  /* fQuerySelector(e, s) {
    const x = document.querySelector(e), s = x.style;
  } */


  /*- For text alignment.
      options: center, left, right, justify ----*/
  fTextAlign(e, align) {
    const x = document.querySelector(e), s = x.style;
    s.textAlign = align;
  }

  /*- For displaying an element.
      options: none, inline, block or inline-block ----*/
  fDisplay(e, disp) {
    // console.log(e);
    // console.log(disp);
    const x = document.querySelector(e), s = x.style;
    s.display = disp;
  }

  fDisplayAll(e, disp) {
    const elems = document.querySelectorAll(e); // as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.display = disp;
        // elems[i].style.opacity = 0;
        // this.fTMxToAlfa(elems[i], 5, 1, Power2.easeOut);
        // this.fTMxFrAlpha(elems[i], 1, alfa, Power2.easeOut);
    }
    // this.fTMxFrAlpha(elems, 1, alfa, Power2.easeOut);
  }

  fRemoveLoader(e, disp, tym) {
    const x = document.querySelector(e); // , s = x.style;
    if (disp === 'none') {
      this.fTMxToAlfa(x, tym, 0, Power2.easeOut);
      setTimeout(() => {
        x.parentNode.removeChild(x);
      }, tym * 1000 );
    }
    // const elem = document.getElementById(id);
    // return elem.parentNode.removeChild(elem);
    // function(x){
    //   x.parentNode.removeChild(x);
    // })(document.getElementById(id)
}

/* public fSetTimeout(funct, tym) {
  setTimeout(() => {
    funct: any;
  }, tym * 1000 );
} */

  /*- Setting an element visibility.
      options: visible, hidden ----*/
  fElementVisibility(e, vis) {
    // console.log(e);
    // console.log(vis);
    const x = document.querySelector(e), s = x.style;
    s.visibility = vis;
  }
  fElementOpacity(e, alfa) {
    // console.log(e);
    // console.log(vis);
    const x = document.querySelector(e), s = x.style;
    s.opacity = alfa;
  }

  /*- Setting width of an element. ----*/
  fElementWidth(e, w) {
    const x = document.querySelector(e), s = x.style;
    s.width = w + 'px';
    // console.log('e | w : ', e, ' | ', w);
  }
  fElementWidthId(id, w) {
    const x = document.getElementById(id), s = x.style;
    s.width = w + 'px';
    // console.log('e | w : ', e, ' | ', w);
  }

  /*- Setting height of an element. ----*/
  fElementHeight(e, h) {
    const x = document.querySelector(e), s = x.style;
    s.height = h; // + '%';
    // console.log('e | h : ', e, ' | ', h);
  }

  /*- Setting an element horizontal position. ----*/
  fElementXPosition(e, xPos) {
    const x = document.querySelector(e), s = x.style;
    // s.left = xPos + 'px';
    s.translateX = xPos + 'px';
    console.log('e | fElementXPosition : ', e, ' | ', xPos);
  }
  // fElementXPositionId(e, xPos) {
  //   const x = document.getElementById(e), s = x.style;
  //   // s.left = xPos + 'px';
  //   s.translateX = xPos + 'px';
  //   console.log('e | fElementXPositionId : ', e, ' | ', xPos);
  // }
  /*- Setting an element vertical position. ----*/
  fElementYPosition(e, yPos) {
    const x = document.querySelector(e), s = x.style;
    s.top = yPos + 'vh';
    // s.translateY = yPos + 'px';
    // console.log('e | fElementXPosition : ', e, ' | ', yPos);
  }

  /*- If image is in landscape mode, cover the whole frame, else, follow media queries ---*/
  /* fDisplayVerticalHorizontal(orientation, imgsNum2Display) {

    if (orientation === 'portrait') {
      imgsNum2Display = imgsNum2Display;
    } else if (orientation === 'landscape') {
      imgsNum2Display = 1;
    }
  } */

  /*- Checking images orientation ----*/
  fImgOrientation(d, val) {
    d.forEach(eachObj => {
      val = eachObj.orientation;
      // console.log('val: ', eachObj.id, ' ', val);
    });
  }

  /*--- GSAP2 Animation Engine: TweenMax ---*/
  fTMxFrX(e, tym, val, easing) {
    TweenMax.from(e, tym, {x: val, ease: easing});
  }

  fTMxToX(e, tym, val, easing) {
    TweenMax.to(e, tym, {x: val, ease: easing});
  }
  fTMxToX2(e, tym, val) {
    TweenMax.to(e, tym, {x: val, ease: Power2.easeOut});
  }
  fTMxToAlfa(e, tym, val, easing) {
    TweenMax.to(e, tym, {opacity: val, ease: easing});
  }
  fTMxToRotate(e, tym, val) {
    TweenMax.to(e, tym, {rotation: val, ease: Power2.easeOut});
    console.log('e rotation: ', e);
  }

  fTMxFrY(e, tym, val, easing) {
    TweenMax.from(e, tym, {y: val, ease: easing});
  }

  fTMxFrAlpha(e, tym, val, easing) {
    TweenMax.from(e, tym, {alpha: val, ease: easing});
  }

  /*--- GSAP2 Animation Engine: TimelineMax ---*/
  fTLMx(e1, e2) {
    this.tL
    .from(e1, 1, { alpha: 0, ease: Power2.easeOut, delay: .5 })
    .from(e2, 2, { y: -100, alpha: 0, ease: Elastic.easeOut, delay: 1 });
  }

  fLoadTimer(el, tym) {
    const Cont = {val: 0};
    const NewVal = 100 ;
    // console.log('el: ', el);
    TweenMax.to(Cont, tym, {val: NewVal, roundProps: 'val', onUpdate: function() {
      document.querySelector(el).innerHTML = Cont.val + '%';
    // el.innerHTML = 'Cont.val';
    }});
  }


  /* fTLMx2(el, ...restArgs) {

  } */


}


