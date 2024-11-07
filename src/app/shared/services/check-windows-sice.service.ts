import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckWindowsSiceService {

  deviceTypeSingal = signal<string>('');
  deviceTypeComputed = computed<string>(() => this.deviceTypeSingal());


  constructor() {
    this.getDeviceType();
    window.addEventListener('resize', this.getDeviceType.bind(this));
  }

  getDeviceType() {
    const width = window.innerWidth;
    if (width <= 768) {
      this.deviceTypeSingal.set('mobile');
    } else if (width <= 1024) {
      this.deviceTypeSingal.set('tablet');
    } else {
      this.deviceTypeSingal.set('desktop');
    }
  }
}
