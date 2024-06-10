import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplashService {

  private _router = inject(Router);

  constructor(@Inject(DOCUMENT) private _document: any) {
    this.appInitializer();
  }

  /**
 * Show the splash screen
 */
  show(): void {
    this._document.body.classList.remove('splasShow');
  }

  /**
   * Hide the splash screen
   */
  hide(): void {
    this._document.body.classList.add('splashHide');
  }

  appInitializer() {
    this.show();
    setTimeout(() => {
      this.hide();
    }, 1500);
  }
}
