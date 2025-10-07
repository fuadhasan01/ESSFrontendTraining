import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class Task {
  @Input({ required: true }) name!: string;
}
