import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  dialogRef = inject(MatDialogRef<RegisterComponent>);
  private _matDialog = inject(MatDialog);
  private fb = inject(FormBuilder);
  constructor() { }

  //TODO: Falta terminar
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
}
