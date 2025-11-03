import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  submitted: boolean = false;
  newCategory: string = '';
  categories: string[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.categories$.subscribe((categories) => {
      this.categories = categories;
    });
  }

  addCategory(): void {
    this.submitted = true;
    if (this.newCategory) {
      this.categoryService.addCategory(this.newCategory);
      this.newCategory = '';
      this.submitted = false;
    }
  }
}
