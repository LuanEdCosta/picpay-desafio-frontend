import { NgModule } from '@angular/core'

import { SharedModule } from '@app/shared/shared.module'
import { UserProfileRoutingModule } from './user-profile-routing.module'

import { UserProfileComponent } from './user-profile.component'
import { ProfileOptionComponent } from './components/profile-option/profile-option.component'

@NgModule({
  declarations: [UserProfileComponent, ProfileOptionComponent],
  imports: [SharedModule, UserProfileRoutingModule],
})
export class UserProfileModule {}
