import { Component, EventEmitter, Input, Output } from '@angular/core'

import { Payment } from '@app/shared/services/payments.service'

@Component({
  selector: 'app-delete-payment-modal',
  templateUrl: './delete-payment-modal.component.html',
  styleUrls: ['./delete-payment-modal.component.scss'],
})
export class DeletePaymentModalComponent {
  @Input() paymentToDelete?: Payment
  @Output() closeModal?: EventEmitter<undefined> = new EventEmitter()
  @Output() deletePayment?: EventEmitter<undefined> = new EventEmitter()

  constructor() {}

  emitCloseModal(): void {
    this.closeModal.emit()
  }

  emitDeletePayment(): void {
    this.deletePayment.emit()
  }
}
