import { Router } from '@angular/router'
import { Component } from '@angular/core'

import { AccountService } from '../shared/services/account.service'

enum LOGIN_ERROR_MESSAGES {
  EMPTY = 'Preencha todos os campos!',
  UNKNOWN_ERROR = 'Ocorreu um erro. Tente novamente mais tarde.',
  USER_NOT_FOUND = 'Usuário não encontrado. Verifique o email e senha digitados.',
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = ''
  password: string = ''
  showPassword: boolean = false
  errorMessage: string = ''

  constructor(private accountService: AccountService, private router: Router) {}

  canShowErrors(): boolean {
    return !this.email.trim() || !this.password.trim()
  }

  togglePassword() {
    this.showPassword = !this.showPassword
  }

  login() {
    this.accountService.login(this.email, this.password).subscribe(
      async (accounts) => {
        if (accounts.length) {
          const [foundAccount] = accounts
          this.accountService.saveAccountSession(foundAccount)
          await this.router.navigateByUrl('/tasks')
        } else {
          this.errorMessage = LOGIN_ERROR_MESSAGES.USER_NOT_FOUND
        }
      },
      () => {
        this.errorMessage = LOGIN_ERROR_MESSAGES.UNKNOWN_ERROR
      },
    )
  }

  onSubmit(e: Event) {
    e.preventDefault()

    this.errorMessage = ''

    if (this.canShowErrors()) {
      this.errorMessage = LOGIN_ERROR_MESSAGES.EMPTY
      return
    }

    this.login()
  }
}
