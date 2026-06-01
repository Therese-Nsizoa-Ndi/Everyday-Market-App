import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../models/category';
import { CategoryMenuItemComponent } from '../category-menu-item/category-menu-item';

@Component({
  selector: 'app-category-menu',
  imports: [CommonModule, CategoryMenuItemComponent],
  templateUrl: './category-menu.html',
  styleUrl: './category-menu.css'
})
export class CategoryMenuComponent {

  @Input() categories: Category[] = [];

  @Output() categorySelected = new EventEmitter<Category>();

  onItemClicked(category: Category) {
    this.categorySelected.emit(category);
  }

}