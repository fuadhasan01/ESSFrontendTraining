import { Component } from '@angular/core';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [ServersComponent, SuccessAlertComponent, WarningAlertComponent],
})
export class AppComponent {
  title = 'first-ng-project';
}
