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
  ChevronLeft,
  ChevronRight,
  Search,
  Edit2,
  Trash,
  CheckCircle,
  XCircle,
  X,
  Check,
} from 'angular-feather/icons'

const icons = {
  Eye,
  EyeOff,
  LogIn,
  Plus,
  Sliders,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Edit2,
  Trash,
  CheckCircle,
  XCircle,
  X,
  Check,
}

@NgModule({
  declarations: [],
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
