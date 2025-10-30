import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SenderComponent } from './sender.component';
import { ReceiverComponent } from './receiver.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SenderComponent, ReceiverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Observables';
}
