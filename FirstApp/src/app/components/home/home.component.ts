import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items: Product[] = [
    {
      img: 'assets/img/products/a620.jpg',
      title: 'Mother A620 AM4',
      description: ''
    },
    {
      img: 'assets/img/products/a620m-k.jpg',
      title: 'Mother A620',
      description: ''
    },
    {
      img: 'assets/img/products/b650-a.jpg',
      title: 'Mother A620',
      description: ''
    },
    {
      img: 'assets/img/products/b650m-a.jpg',
      title: 'Mother A620',
      description: ''
    },
    {
      img: 'assets/img/products/b650m-h.webp',
      title: 'Mother A620',
      description: ''
    },
    {
      img: 'assets/img/products/x670.jpg',
      title: 'Mother A620',
      description: ''
    },
    {
      img: 'assets/img/products/x670e.png',
      title: 'Mother A620',
      description: ''
    }
  ];

  constructor() {

  }

}
