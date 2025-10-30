import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-receiver',
  standalone: true,
  template: ` <button (click)="triggerSubs()">Refresh Message</button>
    <h1>{{ message }}</h1>`,
})
export class ReceiverComponent implements OnInit {
  message: string = 'no message yet';
  constructor(private messageService: MessageService) {}

  triggerSubs() {
    this.messageService.message$.subscribe((msg) => {
      this.message = msg;
      console.log(msg);
    });
  }
  ngOnInit(): void {}
}
