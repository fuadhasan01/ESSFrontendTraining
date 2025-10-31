import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  isCreateFormOpen: boolean = false;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.transactions$.subscribe((transactions) => {
      this.transactions = transactions;
    });
  }
  openCreateForm() {
    this.isCreateFormOpen = true;
  }
  closeCreateForm() {
    this.isCreateFormOpen = false;
  }
  onTransactionCreated(newTransaction: Transaction) {
    console.log(newTransaction);
    const transactionWithDate = {
      ...newTransaction,
      date: new Date(newTransaction.date),
    };
    this.transactionService.addTransaction(transactionWithDate);
    this.isCreateFormOpen = false;
  }
}
