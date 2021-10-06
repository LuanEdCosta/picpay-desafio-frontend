import { Component } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = ''
  password: string = ''
  showPassword: boolean = false
  showErrors: boolean = false
  errorMessage: string = ''

  constructor() {}

  canShowErrors(): boolean {
    return !this.email.trim() || !this.password.trim()
  }

  togglePassword() {
    this.showPassword = !this.showPassword
  }

  onSubmit(e: Event) {
    e.preventDefault()

    if (this.canShowErrors()) {
      this.showErrors = true
      this.errorMessage = 'Erro: Preencha todos os campos!'
      return
    }

    this.showErrors = false

    // API REQUEST
  }
}
