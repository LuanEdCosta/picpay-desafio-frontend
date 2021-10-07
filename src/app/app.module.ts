import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule, registerLocaleData } from '@angular/common'

import localePT from '@angular/common/locales/pt'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { SharedModule } from './shared/shared.module'
import { LoginComponent } from './login/login.component'
import { TasksComponent } from './tasks/tasks.component'

registerLocaleData(localePT)
@NgModule({
  declarations: [AppComponent, LoginComponent, TasksComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
