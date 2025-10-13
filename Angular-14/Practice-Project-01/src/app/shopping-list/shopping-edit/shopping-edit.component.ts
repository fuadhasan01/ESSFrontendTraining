import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() shoppingEmitter = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef!: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  addShopping(event: Event) {
    event.preventDefault();
    const ingredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      Number(this.amountInputRef.nativeElement.value)
    );
    this.shoppingEmitter.emit(ingredient);
  }
}
