import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-save-button',
  template: `<button (click)="save()">Save</button>`,
})
export class SaveButtonComponent {
  constructor(private notify: NotificationService) {}

  save() {
    console.log('SaveButtonComponent: save method called');
    // Simulate saving data
    this.notify.show('Data saved successfully!');
  }
}
