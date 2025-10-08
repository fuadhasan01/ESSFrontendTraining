import { Component, Input } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-task',
  imports: [TaskItemComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      time: '9:00 AM',
      summary: 'Summary of Task 1',
      dueDate: '2024-06-30',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Task 2',
      time: '10:00 AM',
      summary: 'Summary of Task 2',
      dueDate: '2024-06-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Task 3',
      time: '05:00 AM',
      summary: 'Summary of Task 3',
      dueDate: '2024-06-31',
    },
    {
      id: 't4',
      userId: 'u1',
      title: 'Task 4',
      time: '07:00 AM',
      summary: 'Summary of Task 4',
      dueDate: '2024-06-05',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
