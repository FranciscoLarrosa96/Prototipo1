import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../interfaces/user.interface';

declare const google: any;

@Component({
  selector: 'app-profile',
  imports: [CommonModule, MaterialModule, JsonPipe],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class ProfileComponent implements OnInit {
  userLogged!: User;
  private _router = inject(Router);
   _authSvc = inject(AuthService);

  constructor() { }
  //TODO:"Arreglar probar llamar service en un resolve router"



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
