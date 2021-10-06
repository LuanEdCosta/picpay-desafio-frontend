import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { SharedModule } from './shared/shared.module'
import { LoginComponent } from './login/login.component'
import { TasksComponent } from './tasks/tasks.component'

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
