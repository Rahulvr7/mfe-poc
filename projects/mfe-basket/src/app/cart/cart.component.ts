import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '@shared';

interface BasketProduct {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {

  public items: BasketProduct[] = [];
  public totalItems = 0;

  constructor(private basketService: CartService) { }

  ngOnInit(): void {
    const basketItems = this.basketService.getBasketItems();
    this.items = basketItems
        .reduce((acc, cur) => {
          const idx = acc.findIndex(p => p.product.id === cur.id);
          idx !== -1 ? acc[idx].quantity++ : acc.push({product: cur, quantity: 1});
          return acc;
        }, [] as BasketProduct[]);

    this.totalItems = basketItems.length;
  }
}
