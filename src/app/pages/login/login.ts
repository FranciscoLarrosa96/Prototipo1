import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, effect, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckWindowsSiceService } from '../../shared/services/check-windows-sice.service';
import { UserService } from '../../components/user/user.service';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseInterface, ResponseInterfaceGoogle } from '../../interfaces/response.interface';


declare const google: any;

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  providers: [UserService],
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  deviceSice = signal<string>('');
  private _checkWindowsSiceService = inject(CheckWindowsSiceService);
  private _userSvc = inject(UserService);
  @ViewChild('btnGoogle') btnGoogle!: ElementRef;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remememberMe: [false]
    });
  }


  /**
   * Detect changes in the device size
   */
  deviceTypeChange = effect(() => {
    this.deviceSice.set(this._checkWindowsSiceService.deviceTypeComputed());
  });

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.googleInit();
    setTimeout(() => {
      google.accounts.id.revoke('franciscolarrosa22@gmail.com', () => {
        localStorage.removeItem('token');
      });
    }, 1500);
  }

  googleInit() {
    google.accounts.id.initialize({
      client_id: "684557034764-dot47pevhl29b9q3koj83vnkkim2v26l.apps.googleusercontent.com",
      callback: (res: any) => this.handleCredentialResponse(res)
    });
    google.accounts.id.renderButton(
      this.btnGoogle.nativeElement, // HTML element
      { theme: "outline", size: "large" }  // customization attributes
    );
    // google.accounts.id.prompt(); // also display the One Tap dialog
  }

  handleCredentialResponse(response: ResponseInterfaceGoogle) {
    this._userSvc.loginGoogle(response.credential)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error.error.message);
        }))
      .subscribe({
        next: (res: ResponseInterface) => {
          console.log(res);
        }
      });
  }


  loginUser() {
    this._userSvc.loginUser(this.loginForm.value)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error.error.message);
        }))
      .subscribe({
        next: (res: ResponseInterface) => {
          console.log(res.user.name);
        }
      })
  }
}
