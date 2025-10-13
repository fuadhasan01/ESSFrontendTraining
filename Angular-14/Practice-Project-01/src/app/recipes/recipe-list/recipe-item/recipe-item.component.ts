import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
interface RecipeType {}
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem!: Recipe;
  @Output() recipeEmit = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {}

  showDetails() {
    this.recipeEmit.emit(this.recipeItem);
  }
}
