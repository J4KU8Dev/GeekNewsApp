import { Component } from '@angular/core';
import { CategoryComponent } from "../category-component/category-component";

@Component({
  selector: 'app-menu-component',
  imports: [CategoryComponent],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css'
})
export class MenuComponent {
  categories=["TECH","GAMES","SCI-FI","AI"]
  selectedCategory:string = ""

  onSelectedCategory(id: string) {
    this.selectedCategory = id;
  }
}
