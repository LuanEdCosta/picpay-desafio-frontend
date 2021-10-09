import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { PaymentsComponent } from './payments/payments.component'
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: PaymentsComponent,
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
