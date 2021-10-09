import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'

export type Account = {
  id: number
  name: string
  email: string
  password: string
}

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl = 'http://localhost:3000/account'

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<Account[]> {
    const params = new URLSearchParams({ email, password })
    return this.http.get<Account[]>(`${this.baseUrl}?${params}`)
  }
}
