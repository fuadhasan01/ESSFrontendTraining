import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SenderComponent } from './sender.component';
import { ReceiverComponent } from './receiver.component';
import {
  catchError,
  concatMap,
  debounceTime,
  filter,
  interval,
  map,
  Observable,
  of,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SenderComponent, ReceiverComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Observables';

  ngOnInit(): void {
    this.practice();
  }
  practice() {
    const coldObservable = new Observable((observer) => {
      observer.next(Math.random()); // random value
    });

    // Each subscriber gets a different value
    // coldObservable.subscribe((data) => console.log('Subscriber 1:', data));
    // coldObservable.subscribe((data) => console.log('Subscriber 2:', data));
    // coldObservable.subscribe((data) => console.log('Subscriber 3:', data));

    // map example
    of(1, 2, 3)
      .pipe(map((x) => x * 2))
      .subscribe((x) => console.log(x));

    // filter example
    of(1, 2, 3, 4, 5, 6)
      .pipe(filter((x) => x % 2 === 0))
      .subscribe((x) => console.log(x));

    //tap example
    of(1, 2, 3)
      .pipe(
        tap((x) => console.log('Before:', x)),
        map((x) => x * 3),
        tap((x) => console.log('After:', x))
      )
      .subscribe((x) => console.log('Final:', x));

    //debounceTime example
    // This will emit only the last value if no new value comes in 1 second
    // debounceTime will ignore all intermediate values
    console.log('debounceTime example:');
    const debounceExample$ = new Observable<string>((observer) => {
      observer.next('A');
      setTimeout(() => observer.next('B'), 300);

      setTimeout(() => observer.next('C'), 800);
    });

    debounceExample$
      .pipe(debounceTime(200))
      .subscribe((x) => console.log('Debounced:', x));

    //catchError example
    console.log('catchError example:');
    of(1, 2, 3)
      .pipe(
        map((x) => {
          if (x === 2) {
            throw new Error('Error occurred');
          }
          return x;
        }),
        catchError((err) => {
          console.error(err);
          return of(-1);
        })
      )
      .subscribe((x) => console.log(x));

    //first example
    console.log('take(2) example:');
    of(1, 2, 3)
      .pipe(take(2))
      .subscribe((x) => console.log(x));

    //takeUntil example
    console.log('takeUntil example:');
    const stop$ = interval(2500);
    interval(1000)
      .pipe(takeUntil(stop$))
      .subscribe((x) => console.log(x));

    //concatMap example
    console.log('concatMap example:');
    of(1, 2, 3)
      .pipe(concatMap((x) => interval(1000).pipe(map((y) => x + y))))
      .subscribe((x) => console.log(x));

    // switchMap example
    of(1, 2, 3)
      .pipe(switchMap((x) => interval(1200).pipe(take(2))))
      .subscribe((x) => console.log(x));
  }
}
