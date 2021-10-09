import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http'

type GetPaymentsOptions = {
  limit: number
  page?: number
  search?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

type Filters = {
  _limit: string
  _page?: string
  _sort?: string
  _order?: string
  q?: string
}

export type Payment = {
  id: number
  name: string
  username: string
  title: string
  value: number
  date: string
  image: string
  isPayed: boolean
}

export type PaymentDataToSave = Pick<
  Payment,
  'name' | 'value' | 'date' | 'title' | 'isPayed'
>

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  private baseUrl = 'http://localhost:3000/payments'

  constructor(private http: HttpClient) {}

  // Generating unique usernames is backend responsibility.
  // But for now it's in the front-end code.
  // ! Problem: Can generate duplicate usernames
  private getUserName(name: string): string {
    const nameParts = name.split(' ')
    const zeroToNineRandomNumber = Math.floor(Math.random() * 10)

    if (name && nameParts.length === 1) {
      const [firstName] = nameParts
      return `${firstName}${zeroToNineRandomNumber}`
    } else if (nameParts.length >= 2) {
      const [firstName, secondName] = nameParts
      const firstNameFirstLetter = firstName.charAt(0)
      return `${firstNameFirstLetter}${secondName}${zeroToNineRandomNumber}`
    }

    return ''
  }

  getPayments({
    page,
    limit,
    search,
    sortBy,
    sortOrder,
  }: GetPaymentsOptions): Observable<HttpResponse<Payment[]>> {
    const filters: Filters = { _limit: String(limit) }
    if (page) filters._page = String(page)
    if (search) filters.q = search
    if (sortBy) filters._sort = sortBy
    if (sortOrder) filters._order = sortOrder
    const params = new URLSearchParams(filters)
    return this.http.get<Payment[]>(`${this.baseUrl}?${params}`, {
      observe: 'response',
    })
  }

  deletePayment(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  addPayment(paymentData: PaymentDataToSave): Observable<Payment> {
    return this.http.post<Payment>(this.baseUrl, {
      ...paymentData,
      username: this.getUserName(paymentData.name),
    })
  }

  updatePayment(payment: Payment): Observable<Payment> {
    return this.http.patch<Payment>(`${this.baseUrl}/${payment.id}`, payment)
  }
}
