import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test','https://cookieandkate.com/images/2017/04/hummus-quesadillas-recipe-1.jpg'),
    new Recipe('A Test Recipe2', 'This is simply test','https://cookieandkate.com/images/2017/04/hummus-quesadillas-recipe-1.jpg')

  ];


  constructor() { }

  ngOnInit() {
  }

}
