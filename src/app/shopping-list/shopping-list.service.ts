import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];

  constructor() { }

  add(ingredient: Ingredient) {
    this.ingredients.push(ingredient  );
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIgredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients) {
    //   this.add(ingredient);
    // }
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
