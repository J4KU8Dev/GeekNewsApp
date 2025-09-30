import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./header-component/header-component";
import { MenuComponent } from "./menu-component/menu-component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
