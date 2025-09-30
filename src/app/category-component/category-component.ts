import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-component',
  imports: [],
  templateUrl: './category-component.html',
  styleUrl: './category-component.css'
})
export class CategoryComponent {
  @Input({required: true}) checked!: boolean;
  @Input({required: true}) categoryName!: string;
  @Output() category = new EventEmitter<string>();

  onSelectedCategory() {
    this.category.emit(this.categoryName);
}
}
