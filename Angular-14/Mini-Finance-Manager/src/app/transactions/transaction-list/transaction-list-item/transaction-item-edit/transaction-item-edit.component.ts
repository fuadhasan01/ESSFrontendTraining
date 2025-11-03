import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/category/category.service';
import { Transaction } from 'src/app/transactions/transaction.model';

@Component({
  selector: 'app-transaction-item-edit',
  templateUrl: './transaction-item-edit.component.html',
  styleUrls: ['./transaction-item-edit.component.css'],
})
export class TransactionItemEditComponent implements OnInit {
  @Input() transaction?: Transaction;
  @Output() save = new EventEmitter<Transaction>();
  @Output() cancel = new EventEmitter<void>();

  transactionForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {}
  //Initially some default categories
  categories: string[] = [
    'Food',
    'Transport',
    'Utilities',
    'Entertainment',
    'Others',
  ];

  ngOnInit() {
    this.isEditMode = !!this.transaction;
    // Fetch categories from the service
    this.categoryService.categories$.subscribe((cats) => {
      this.categories.push(...cats);
    });
    this.transactionForm = this.fb.group({
      title: [this.transaction?.title || '', Validators.required],
      amount: [
        this.transaction?.amount || '',
        [Validators.required, Validators.min(0.01)],
      ],
      type: [this.transaction?.type || 'expense', Validators.required],
      category: [this.transaction?.category || '', Validators.required],
      date: [this.transaction?.date || new Date(), Validators.required],
      description: [this.transaction?.description || ''],
    });
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      const formValue = this.transactionForm.value;
      const finalData: Transaction = this.isEditMode
        ? { ...this.transaction, ...formValue } // update existing
        : { id: Date.now(), ...formValue }; // create new

      this.save.emit(finalData);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
