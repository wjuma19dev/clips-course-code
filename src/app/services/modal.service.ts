import { Injectable, OnInit } from '@angular/core';

interface IModal {
  id: string,
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService implements OnInit { 

  private modals: IModal[] = [];

  constructor() { }

  register(id: string): void {
    this.modals.push({
      id,
      visible: false
    })
  }

  unregister(id: string) {
    this.modals = this.modals.filter( m => m.id !== id );
  }

  ngOnInit(): void {
  }
  
  isModalOpen(id: string): boolean {
    return !!this.modals.find(modal => modal.id === id)?.visible
  }
  
  toggleModel(id: string) {
    const modal = this.modals.find(modal => modal.id === id);
    if(modal) {
      modal.visible = !modal.visible;
    }
  }


}
    