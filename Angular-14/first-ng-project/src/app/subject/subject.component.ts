import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const obs = new Observable((observer) => {
      observer.next(Math.random());
    });

    let sub = new Subject();
    // sub.next(Math.random());

    obs.subscribe((data) => {
      console.log(data);
    });
    obs.subscribe((data) => {
      console.log(data);
    });
    sub.subscribe((data) => {
      console.log(data);
    });
    sub.subscribe((data) => {
      console.log(data);
    });
    sub.next(Math.random());
  }
}
