import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  mouseHover: boolean[] = [];
  items: Product[] = [
    {
      img: 'assets/img/products/a620.webp',
      title: 'Mother A620 AM5',
      description: '',
      price: 100000
    },
    {
      img: 'assets/img/products/a620m-k.webp',
      title: 'Mother A620M-K',
      description: '',
      price: 100000
    },
    {
      img: 'assets/img/products/b650-a.webp',
      title: 'Mother A620',
      description: '',
      price: 100000
    },
    {
      img: 'assets/img/products/b650m-a.webp',
      title: 'Mother A620',
      description: '',
      price: 100000
    },
    {
      img: 'assets/img/products/b650m-h.webp',
      title: 'Mother A620',
      description: '',
      price: 100000
    },
    {
      img: 'assets/img/products/x670.webp',
      title: 'Mother A620',
      description: '',
      price: 100000
    },
    {
      img: 'assets/img/products/x670e.webp',
      title: 'Mother A620',
      description: '',
      price: 100000
    }
  ];

  constructor() {

  }


  /**
  * Converts the variable to true if the mouse is hovered over the card
  * @param index 
  */
  showDescription(index: number) {
    this.mouseHover[index] = true;
  }
  /**
   * Converts the variable to false if the mouse leaves the card
   * @param index 
   */
  hiddenDescription(index: number) {
    this.mouseHover[index] = false;
  }

}
