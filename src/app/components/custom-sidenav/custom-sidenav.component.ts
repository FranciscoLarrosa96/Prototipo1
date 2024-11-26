import { Component, computed, effect, inject, Input, signal } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { RouterModule } from '@angular/router';
import { animationsCustom } from '../../animations';
import { UserService } from '../../shared/services/user.service';

export type MenuItems = {
  icon: string;
  title: string;
  route?: string;
  menuItems?: MenuItems[];
}

@Component({
    selector: 'app-custom-sidenav',
    imports: [MaterialModule, RouterModule],
    templateUrl: './custom-sidenav.component.html',
    styleUrl: './custom-sidenav.component.scss',
    animations: animationsCustom,
    providers: [UserService]
})
export class CustomSidenavComponent {
  private userSvc = inject(UserService);
  sideNavCollapsed = signal(false);
  darkModeToggle = signal(false);
  @Input() set collapsed(value: boolean) {
    this.sideNavCollapsed.set(value);
  }
  @Input() set darkMode(value: boolean) {
    this.darkModeToggle.set(value);
  }
  menuItemsLogged = signal<MenuItems[]>([
    { icon: 'home', title: 'Home', route: '/home' },
    { icon: 'shopping_cart', title: 'Cart', route: '/cart' },
    { icon: 'account_circle', title: 'Profile', route: '/profile' },
    { icon: 'login', title: 'Login' },
    { icon: 'logout', title: 'Logout' },
  ]);

  menuItemsLoggedOut = signal<MenuItems[]>([
    { icon: 'home', title: 'Home', route: '/home' },
    { icon: 'shopping_cart', title: 'Cart', route: '/cart' },
    { icon: 'login', title: 'Login', route: '/login' },
  ]);

  menuItems = computed<MenuItems[]>(() => this.userSvc.loginUser() ? this.menuItemsLogged() : this.menuItemsLoggedOut());

  navListWidth = computed<string>(() => this.sideNavCollapsed() ? '142px' : '0px');

  constructor(){
  }
}
