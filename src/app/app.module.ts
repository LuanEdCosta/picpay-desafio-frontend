import { NgModule } from '@angular/core'
import { registerLocaleData } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'

import localePT from '@angular/common/locales/pt'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

registerLocaleData(localePT)
@NgModule({
  providers: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
})
export class AppModule {}
