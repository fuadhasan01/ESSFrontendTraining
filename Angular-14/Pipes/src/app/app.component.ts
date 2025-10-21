import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Pipes Demo';

  today = new Date();
  price = 1234.5563636;
  percentage = 0.8754;
  message = 'hello angular';
  users = ['Alice', 'Bob', 'Charlie', 'David'];
  user = { name: 'John', age: 30, country: 'USA' };
  observable$ = new Promise((resolve) =>
    setTimeout(() => resolve('Async value received!'), 2000)
  );

  gender = 'female';
  inviteMap = {
    male: 'Invite him.',
    female: 'Invite her.',
    other: 'Invite them.',
  };

  messages = ['Hi', 'Hello', 'Welcome'];
  messageMapping: any = {
    '=0': 'No messages.',
    '=1': 'One message.',
    other: '# messages.',
  };
  searchText: string = '';
  newUsers = ['Alice', 'Bob', 'Charlie', 'David', 'Angela', 'Sanjay', 'Anita'];
  onAddUser() {
    this.newUsers.push('Fuad');
    console.log(this.newUsers);
  }
}
