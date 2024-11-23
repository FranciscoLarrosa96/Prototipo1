import { Component, HostBinding, OnInit, effect, inject, signal } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { CheckWindowsSiceService } from '../services/check-windows-sice.service';
import { SharedSignalsService } from '../services/shared-signals.service';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-title',
    imports: [MaterialModule, ReactiveFormsModule, CommonModule],
    templateUrl: './title.component.html',
    styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit {
  fb: FormBuilder = inject(FormBuilder);
  searchForm!: FormGroup;
  switchTheme = new FormControl(false);
  darkMode = signal(false);
  
  deviceType:string = '';
  private _checkWindowsSice = inject(CheckWindowsSiceService);
   sharedSignalsSvc = inject(SharedSignalsService);

  /**
   * Cambia el modo de la pagina
   */
  setDarkMode = effect(() => {
    document.documentElement.classList.toggle('dark', this.darkMode());
  });

  /**
   * Detecta si cambio el tamaño de la ventana
   */
  detectDeviceType = effect(() => {
    this.deviceType = this._checkWindowsSice.deviceTypeComputed();
  });


  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.searchForm = this.fb.group({
      search: [''],
    });

    this.searchForm.events
      .pipe(
        debounceTime(1000)
      )
      .subscribe(
        (event: { source: { value: any; }; }) => {
          console.log("🚀 ~ TitleComponent ~ createForm ~ searchForm:", event.source.value)
        }
      );
  }


}
