import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor() {}
  private transactions: Transaction[] = [
    {
      id: 1,
      title: 'Monthly Salary',
      type: 'income',
      category: 'Salary',
      amount: 2500,
      date: new Date('2025-10-01T09:00:00'),
      description: 'Monthly salary',
    },
    {
      id: 2,
      title: 'Grocery Shopping',
      type: 'expense',
      category: 'Groceries',
      amount: 120.75,
      date: new Date('2025-10-02T15:30:00'),
      description: 'Weekly groceries',
    },
    {
      id: 3,
      title: 'Electricity Bill',
      type: 'expense',
      category: 'Utilities',
      amount: 75.5,
      date: new Date('2025-10-03T10:15:00'),
      description: 'Electricity bill',
    },
    {
      id: 4,
      title: 'Freelance Project',
      type: 'income',
      category: 'Freelance',
      amount: 400,
      date: new Date('2025-10-04T20:00:00'),
      description: 'Project payment',
    },
    {
      id: 5,
      title: 'Movie Tickets',
      type: 'expense',
      category: 'Entertainment',
      amount: 60,
      date: new Date('2025-10-05T22:00:00'),
      description: 'Movie tickets',
    },
    {
      id: 6,
      title: 'Fuel',
      type: 'expense',
      category: 'Transportation',
      amount: 35.25,
      date: new Date('2025-10-06T08:45:00'),
      description: 'Fuel',
    },
    {
      id: 7,
      title: 'Stock Dividends',
      type: 'income',
      category: 'Investment',
      amount: 150,
      date: new Date('2025-10-07T12:00:00'),
      description: 'Stock dividends',
    },
    {
      id: 8,
      title: 'Dinner Out',
      type: 'expense',
      category: 'Dining',
      amount: 45.5,
      date: new Date('2025-10-08T19:30:00'),
      description: 'Dinner out',
    },
    {
      id: 9,
      title: 'Doctor Visit',
      type: 'expense',
      category: 'Health',
      amount: 80,
      date: new Date('2025-10-09T11:00:00'),
      description: 'Doctor visit',
    },
    {
      id: 10,
      title: 'Birthday Gift',
      type: 'income',
      category: 'Gift',
      amount: 200,
      date: new Date('2025-10-10T17:00:00'),
      description: 'Birthday gift from uncle',
    },
    {
      id: 11,
      title: 'Clothes Shopping',
      type: 'expense',
      category: 'Shopping',
      amount: 95.9,
      date: new Date('2025-10-11T14:00:00'),
      description: 'Clothes shopping',
    },
    {
      id: 12,
      title: 'Weekend Trip',
      type: 'expense',
      category: 'Travel',
      amount: 300,
      date: new Date('2025-10-12T09:30:00'),
      description: 'Weekend trip',
    },
    {
      id: 13,
      title: 'Quarterly Bonus',
      type: 'income',
      category: 'Bonus',
      amount: 500,
      date: new Date('2025-10-13T10:00:00'),
      description: 'Quarterly bonus',
    },
    {
      id: 14,
      title: 'Streaming Subscription',
      type: 'expense',
      category: 'Subscription',
      amount: 15,
      date: new Date('2025-10-14T07:00:00'),
      description: 'Streaming service',
    },
    {
      id: 15,
      title: 'Online Course',
      type: 'expense',
      category: 'Education',
      amount: 200,
      date: new Date('2025-10-15T21:15:00'),
      description: 'Online course',
    },
    {
      id: 16,
      title: 'Tax Refund',
      type: 'income',
      category: 'Refund',
      amount: 50,
      date: new Date('2025-10-16T13:45:00'),
      description: 'Tax refund',
    },
    {
      id: 17,
      title: 'Weekly Groceries',
      type: 'expense',
      category: 'Groceries',
      amount: 110,
      date: new Date('2025-10-17T16:00:00'),
      description: 'Weekly groceries',
    },
    {
      id: 18,
      title: 'Uber Rides',
      type: 'expense',
      category: 'Transportation',
      amount: 40,
      date: new Date('2025-10-18T18:10:00'),
      description: 'Uber rides',
    },
    {
      id: 19,
      title: 'Website Project',
      type: 'income',
      category: 'Freelance',
      amount: 350,
      date: new Date('2025-10-19T22:45:00'),
      description: 'Website project',
    },
    {
      id: 20,
      title: 'Lunch with Friends',
      type: 'expense',
      category: 'Dining',
      amount: 55,
      date: new Date('2025-10-20T13:30:00'),
      description: 'Lunch with friends',
    },
  ];

  private transactionSubject = new BehaviorSubject<Transaction[]>(
    this.getSortedTransactions()
  );

  transactions$: Observable<Transaction[]> =
    this.transactionSubject.asObservable();

  private getSortedTransactions(): Transaction[] {
    return [...this.transactions].sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );
  }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
    this.transactionSubject.next(this.getSortedTransactions());
  }

  updateTransaction(updatedTransaction: Transaction) {
    const index = this.transactions.findIndex(
      (t) => t.id === updatedTransaction.id
    );
    if (index !== -1) {
      this.transactions[index] = updatedTransaction;
      this.transactionSubject.next(this.getSortedTransactions());
    }
  }

  // Inside service
  totalIncome$ = this.transactions$.pipe(
    map((transactions) =>
      transactions
        .filter((t) => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0)
    )
  );

  totalExpense$ = this.transactions$.pipe(
    map((transactions) =>
      transactions
        .filter((t) => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0)
    )
  );

  balance$ = this.transactions$.pipe(
    map(
      (transactions) =>
        transactions
          .filter((t) => t.type === 'income')
          .reduce((sum, t) => sum + t.amount, 0) -
        transactions
          .filter((t) => t.type === 'expense')
          .reduce((sum, t) => sum + t.amount, 0)
    )
  );
}
