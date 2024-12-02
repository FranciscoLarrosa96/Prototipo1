import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, effect, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckWindowsSiceService } from '../../shared/services/check-windows-sice.service';
import { AuthService } from '../../shared/services/auth.service';
import { catchError, finalize, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseInterface, ResponseInterfaceGoogle } from '../../interfaces/response.interface';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import 'animate.css'; //Allows the use of animate.css animations on the alert
import { Router } from '@angular/router';

declare const google: any;

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  providers: [AuthService],
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm!: FormGroup;
  deviceSice = signal<string>('');
  dialogRef = inject(MatDialogRef<LoginComponent>);
  showSpinner = signal<boolean>(false);
  private _checkWindowsSiceService = inject(CheckWindowsSiceService);
  private _authSvc = inject(AuthService);
  private _router = inject(Router);
  @ViewChild('btnGoogle') btnGoogle!: ElementRef;

  constructor(private fb: FormBuilder) {
  }


  /**
   * Detect changes in the device size
   */
  deviceTypeChange = effect(() => {
    this.deviceSice.set(this._checkWindowsSiceService.deviceTypeComputed());
  });

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      remememberMe: [false]
    });
  }

  ngAfterViewInit(): void {
    this.googleInit();
  }

  googleInit() {
    google.accounts.id.initialize({
      client_id: "684557034764-dot47pevhl29b9q3koj83vnkkim2v26l.apps.googleusercontent.com",
      callback: (res: ResponseInterfaceGoogle) => this.handleCredentialResponse(res),
      use_fedcm_for_prompt: false // Optional. If set to true, One Tap will use the FEDCM flow for the prompt. Default is false.
    });
    google.accounts.id.renderButton(
      this.btnGoogle.nativeElement, // HTML element
      { theme: "outline", size: "large", locale: "en" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }

  handleCredentialResponse(response: ResponseInterfaceGoogle) {
    this._authSvc.loginGoogle(response.credential)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error.message === 'Failed to fetch') {
            this.errorSwalPopup('Failed to connect to the server');
          } else {
            this.errorSwalPopup(error.error.message);
          }
          return throwError(() => error.error.message);
        }))
      .subscribe({
        next: (res: ResponseInterface) => {
          console.log('res', res.user);
          
          this._authSvc.userLoggedSignal.set(res.user);
          console.log('user logged in', this._authSvc.userLoggedComputed());
          this._router.navigate(['/profile']);
          this.dialogRef.close();
        }
      });
  }


  loginUser() {
    this.showSpinner.set(true);
    if (this.loginForm.get('remememberMe')?.value) {
      localStorage.setItem('email', this.loginForm.get('email')?.value);
    }
    this._authSvc.loginUser(this.loginForm.value)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error.message === 'Failed to fetch') {
            this.errorSwalPopup('Failed to connect to the server');
          } else {
            this.errorSwalPopup(error.error.message);
          }
          return throwError(() => error.error.message);
        }))
      .pipe(
        finalize(() => this.showSpinner.set(false))
      )
      .subscribe({
        next: (res: ResponseInterface) => {
          this._authSvc.userLoggedSignal.set(res.user);
        }
      })
  }

  errorSwalPopup(message: string) {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }
}
