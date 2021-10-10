import { Component, OnInit } from '@angular/core'

import {
  Payment,
  PaymentsService,
  PaymentDataToSave,
} from '@app/shared/services/payments.service'

type TableColumn = {
  key: string
  label: string
  centered: boolean
}

enum SORT_ORDER {
  ASC = 'asc',
  DESC = 'desc',
}

type SortOrder = SORT_ORDER.ASC | SORT_ORDER.DESC

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  payments: Payment[] = []
  paymentToDelete?: Payment
  paymentToEdit?: Payment
  isShowingPaymentModal: boolean = false

  search: string = ''
  lastSearch: string = ''
  sortBy: string = ''
  sortOrder?: SortOrder
  rowsPerPage: number = 5
  currentPage: number = 1
  totalOfPayments: number = 0

  tableColumns: TableColumn[] = [
    { key: 'name', label: 'Usuário', centered: false },
    { key: 'title', label: 'Título', centered: false },
    { key: 'date', label: 'Data', centered: false },
    { key: 'value', label: 'Valor', centered: false },
    { key: 'isPayed', label: 'Pago', centered: true },
  ]

  rowsPerPageOptions = [5, 10, 15, 20, 25]

  constructor(private paymentsService: PaymentsService) {}

  getPayments() {
    this.paymentsService
      .getPayments({
        limit: this.rowsPerPage,
        search: this.search,
        page: this.currentPage,
        sortBy: this.sortBy,
        sortOrder: this.sortOrder,
      })
      .subscribe((response) => {
        this.lastSearch = this.search
        this.payments = response.body
        this.totalOfPayments = Number(
          response.headers.get('X-Total-Count') || 0,
        )
      })
  }

  setSortBy(sortBy: string) {
    if (this.sortBy !== sortBy) {
      this.sortOrder = undefined
      this.sortBy = ''
    }

    if (!this.sortOrder) {
      this.sortOrder = SORT_ORDER.ASC
      this.sortBy = sortBy
    } else if (this.sortOrder === SORT_ORDER.ASC) {
      this.sortOrder = SORT_ORDER.DESC
      this.sortBy = sortBy
    } else {
      this.sortOrder = undefined
      this.sortBy = ''
    }

    this.getPayments()
  }

  ngOnInit(): void {
    this.getPayments()
  }

  setIsAddingPayment() {
    this.isShowingPaymentModal = true
  }

  setPaymentToEdit(payment: Payment) {
    this.paymentToEdit = payment
    this.setIsAddingPayment()
  }

  closePaymentModal() {
    this.isShowingPaymentModal = false
    this.paymentToEdit = undefined
  }

  filterPayments(e: Event) {
    e.preventDefault()
    this.currentPage = 1
    this.getPayments()
  }

  changePage(page: number) {
    this.currentPage = page
    this.getPayments()
  }

  changeRowsPerPage() {
    this.currentPage = 1
    this.getPayments()
  }

  getTotalOfPages(): number {
    return Math.ceil(this.totalOfPayments / this.rowsPerPage)
  }

  setPaymentToDelete(payment: Payment) {
    this.paymentToDelete = payment
  }

  deletePayment() {
    if (this.paymentToDelete) {
      const idToDelete = this.paymentToDelete.id
      this.paymentsService.deletePayment(idToDelete).subscribe(() => {
        this.paymentToDelete = undefined
        this.getPayments()
      })
    }
  }

  savePayment(payment: PaymentDataToSave) {
    this.paymentsService.addPayment(payment).subscribe(() => {
      this.getPayments()
      this.closePaymentModal()
    })
  }

  editPayment(payment: PaymentDataToSave) {
    const paymentWithNewData = {
      ...this.paymentToEdit,
      ...payment,
    }

    this.paymentsService
      .updatePayment(paymentWithNewData)
      .subscribe((payment) => {
        const indexToUpdate = this.payments.findIndex(
          ({ id }) => id === payment.id,
        )

        if (indexToUpdate !== -1) {
          const paymentsClone = [...this.payments]
          paymentsClone.splice(indexToUpdate, 1, payment)
          this.payments = paymentsClone
        }

        this.closePaymentModal()
      })
  }
}
