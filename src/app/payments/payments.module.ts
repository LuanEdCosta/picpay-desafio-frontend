import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { PaymentsRoutingModule } from './payments-routing.module'

import { PaymentsComponent } from './payments.component'
import { HeaderComponent } from './components/header/header.component'
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component'
@NgModule({
  declarations: [PaymentsComponent, HeaderComponent, PaymentModalComponent],
  imports: [SharedModule, PaymentsRoutingModule],
})
export class PaymentsModule {}
