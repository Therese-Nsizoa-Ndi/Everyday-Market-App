import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  imports: [],
  templateUrl: './category-menu-item.html',
  styleUrl: './category-menu-item.css'
})
export class CategoryMenuItemComponent {

  @Input() categoryName = '';

  @Output() itemclicked = new EventEmitter<string>();

  onItemClick() {
    this.itemclicked.emit(this.categoryName);
  }

}