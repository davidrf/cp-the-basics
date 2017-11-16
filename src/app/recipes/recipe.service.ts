import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://placeholdit.co//i/50x50'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://placeholdit.co//i/50x50'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
