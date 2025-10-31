import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transactions/transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  totalIncome: number = 0;
  totalExpense: number = 0;
  balance: number = 0;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.totalIncome$.subscribe(
      (value) => (this.totalIncome = value)
    );
    this.transactionService.totalExpense$.subscribe(
      (value) => (this.totalExpense = value)
    );
    this.transactionService.balance$.subscribe(
      (value) => (this.balance = value)
    );
  }
}
