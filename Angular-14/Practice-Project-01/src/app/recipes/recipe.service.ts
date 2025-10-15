import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  singleRecipe!: Recipe;

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe 1',
      'This is simply a test 1',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coconut-squash-dhansak-818351d.jpg?quality=90&resize=500,454',
      [new Ingredient('meat', 100), new Ingredient('bread', 180)]
    ),
    new Recipe(
      'A test Recipe 2',
      'This is simply a test 2',
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/63O2DBTTTEI6VKN5T6FVSMYA2A.jpg&w=860',
      [new Ingredient('hot cake', 10), new Ingredient('apple', 12)]
    ),
    new Recipe(
      'A test Recipe 3',
      'This is simply a test 3',
      'https://images.immediate.co.uk/production/volatile/sites/30/2022/08/20160211GF105540preview-231a533.jpg?quality=90&resize=556,505',
      [new Ingredient('beef', 15), new Ingredient('tomato', 10)]
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe() {
    return 'This is the sigle recipe ' + this.singleRecipe;
  }
}
