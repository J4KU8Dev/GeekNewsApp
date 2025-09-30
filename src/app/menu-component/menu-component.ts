import { Component } from '@angular/core';
import { CategoryComponent } from "../category-component/category-component";
import { news } from '../categories.list';
import { CategoriesComponent } from "../categories-component/categories-component";

@Component({
  selector: 'app-menu-component',
  imports: [CategoryComponent, CategoriesComponent],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css'
})
export class MenuComponent {
  data = news;
  categories=["TECH","GAMES","SCI-FI","AI"]
  selectedCategory:string = ""
  onSelectedCategory(id: string) {
    this.selectedCategory = id;
  }

  get SelectedNews() {
    return this.data.filter((news) => news.category === this.selectedCategory);
  }
}
