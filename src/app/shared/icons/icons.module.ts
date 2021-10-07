import { NgModule } from '@angular/core'
import { FeatherModule } from 'angular-feather'
import {
  Eye,
  EyeOff,
  LogIn,
  Plus,
  Sliders,
  ChevronUp,
  Search,
  Edit2,
  Trash,
} from 'angular-feather/icons'

const icons = {
  Eye,
  EyeOff,
  LogIn,
  Plus,
  Sliders,
  ChevronUp,
  Search,
  Edit2,
  Trash,
}

@NgModule({
  declarations: [],
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
