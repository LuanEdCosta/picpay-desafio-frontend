import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { TasksComponent } from './tasks/tasks.component'
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: TasksComponent,
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
