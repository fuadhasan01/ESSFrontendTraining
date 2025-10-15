import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../recipe.service';
interface RecipeType {}
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem!: Recipe;
  // @Output() recipeEmit = new EventEmitter<Recipe>();
  constructor(private _recipeService: RecipeService) {}

  ngOnInit(): void {}

  showDetails() {
    this._recipeService.recipeSelected.emit(this.recipeItem);
    // this.recipeEmit.emit(this.recipeItem);
  }
}
