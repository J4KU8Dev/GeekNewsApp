import { Injectable } from "@angular/core";
import { CategoryModel } from "./category.model";

@Injectable({providedIn: "root"})
export class CategoryService {
    private categories=[
        {
            id:"1",
            categoryName:"TECH",
        },
        {
            id:"2",
            categoryName:"GAMES",
        },
        {
            id:"3",
            categoryName:"SCI-FUN",
        },
        {
            id:"4",
            categoryName:"AI",
        }
    ]

    getselectedNewsCategory(categoryName: string) {
        return this.categories.filter((category) => category.categoryName === categoryName);
    }
}
