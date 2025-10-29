import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-toast',
  template: `<div *ngIf="message" class="toast">{{ message }}</div>`,
})
export class ToastComponent implements OnInit {
  message: string | null = null;

  constructor(private notify: NotificationService) {}

  ngOnInit() {
    this.notify.notify$.subscribe((msg) => {
      console.log('ToastComponent: received notification:', msg);
      this.message = msg;
    });
  }
}
