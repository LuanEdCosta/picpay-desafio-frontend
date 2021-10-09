import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthGuard } from './shared/guards/auth.guard'

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => {
      return import('./login/login.module').then((m) => m.LoginModule)
    },
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => {
      return import('./payments/payments.module').then((m) => m.PaymentsModule)
    },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
