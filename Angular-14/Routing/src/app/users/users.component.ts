import { Component } from '@angular/core';
import { filter, interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  private firstObs!: Subscription;
  ngOnInit(): void {
    // this.firstObs = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObservable = new Observable((observer: any) => {
      let count: number = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) observer.complete();
        if (count > 3) observer.error(new Error('Count is greater than 3!'));
        count++;
      }, 1000);
    });
    this.firstObs = customIntervalObservable
      .pipe(
        filter((data) => {
          return (data as number) > 2;
        }),
        map((data) => {
          return 'Round: ' + ((data as number) + 1);
        })
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (errorRef) => {
          console.log(errorRef);
          alert(errorRef.message);
        },
        complete() {
          console.log('Completed');
        },
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
