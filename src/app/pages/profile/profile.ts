import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, effect, inject, OnInit } from '@angular/core';
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
export class ProfileComponent implements OnInit, AfterViewInit {

  private _router = inject(Router);
  private _authSvc = inject(AuthService);

  constructor() { }
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log('userLoggedComputed', this._authSvc.userLoggedComputed());
    }, 100);
  }


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
