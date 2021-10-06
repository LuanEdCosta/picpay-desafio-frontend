import { NgModule } from '@angular/core'
import { FeatherModule } from 'angular-feather'
import { Eye, EyeOff, LogIn } from 'angular-feather/icons'

const icons = {
  Eye,
  EyeOff,
  LogIn,
}

@NgModule({
  declarations: [],
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
