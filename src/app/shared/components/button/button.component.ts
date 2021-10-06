import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() withIcon: boolean = false
  @Input() type: 'submit' | 'button' | 'reset' = 'button'
  @Input() onClick?: (e: Event) => void

  constructor() {}
}
