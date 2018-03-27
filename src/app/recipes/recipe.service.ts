import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply test',
      'https://cookieandkate.com/images/2017/04/hummus-quesadillas-recipe-1.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 20)
      ]),
    new Recipe(
      'A Test Recipe2',
      'This is simply test',
      'https://cookieandkate.com/images/2017/04/hummus-quesadillas-recipe-1.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat',3)
      ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipe() {
    return this.recipes.slice();
  }

  addIgredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIgredients(ingredients);
  }

}
