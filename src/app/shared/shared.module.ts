import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { IconsModule } from './icons/icons.module'
import { InputComponent } from './components/input/input.component'
import { ButtonComponent } from './components/button/button.component'

@NgModule({
  declarations: [InputComponent, ButtonComponent],
  imports: [CommonModule, IconsModule, HttpClientModule],
  exports: [IconsModule, InputComponent, ButtonComponent],
})
export class SharedModule {}
