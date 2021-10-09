import { Injectable } from '@angular/core'

import { Account } from './account.service'

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private readonly SESSION_KEY = '@PAY_FRIENDS/ACCOUNT_SESSION'

  constructor() {}

  createSession(account: Account) {
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(account))
  }

  deleteSession() {
    localStorage.removeItem(this.SESSION_KEY)
  }

  hasSession() {
    const session = localStorage.getItem(this.SESSION_KEY)
    return !!session
  }
}
