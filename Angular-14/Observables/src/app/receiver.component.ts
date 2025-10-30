import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [CommonModule],
  template: ` <button (click)="triggerSubs()">Refresh Message</button>
    <h1 *ngFor="let msg of messages">{{ msg }}</h1>`,
})
export class ReceiverComponent implements OnInit {
  messages: string[] = [];
  constructor(private messageService: MessageService) {}

  triggerSubs() {
    //       sendMessage(message: string) {
    //     this.messageService.message$.next(message);
    //     this.messageService.message$.next('Message sent: ' + message);
    //   }
    // here i want to subscribe to all messages when button is clicked and show them in ui

    this.messageService.message$
      .pipe(
        map((msg) => {
          return 'Received: ' + msg;
        })
      )
      .subscribe((msg) => {
        this.messages.push(msg); // here i see in ui only last message why? how i can see all messages? ans: use an array to store all messages
      });

    this.messageService.message$
      .pipe(
        map((msg) => {
          return 'Also received: ' + msg;
        })
      )
      .subscribe((msg) => {
        this.messages.push(msg); // here i see in ui only last message why? how i can see all messages? ans: use an array to store all messages
      });
  }
  ngOnInit(): void {}
}
