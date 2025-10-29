import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notifySubject = new BehaviorSubject<string>('Initial Notification');
  notify$ = this.notifySubject.asObservable();

  show(message: string) {
    console.log('NotificationService: show called with message:', message);
    this.notifySubject.next(message); // emit new notification
  }
}
