import { NgModule } from '@angular/core'
import { CommonModule, DatePipe } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NgxMaskModule } from 'ngx-mask'

import { IconsModule } from './icons/icons.module'

import { InputComponent } from './components/input/input.component'
import { ButtonComponent } from './components/button/button.component'
import { IconButtonComponent } from './components/icon-button/icon-button.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { ModalBackdropComponent } from './components/modal-backdrop/modal-backdrop.component'
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component'
import { AlertModalComponent } from './components/alert-modal/alert-modal.component'
import { ModalHeaderComponent } from './components/modal-header/modal-header.component'

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    IconButtonComponent,
    PaginationComponent,
    ModalBackdropComponent,
    ModalDialogComponent,
    AlertModalComponent,
    ModalHeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    NgxMaskModule.forRoot({ dropSpecialCharacters: false }),
  ],
  providers: [DatePipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    NgxMaskModule,
    InputComponent,
    ButtonComponent,
    IconButtonComponent,
    PaginationComponent,
    ModalBackdropComponent,
    ModalDialogComponent,
    AlertModalComponent,
    ModalHeaderComponent,
  ],
})
export class SharedModule {}
