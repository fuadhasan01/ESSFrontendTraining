import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';
import { interval, Subscription } from 'rxjs';
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
  serverElements: ServerType[] = [];
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
  @ViewChild('modalContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  openModal() {
    this.container.clear();
    const modalRef = this.container.createComponent(ModalComponent);
    modalRef.instance.loadAlert(); // load the dynamic alert inside modal
  }
}
