import { Component, computed, effect, Input, signal } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { RouterModule } from '@angular/router';
import { animationsCustom } from '../../animations';

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
    animations: animationsCustom
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);
  darkModeToggle = signal(false);
  @Input() set collapsed(value: boolean) {
    this.sideNavCollapsed.set(value);
  }
  @Input() set darkMode(value: boolean) {
    this.darkModeToggle.set(value);
  }

  menuItems = signal<MenuItems[]>([
    { icon: 'home', title: 'Home', route: '/home' },
    { icon: 'shopping_cart', title: 'Cart', route: '/cart' },
    { icon: 'account_circle', title: 'Profile', route: '/profile' },
    { icon: 'logout', title: 'Logout' },
  ]);

  navListWidth = computed<string>(() => this.sideNavCollapsed() ? '142px' : '0px');
}
