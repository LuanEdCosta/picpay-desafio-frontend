import { Router } from '@angular/router'
import { Component } from '@angular/core'

import { AccountService } from '@app/shared/services/account.service'
import { SessionService } from '@app/shared/services/session.service'

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

  constructor(
    private router: Router,
    private accountService: AccountService,
    private sessionService: SessionService,
  ) {}

  canShowErrors(): boolean {
    return !this.email.trim() || !this.password.trim()
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword
  }

  login(): void {
    this.accountService.login(this.email, this.password).subscribe(
      (accounts) => {
        if (accounts.length) {
          const [foundAccount] = accounts
          this.sessionService.createSession(foundAccount)
          this.router.navigateByUrl('/')
        } else {
          this.errorMessage = LOGIN_ERROR_MESSAGES.USER_NOT_FOUND
        }
      },
      () => {
        this.errorMessage = LOGIN_ERROR_MESSAGES.UNKNOWN_ERROR
      },
    )
  }

  onSubmit(e: Event): void {
    e.preventDefault()

    this.errorMessage = ''

    if (this.canShowErrors()) {
      this.errorMessage = LOGIN_ERROR_MESSAGES.EMPTY
      return
    }

    this.login()
  }
}
