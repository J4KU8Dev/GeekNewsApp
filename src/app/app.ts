import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from "./header-component/header-component";
import { CategoryService } from './categories.service';
import { MenuComponent } from "./menu-component/menu-component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private CategoryService=inject(CategoryService);

  get news(){
    return this.CategoryService.getselectedNewsCategory;
  }
}
