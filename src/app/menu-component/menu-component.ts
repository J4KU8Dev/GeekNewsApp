import { Component } from '@angular/core';
import { CategoryComponent } from "../category-component/category-component";
import { news } from '../categories.list';
import { CategoriesComponent } from "../categories-component/categories-component";
import type { newsModel } from '../news.model';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../theme.service';
import { ApiService } from '../api-service';

@Component({
  selector: 'app-menu-component',
  imports: [CategoryComponent, CategoriesComponent, FormsModule],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css'
})
export class MenuComponent {
  data = news;
  public allNews:newsModel[] = [];
  public response:newsModel[] = [];
  categories=["TECH","GAMES","SCI-FI","AI"]
  selectedCategory:string = ""
  searchText="";

  constructor(private commonService: ThemeService, private api: ApiService) {}

  onSelectedCategory(id: string) {
    this.selectedCategory = id;
    this.SelectedNews();
  }

  public SelectedNews() {
    this.api.getPostByCategory(this.selectedCategory).subscribe((data: newsModel[]) => {
      this.allNews = data;
      this.applyFilter();
    })
  }
  applyFilter() {
    if(this.searchText) {
      const lowerSearch = this.searchText.toLowerCase();
      this.response = this.allNews.filter(n => n.title.toLowerCase().includes(lowerSearch) || n.description.toLowerCase().includes(this.searchText));
    }
    else{
      this.response = [...this.allNews];
    }
  }
  
}
