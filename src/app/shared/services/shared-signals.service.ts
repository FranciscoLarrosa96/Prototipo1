import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedSignalsService {
  
  collapsedSidenavSignal = signal(false);
  collapsedSidenavComputed = computed(() => this.collapsedSidenavSignal());

  constructor() { }
}
