import { Component, computed, Input, signal } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { RouterModule } from '@angular/router';

export type MenuItems = {
  icon: string;
  title: string;
  route?: string;
  menuItems?: MenuItems[];
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MaterialModule,RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(value: boolean) {
    this.sideNavCollapsed.set(value);
  }

  menuItems = signal<MenuItems[]>([
    { icon: 'home', title: 'Home', route: '/home' },
    { icon: 'shopping_cart', title: 'Cart', route: '/cart' },
    { icon: 'account_circle', title: 'Profile', route: '/profile' },
    { icon: 'logout', title: 'Logout' },
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
