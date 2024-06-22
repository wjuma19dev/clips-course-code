import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() modalID: string = '';

  constructor(
    public modalS: ModalService 
  ) {}

  closeModal() {
    this.modalS.toggleModel(this.modalID);
  }

}
