import { NgModule } from '@angular/core'
import { CommonModule, DatePipe } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NgxMaskModule } from 'ngx-mask'

import { IconsModule } from './icons/icons.module'
import { InputComponent } from './components/input/input.component'
import { ButtonComponent } from './components/button/button.component'
import { HeaderComponent } from './components/header/header.component'
import { IconButtonComponent } from './components/icon-button/icon-button.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { ModalBackdropComponent } from './components/modal-backdrop/modal-backdrop.component'
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component'
import { AlertModalComponent } from './components/alert-modal/alert-modal.component'
import { ModalHeaderComponent } from './components/modal-header/modal-header.component'
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component'

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    IconButtonComponent,
    PaginationComponent,
    ModalBackdropComponent,
    ModalDialogComponent,
    AlertModalComponent,
    ModalHeaderComponent,
    PaymentModalComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    NgxMaskModule.forRoot({ dropSpecialCharacters: false }),
  ],
  providers: [DatePipe],
  exports: [
    IconsModule,
    NgxMaskModule,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    IconButtonComponent,
    PaginationComponent,
    ModalBackdropComponent,
    ModalDialogComponent,
    AlertModalComponent,
    ModalHeaderComponent,
    PaymentModalComponent,
  ],
})
export class SharedModule {}
