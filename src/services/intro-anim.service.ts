import { Injectable } from '@angular/core';
import { TweenMax, TimelineMax, Power2, Power4, Elastic } from "gsap/TweenMax";

@Injectable({
  providedIn: 'root'
})
export class IntroAnimService {

  public tMx = TweenMax;
  public tLMx = new TimelineMax();

  constructor() { }


  public fTranslateAnim(elem, tym, xp, yp, zp = 100, w?: any, h?: any, sizeFont?: any, alfa = 1) {
    this.tMx
    .to(elem, tym, {
      x: xp,
      y: yp,
      zIndex: zp,
      width: w,
      height: h,
      fontSize: sizeFont,
      opacity: alfa,
      ease: Power2.easeOut, delay: .5 });
    // .from(e2, 2, { y: -100, alpha: 0, ease: Elastic.easeOut, delay: 1 });
  }

  public backgroundImageTransform(elem, tym, w, h, scl, bgSize?: any, hPos?: any, vPos?: any): any {
      this.tMx
      .to(elem, tym, {
        width: w,
        height: h,
        scale: scl,
        backgroundSize: bgSize,
        backgroundPositionX: hPos,
        backgroundPositionY: vPos,
        opacity: 1,
        ease: Power2.easeOut
      });
    }
  }


}
