import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  // @Output() userSetToActive = new EventEmitter<number>();
  constructor(private _userService: UserService) {}
  users!: string[];
  ngOnInit(): void {
    this.users = this._userService.inactiveUsers;
  }

  // onSetToActive(id: number) {
  //   this.userSetToActive.emit(id);
  // }

  onSetToActive(id: number) {
    this._userService.activeUsers.push(this.users[id]);
    this.users.splice(id, 1);
  }
}
