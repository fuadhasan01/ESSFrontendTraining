import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServersService } from './servers/servers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  activeValue: string = 'nothing activated';
  subs!: Subscription;
  constructor(private serversService: ServersService) {}

  ngOnInit(): void {
    this.subs = this.serversService.activatedEmitter.subscribe((val) => {
      this.activeValue = val;
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
