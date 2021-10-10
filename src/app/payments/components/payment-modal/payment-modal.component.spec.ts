import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DatePipe } from '@angular/common'

import { PaymentModalComponent } from './payment-modal.component'

describe('PaymentModalComponent', () => {
  let component: PaymentModalComponent
  let fixture: ComponentFixture<PaymentModalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentModalComponent],
      providers: [DatePipe],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
