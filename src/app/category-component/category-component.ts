import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-component',
  imports: [],
  templateUrl: './category-component.html',
  styleUrl: './category-component.css'
})
export class CategoryComponent {
  @Input({required: true}) categoryName!: string;
  @Output() category = new EventEmitter();

  select() {
    this.category.emit();
  }
}
