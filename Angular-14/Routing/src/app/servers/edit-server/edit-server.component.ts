import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server?: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    const server = this.serversService.getServer(1);
    if (server) {
      this.server = server;
      this.serverName = server.name;
      this.serverStatus = server.status;
    }
  }

  onUpdateServer() {
    if (this.server) {
      this.serversService.updateServer(this.server.id, {
        name: this.serverName,
        status: this.serverStatus,
      });
    }
  }
}
