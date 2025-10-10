import { Component } from '@angular/core';
interface ServerType {
  type: string;
  name: string;
  content: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: ServerType[] = [
    { type: 'server', name: 'Test Server', content: 'Just a test!' },
  ];
}
