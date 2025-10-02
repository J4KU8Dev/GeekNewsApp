import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {
  isDark:boolean=true;

  changeTheme(){
    this.isDark=!this.isDark;
  }
}
