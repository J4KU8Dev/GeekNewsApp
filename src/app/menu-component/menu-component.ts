import { Component } from '@angular/core';
import { CategoryComponent } from "../category-component/category-component";
import { news } from '../categories.list';
import { CategoriesComponent } from "../categories-component/categories-component";
import type { newsModel } from '../news.model';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../theme.service';
import { ApiService } from '../api-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-component',
  imports: [CategoryComponent, CategoriesComponent, FormsModule],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css'
})
export class MenuComponent {
  data = news;
  categories=["TECH","GAMES","SCI-FI","AI"]
  selectedCategory:string = ""
  filteredNews:newsModel[] = [];
  searchText="";

  constructor(private commonService: ThemeService, private api: ApiService) {}

  onSelectedCategory(id: string) {
    this.selectedCategory = id;
  }

  get SelectedNews(): Observable<newsModel[]> {
    return this.api.getPostByCategory(this.selectedCategory)
    // return this.data.filter(n =>
    //   n.category === this.selectedCategory &&
    //   (
    //     !this.searchText || 
    //     n.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
    //     n.description.toLowerCase().includes(this.searchText.toLowerCase())
    //   )
    // );
  }

  test(content: string) {
    return this.data.filter((news) => news.category || news.description ===content);
  }
  
}
