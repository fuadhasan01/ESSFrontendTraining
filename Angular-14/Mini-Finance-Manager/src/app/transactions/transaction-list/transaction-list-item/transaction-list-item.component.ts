import { Component, Input } from '@angular/core';
import { Transaction } from '../../transaction.model';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
})
export class TransactionListItemComponent {
  @Input() transaction!: Transaction;
  isAccordionOpen: boolean = false;

  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
}
