import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ThemeService {
    public globalIsDark: boolean = false;
    
    change() {
        this.globalIsDark =! this.globalIsDark;
    }

    getGlobalDark(): boolean {
        return this.globalIsDark;
    }
}