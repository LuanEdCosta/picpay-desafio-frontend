import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() withIcon: boolean = false
  @Input() type: 'submit' | 'button' | 'reset' = 'button'
  @Input() size: 'default' | 'small' = 'default'
  @Input() color: 'accent' | 'snow' | 'danger' = 'accent'

  constructor() {}
}
