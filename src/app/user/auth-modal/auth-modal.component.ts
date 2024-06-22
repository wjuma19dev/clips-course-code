import { 
  // AfterContentInit, 
  Component, 
  ElementRef, 
  // Inject, 
  OnDestroy, 
  OnInit 
} from '@angular/core';
// import { DOCUMENT } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent implements OnInit, OnDestroy {

  constructor(
    private modalS: ModalService,
    private el: ElementRef,
    // @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.modalS.register('auth');
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.modalS.unregister('auth');
  }

}
