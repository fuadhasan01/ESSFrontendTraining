import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class User {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {}
}
