import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedSignalsService {

  toggleSideNavSignal = signal<boolean>(false);
  toggleSideNavComputed = computed<boolean>(() => this.toggleSideNavSignal());

  constructor() { }
}
