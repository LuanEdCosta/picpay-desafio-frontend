import { DatePipe } from '@angular/common'
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

import {
  Payment,
  PaymentDataToSave,
} from '../../../shared/services/payments.service'

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss'],
})
export class PaymentModalComponent implements OnChanges {
  @Input() isOpen: boolean = false
  @Input() paymentToEdit?: Payment

  @Output() closeModal: EventEmitter<undefined> = new EventEmitter()
  @Output() savePayment: EventEmitter<PaymentDataToSave> = new EventEmitter()

  errorMessage: string = ''
  paymentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    title: new FormControl(''),
    isPayed: new FormControl(false),
  })

  constructor(private datePipe: DatePipe) {}

  private getFormattedDate(date: string): string {
    const [dateString, time] = date.split(' ')
    const [day, month, year] = dateString.split('/')
    return new Date(`${year}-${month}-${day} ${time}`).toISOString()
  }

  ngOnChanges(): void {
    if (this.paymentToEdit) {
      const formattedDate = this.datePipe.transform(
        this.paymentToEdit.date,
        'dd/MM/yyyy hh:mm',
      )

      this.paymentForm.setValue({
        date: formattedDate,
        name: this.paymentToEdit.name,
        value: this.paymentToEdit.value,
        title: this.paymentToEdit.title,
        isPayed: this.paymentToEdit.isPayed,
      })
    }

    if (!this.isOpen) {
      this.paymentForm.reset()
    }
  }

  closePaymentModal(): void {
    this.closeModal.emit()
  }

  stopPropagation(e: Event): void {
    e.stopPropagation()
  }

  showErrors(): void {
    const controls = {
      name: this.paymentForm.controls.name,
      value: this.paymentForm.controls.value,
      date: this.paymentForm.controls.date,
    }

    if (controls.name.errors?.required) {
      this.errorMessage = 'Digite o nome do usuário'
      return
    } else if (controls.value.errors?.required) {
      this.errorMessage = 'Digite o valor do pagamento'
      return
    } else if (controls.date.errors?.required) {
      this.errorMessage = 'Digite a data do pagamento'
      return
    }
  }

  saveNewPayment(): void {
    this.errorMessage = ''

    if (this.paymentForm.valid) {
      const paymentData = this.paymentForm.value
      paymentData.date = this.getFormattedDate(paymentData.date)
      this.savePayment.emit(paymentData)
    } else {
      this.showErrors()
    }
  }
}
