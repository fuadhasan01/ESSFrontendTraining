import { Component } from '@angular/core';
import { MessageService } from './message.service';
@Component({
  selector: 'app-sender',
  standalone: true,
  template: `
    <input #messageInput />
    <button (click)="sendMessage(messageInput.value)">Send</button>
  `,
})
export class SenderComponent {
  constructor(private messageService: MessageService) {}

  sendMessage(message: string) {
    this.messageService.message$.next(message);
    this.messageService.message$.next('Message sent: ' + message);
  }
}
