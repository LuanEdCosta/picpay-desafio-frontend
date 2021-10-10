import { DatePipe } from '@angular/common'
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { paymentDateValidator } from '@app/payments/validators/payment-date.validator'

import {
  Payment,
  PaymentDataToSave,
} from '@app/shared/services/payments.service'

enum ERROR_MESSAGES {
  NAME_REQUIRED = 'Digite o nome do usuário',
  VALUE_REQUIRED = 'Digite o valor do pagamento',
  VALUE_MIN_VALUE = 'O valor do pagamento não pode ser um número negativo',
  DATE_REQUIRED = 'Digite a data do pagamento',
  DATE_WRONG_FORMAT = 'Você precisa digitar a data e hora no formato: DD/MM/AAAA HH:MM',
  INVALID_DATE = 'A data de pagamento digitada é inválida',
}

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
    value: new FormControl('', [Validators.required, Validators.min(0)]),
    date: new FormControl('', [
      Validators.required,
      Validators.compose([Validators.minLength(16), paymentDateValidator()]),
    ]),
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
        'dd/MM/yyyy HH:mm',
        undefined,
        'pt-BR',
      )

      this.paymentForm.setValue({
        date: formattedDate,
        name: this.paymentToEdit.name,
        value: this.paymentToEdit.value,
        title: this.paymentToEdit.title,
        isPayed: this.paymentToEdit.isPayed || false,
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
      this.errorMessage = ERROR_MESSAGES.NAME_REQUIRED
    } else if (controls.value.errors?.required) {
      this.errorMessage = ERROR_MESSAGES.VALUE_REQUIRED
    } else if (controls.value.errors?.min) {
      this.errorMessage = ERROR_MESSAGES.VALUE_MIN_VALUE
    } else if (controls.date.errors?.required) {
      this.errorMessage = ERROR_MESSAGES.DATE_REQUIRED
    } else if (controls.date.errors?.minlength) {
      this.errorMessage = ERROR_MESSAGES.DATE_WRONG_FORMAT
    } else if (controls.date.errors?.paymentDate) {
      this.errorMessage = ERROR_MESSAGES.INVALID_DATE
    }
  }

  saveNewPayment(): void {
    this.errorMessage = ''

    if (this.paymentForm.valid) {
      const paymentData = this.paymentForm.value
      paymentData.date = this.getFormattedDate(paymentData.date)
      paymentData.isPayed = !!paymentData.isPayed // Prevent null value
      this.savePayment.emit(paymentData)
    } else {
      this.showErrors()
    }
  }
}
