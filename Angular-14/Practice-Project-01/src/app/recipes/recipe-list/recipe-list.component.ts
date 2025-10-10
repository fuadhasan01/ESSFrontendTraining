import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coconut-squash-dhansak-818351d.jpg?quality=90&resize=500,454'
    ),
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coconut-squash-dhansak-818351d.jpg?quality=90&resize=500,454'
    ),
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coconut-squash-dhansak-818351d.jpg?quality=90&resize=500,454'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
