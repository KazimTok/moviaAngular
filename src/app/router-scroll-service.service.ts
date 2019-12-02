import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { filter, throttleTime } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RouterScrollServiceService {

  private lastPosition: [number, number] = [0, 0];
  private lastScrollTime = 0;

  constructor(router: Router, private viewportScroller: ViewportScroller) {
    router.events.pipe(filter(e => e instanceof Scroll), throttleTime(200))
      .subscribe((e: Scroll) => {
        const pos = e.position || [0, 0];
        this.lastPosition = pos;
        this.lastScrollTime = Date.now();
        viewportScroller.scrollToPosition(pos);
      });
  }
  async componentLoaded() {
    const d = Date.now();
    if (d - this.lastScrollTime < 1000) {
      this.lastScrollTime = d;
      await Promise.resolve();
      this.viewportScroller.scrollToPosition(this.lastPosition);
    }
  }
}
