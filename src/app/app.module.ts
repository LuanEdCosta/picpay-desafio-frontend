import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule, registerLocaleData } from '@angular/common'

import localePT from '@angular/common/locales/pt'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { SharedModule } from './shared/shared.module'
import { LoginComponent } from './login/login.component'
import { PaymentsComponent } from './payments/payments.component'

registerLocaleData(localePT)
@NgModule({
  declarations: [AppComponent, LoginComponent, PaymentsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
