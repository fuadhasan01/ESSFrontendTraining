import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() dataEvent = new EventEmitter<number>();
  constructor() {}
  private intervalId: any;
  ngOnInit(): void {}
  counter: number = 0;
  startCount() {
    this.intervalId = setInterval(() => {
      this.counter++;
      console.log(this.counter);
    }, 1000);
  }

  stopCount() {
    clearInterval(this.intervalId);
    this.dataEvent.emit(this.counter);
  }
}
