import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
})
export class ModalHeaderComponent {
  @Input() modalTitle: string = ''
  @Output() closeModal: EventEmitter<undefined> = new EventEmitter()

  constructor() {}

  emitCloseModal(): void {
    this.closeModal.emit()
  }
}
