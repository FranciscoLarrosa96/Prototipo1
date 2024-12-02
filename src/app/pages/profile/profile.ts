import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

declare const google: any;

@Component({
  selector: 'app-profile',
  imports: [CommonModule, MaterialModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  providers: [AuthService],
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '684557034764-dot47pevhl29b9q3koj83vnkkim2v26l.apps.googleusercontent.com',
    });
    //TODO: FIXXXX
    console.log('user logged in', this._authSvc.userLoggedComputed());
    
  }
  private _router = inject(Router);
  private _authSvc = inject(AuthService);

  logout() {
    google.accounts.id.revoke('hunteofgames@gmail.com', () => {
      localStorage.removeItem('token');
    });
    this._router.navigate(['/home']);
  }
}
