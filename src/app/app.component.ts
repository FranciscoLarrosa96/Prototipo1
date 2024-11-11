import { Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import { CheckWindowsSiceService } from './shared/services/check-windows-sice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, ReactiveFormsModule, CustomSidenavComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Zona Tecno';
  switchTheme = new FormControl(false);
  darkMode = signal(false);
  collapsed = signal(true);
  withSidenav: string = '143px';
  withSidenavContent: string = '0px';
  deviceType = inject(CheckWindowsSiceService);

  /**
  * Cambia el modo de la pagina
  */
  setDarkMode = effect(() => {
    document.documentElement.classList.toggle('dark', this.darkMode());
  });

  /**
 * Detect changes in the device size
 */
  deviceTypeChange = effect(() => {
    if (this.collapsed()) {
      this.withSidenav = '143px';
    } else {
      this.withSidenav = '0px';
    }
  });


  constructor() {
  }


}
