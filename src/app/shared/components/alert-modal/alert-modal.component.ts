import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent {
  @Input() isOpen: boolean = false
  @Input() modalTitle: string = ''
  @Output() closeModal: EventEmitter<undefined> = new EventEmitter()

  constructor() {}

  closeAlertModal() {
    this.closeModal.emit()
  }

  stopPropagation(e: Event) {
    e.stopPropagation()
  }
}
