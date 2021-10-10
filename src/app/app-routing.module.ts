import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthGuard } from '@app/shared/guards/auth.guard'
import { AnonymousGuard } from '@app/shared/guards/anonymous.guard'

const routes: Routes = [
  {
    path: 'login',
    canActivate: [AnonymousGuard],
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
  {
    path: 'user-profile',
    canActivate: [AuthGuard],
    loadChildren: () => {
      return import('./user-profile/user-profile.module').then(
        (m) => m.UserProfileModule,
      )
    },
  },
  {
    /*
      We have two options here: redirect to home or show the error 404 page.
      In the future, if some routes were removed this page can help the user understands what happened.
      For small applications this page is not very useful.
    */
    path: '**',
    loadChildren: () => {
      return import('./not-found/not-found.module').then(
        (m) => m.NotFoundModule,
      )
    },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
