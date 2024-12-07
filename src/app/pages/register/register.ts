import { Component, inject, OnInit, signal } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../shared/services/auth.service';
import { ResponseInterface } from '../../interfaces/response.interface';
import { catchError, finalize, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from '../../shared/helpers/helper.service';
import { MaterialModule } from '../../shared/material.module';
import 'animate.css'; //Allows the use of animate.css animations on the alert
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  providers: [HelperService]
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  dialogRef = inject(MatDialogRef<RegisterComponent>);
  showSpinner = signal<boolean>(false);
  private _matDialog = inject(MatDialog);
  private fb = inject(FormBuilder);
  private _authSvc = inject(AuthService);
  private _helperSvc = inject(HelperService);
  constructor() { }

  //TODO: Falta terminar que al registrar mande un codigo y verifique con el backend
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
    });
  }


  openLogin() {
    this._matDialog.open(LoginComponent, {
      panelClass: 'login-dialog'
    });
    this.dialogRef.close();
  }

  registerUser() {
    this.showSpinner.set(true);
    if (this.validatePassword()) {
      Swal.fire('Error', 'The passwords do not match ', 'error');
      this.showSpinner.set(false);
    } else {
      this._authSvc.reggisterUser(this.registerForm.value)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.error.message === 'Failed to fetch') {
              this._helperSvc.errorSwalPopup('Failed to connect to the server');
            } else {
              this._helperSvc.errorSwalPopup(error.error.message);
            }
            return throwError(() => error.error.message);
          }))
        .pipe(
          finalize(() => this.showSpinner.set(false))
        )
        .subscribe({
          next: (res: ResponseInterface) => {
            this._authSvc.userLoggedSignal.set(res.user);
            this._helperSvc.openSnackBar('User registered successfully');
            this.dialogRef.close();
          }
        })
    }

  }

  /**
   * Validate if the password and confirmPassword are the same
   */
  validatePassword(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return (password === confirmPassword) ? false : true;
  }
}
