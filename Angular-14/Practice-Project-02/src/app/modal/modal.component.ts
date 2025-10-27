import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal-backdrop" (click)="close()"></div>
    <div class="modal">
      <h3>Dynamic Modal</h3>
      <ng-container #modalContainer></ng-container>
      <button (click)="close()">Close</button>
    </div>
  `,
  styles: [
    `
      .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      }
    `,
  ],
})
export class ModalComponent {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;
  // this method will add the dynamic alert inside modal
  loadAlert() {
    this.container.clear();
    const alertRef = this.container.createComponent(AlertComponent);
    setTimeout(() => {
      alertRef.instance.message = 'This alert is shown inside the modal!';
    });
  }

  close() {
    document.body.removeChild(document.getElementById('modal-root')!);
  }
}
