import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = '';
  serverName = '';
  userName = '';
  servers = ['server1', 'server2'];
  displayPassword = false;
  counters: any[] = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
  getUserName() {
    return this.userName !== '';
  }
  getListColor() {
    if (this.counters.length > 4) {
      return 'blue';
    }
    return '';
  }
  onResetInput() {
    this.userName = '';
  }
  onTogglePassword() {
    if (this.displayPassword) this.displayPassword = false;
    else this.displayPassword = true;
    this.counters.push(new Date());
  }
}
