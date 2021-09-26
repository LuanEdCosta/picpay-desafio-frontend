import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@core/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
