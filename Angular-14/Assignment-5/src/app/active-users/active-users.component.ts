import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit, OnChanges {
  constructor(private _userService: UserService) {}
  users!: string[];
  ngOnInit(): void {
    this.users = this._userService.activeUsers;
  }
  ngOnChanges(): void {
    this.users = this._userService.activeUsers;
  }
  // @Output() userSetToInactive = new EventEmitter<number>();

  // onSetToInactive(id: number) {
  //   this.userSetToInactive.emit(id);
  // }

  onSetToInactive(id: number) {
    this._userService.inactiveUsers.push(this.users[id]);
    this.users.splice(id, 1);
  }
}
