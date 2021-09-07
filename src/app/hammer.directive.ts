import { Directive, ElementRef } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';

@Directive({ selector: '[appHammer]' })
export class HammerDirective {
  constructor(el: ElementRef) {
    const element = el.nativeElement as HTMLElement;
    const hammerConfig = new HammerGestureConfig();
    const hammerInstance = hammerConfig.buildHammer(element);

    /** Tap */
    // hammerInstance.on( 'tap', (_) => console.log('tap', _));

    /** Swipe */
    hammerInstance.on( 'swipe', (_) => console.log('swipe', _));
    hammerInstance.on( 'swipeup', (_) => console.log('swipeup', _));
    hammerInstance.on( 'swipedown', (_) => console.log('swipedown', _));
    hammerInstance.on( 'swipeleft', (_) => console.log('swipeleft', _));
    hammerInstance.on( 'swiperight', (_) => console.log('swiperight', _));

    /** Pinch */
    // hammerInstance.on( 'pinch', (_) => console.log('pinch', _));
    // hammerInstance.on( 'pinchin', (_) => console.log('pinchin', _));
    // hammerInstance.on( 'pinchout', (_) => console.log('pinchout', _));
    // hammerInstance.on( 'pinchend', (_) => console.log('pinchend', _));
    // hammerInstance.on( 'pinchmove', (_) => console.log('pinchmove', _));
    // hammerInstance.on( 'pinchstart', (_) => console.log('pinchstart', _));
    // hammerInstance.on( 'pinchcancel', (_) => console.log('pinchcancel', _));

    /** Pan */
    // hammerInstance.on( 'pan', (_) => console.log('pan', _));
    // hammerInstance.on( 'panend', (_) => console.log('panend', _));
    // hammerInstance.on( 'panleft', (_) => console.log('panleft', _));
    // hammerInstance.on( 'panmove', (_) => console.log('panmove', _));
    // hammerInstance.on( 'panright', (_) => console.log('panright', _));
    // hammerInstance.on( 'panstart', (_) => console.log('panstart', _));
    // hammerInstance.on( 'pancancel', (_) => console.log('pancancel', _));
  }
}
