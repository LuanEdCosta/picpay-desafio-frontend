import { NgModule } from '@angular/core'
import { FeatherModule } from 'angular-feather'
import { Eye, LogIn } from 'angular-feather/icons'

const icons = {
  Eye,
  LogIn,
}

@NgModule({
  declarations: [],
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
