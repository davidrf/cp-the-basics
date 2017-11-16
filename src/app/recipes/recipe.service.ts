import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://placeholdit.co//i/50x50',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ],
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://placeholdit.co//i/50x50',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ],
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
