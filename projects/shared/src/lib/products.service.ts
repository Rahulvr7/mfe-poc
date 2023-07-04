import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public getProducts(): Product[] {
    return [
      {
        name: 'Learn Angular in 24 Hours',
        link: 'https://images-na.ssl-images-amazon.com/images/I/51TFBMhkjML._SX348_BO1,204,203,200_.jpg',
        id: 349,
        description: 'The core idea behind this book is to make sure everyone should understand development using Angular.'
      },
      {
        name: 'ng-book',
        link: 'https://images-na.ssl-images-amazon.com/images/I/718rCk+pGeL.jpg',
        id: 5035,
        description: 'You will learn what you need to know to work professionally with ng-book: The Complete Book on Angular.'
      },
      {
        name: 'Angular Essentials',
        link: 'https://images-na.ssl-images-amazon.com/images/I/31mNJ1zeMwL._SX331_BO1,204,203,200_.jpg',
        id: 352,
        description: 'This book is an Essentials guide for every Angular developer. It covers all required topics an Angular developer need to get started.'},
      {
        name: 'OOP with Angular',
        link: 'https://images-na.ssl-images-amazon.com/images/I/51GEeqoJLhL._SX404_BO1,204,203,200_.jpg',
        id: 658,
        description: 'This book will leverage on your prior programming knowledge to learn Angular.'
      }
    ]
  }
}
