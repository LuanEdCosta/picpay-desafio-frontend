import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() type: 'submit' | 'button' | 'reset' = 'button'
  @Input() onClick?: (e: Event) => void

  constructor() {}
}
