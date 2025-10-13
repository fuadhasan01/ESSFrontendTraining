import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeToParent = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe 1',
      'This is simply a test 1',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coconut-squash-dhansak-818351d.jpg?quality=90&resize=500,454'
    ),
    new Recipe(
      'A test Recipe 2',
      'This is simply a test 2',
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/63O2DBTTTEI6VKN5T6FVSMYA2A.jpg&w=860'
    ),
    new Recipe(
      'A test Recipe 3',
      'This is simply a test 3',
      'https://images.immediate.co.uk/production/volatile/sites/30/2022/08/20160211GF105540preview-231a533.jpg?quality=90&resize=556,505'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onDataReceived(data: Recipe) {
    this.recipeToParent.emit(data);
  }
}
