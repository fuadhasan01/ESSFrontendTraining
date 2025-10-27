import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `<div style="background-color: lightcoral; padding: 10px;">
    {{ message }}
  </div>`,
})
export class AlertComponent {
  @Input() message!: string;
}
