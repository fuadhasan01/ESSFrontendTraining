import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { Task } from './task/task.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Task],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = this.users[0].id;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onUserSelected(id: string) {
    this.selectedUserId = id;
  }
}
