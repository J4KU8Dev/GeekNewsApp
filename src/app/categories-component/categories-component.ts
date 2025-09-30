import { Component, Input } from '@angular/core';
import { newsModel } from '../news.model';

@Component({
  selector: 'app-categories-component',
  imports: [],
  templateUrl: './categories-component.html',
  styleUrl: './categories-component.css'
})
export class CategoriesComponent {
  @Input({required: true}) News!: newsModel;
}
