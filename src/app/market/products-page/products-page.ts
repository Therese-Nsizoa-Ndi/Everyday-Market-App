import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryMenuComponent } from '../category-menu/category-menu';

@Component({
  selector: 'app-products-page',
  imports: [CategoryMenuComponent],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css'
})
export class ProductsPage {

  categoryList: Category[] = [
    { id: 1, name: 'Gaming' },
    { id: 2, name: 'Music' },
    { id: 3, name: 'Travel' },
    { id: 4, name: 'Basketball' },
    { id: 5, name: 'Coding' }
  ];

  onCategorySelected(category: Category) {
    alert('You selected: ' + category.name);
  }

}