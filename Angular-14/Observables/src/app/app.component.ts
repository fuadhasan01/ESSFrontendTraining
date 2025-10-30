import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SenderComponent } from './sender.component';
import { ReceiverComponent } from './receiver.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SenderComponent, ReceiverComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Observables';
  promiseValue: Promise<string>;
  observable: Observable<string>;
  constructor() {
    this.promiseValue = new Promise<string>((resolve) => {
      resolve('Data arrived!');
    });
    this.observable = new Observable<string>((subscriber) => {
      subscriber.next('First data');
      subscriber.next('More data');
      subscriber.next('Final data');
      subscriber.complete();
    });
  }

  ngOnInit(): void {
    this.promiseValue.then((data) => {
      console.log(data);
    });
    this.observable.subscribe((data) => {
      console.log(data);
    });
  }
}
