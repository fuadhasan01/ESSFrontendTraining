import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: string[] = [
    'Salary',
    'Groceries',
    'Utilities',
    'Freelance',
    'Entertainment',
    'Transportation',
    'Investment',
    'Dining',
    'Health',
    'Gift',
    'Shopping',
    'Travel',
    'Bonus',
    'Subscription',
    'Education',
    'Refund',
  ];
  constructor() {}

  private categoryObs = new BehaviorSubject<string[]>(this.categories);
  categories$ = this.categoryObs.asObservable();

  addCategory(category: string): void {
    this.categories.push(category);
    this.categoryObs.next(this.categories);
  }

  removeCategory(category: string): void {
    this.categories = this.categories.filter((c) => c !== category);
    this.categoryObs.next(this.categories);
  }
}
