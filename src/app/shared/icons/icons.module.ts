import { NgModule } from '@angular/core'
import { FeatherModule } from 'angular-feather'
import {
  Eye,
  EyeOff,
  LogIn,
  Plus,
  Sliders,
  ChevronUp,
  ChevronDown,
  Search,
  Edit2,
  Trash,
  CheckCircle,
  XCircle,
} from 'angular-feather/icons'

const icons = {
  Eye,
  EyeOff,
  LogIn,
  Plus,
  Sliders,
  ChevronUp,
  ChevronDown,
  Search,
  Edit2,
  Trash,
  CheckCircle,
  XCircle,
}

@NgModule({
  declarations: [],
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
