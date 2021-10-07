import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { IconsModule } from './icons/icons.module'
import { InputComponent } from './components/input/input.component'
import { ButtonComponent } from './components/button/button.component'
import { HeaderComponent } from './components/header/header.component'
import { IconButtonComponent } from './components/icon-button/icon-button.component'
import { PaginationComponent } from './components/pagination/pagination.component'

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    IconButtonComponent,
    PaginationComponent,
  ],
  imports: [CommonModule, IconsModule, HttpClientModule],
  exports: [
    IconsModule,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    IconButtonComponent,
    PaginationComponent,
  ],
})
export class SharedModule {}
