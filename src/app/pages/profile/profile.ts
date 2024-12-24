import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

declare const google: any;

@Component({
  selector: 'app-profile',
  imports: [CommonModule, MaterialModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class ProfileComponent implements OnInit {

  effectUser = effect(() => {
    this._authSvc.userLoggedComputed();
    console.log('userLoggedComputed', this._authSvc.userLoggedComputed());
    
  });
  private _router = inject(Router);
  private _authSvc = inject(AuthService);

  constructor() { }


  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '684557034764-dot47pevhl29b9q3koj83vnkkim2v26l.apps.googleusercontent.com',
    });
  }


  logout() {
    google.accounts.id.revoke(this._authSvc.userLoggedComputed().email, () => {
      localStorage.removeItem('token');
    });
    this._router.navigate(['/home']);
  }
}
