import { Component, effect, inject, signal } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import { CheckWindowsSiceService } from './shared/services/check-windows-sice.service';
import { CommonModule } from '@angular/common';
import { SharedSignalsService } from './shared/services/shared-signals.service';
import { animationsCustom } from './animations';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './pages/login/login';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule, ReactiveFormsModule, CustomSidenavComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: animationsCustom
})
export class AppComponent {
  title = 'Zona Tecno';
  switchTheme = new FormControl(false);
  darkMode = signal(false);
  collapsed = signal(false);
  withSidenav: string = '143px';
  withSidenavContent: string = '0px';
  deviceType = inject(CheckWindowsSiceService);
  private sharedSignalSvc = inject(SharedSignalsService);
  private _matDialog = inject(MatDialog);
  private _router = inject(Router);

  /**
 * Detect changes in the device size
 */
  deviceTypeChange = effect(() => {
    if (this.collapsed()) {
      this.sharedSignalSvc.collapsedSidenavSignal.set(this.collapsed());
      this.withSidenav = '143px';
    } else {
      this.sharedSignalSvc.collapsedSidenavSignal.set(this.collapsed());
      this.withSidenav = '0px';
    }
  });


  constructor() {
  }

  /**
   * Cuando clickeo dentro del content cierro el sidenav
   */
  clickOnContent() {
    if (this.collapsed()) {
      this.collapsed.set(!this.collapsed());
    }
  }


  /**
   * Open Login component
   */
  openLogin() {
    if (localStorage.getItem('token')) {
      this._router.navigate(['/profile']);
    } else {
      this._matDialog.open(LoginComponent, {
        panelClass: 'login-dialog',
        data: { name: 'Login' }
      });
      const buttonElement = document.activeElement as HTMLElement; // Get the currently focused element
      buttonElement.blur(); // Remove focus from the button
    }
  }


}
