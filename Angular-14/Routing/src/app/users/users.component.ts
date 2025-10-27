import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  private firstObs!: Subscription;
  ngOnInit(): void {
    this.firstObs = interval(1000).subscribe((count) => {
      console.log(count);
    });
  }
  users = [
    {
      id: 1,
      name: 'Max',
    },
    {
      id: 2,
      name: 'Anna',
    },
    {
      id: 3,
      name: 'Chris',
    },
  ];
  ngOnDestroy(): void {
    this.firstObs.unsubscribe();
  }
}
