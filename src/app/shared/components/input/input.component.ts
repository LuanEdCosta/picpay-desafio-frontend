import { Component, Input } from '@angular/core'

type InputColors = 'background' | 'snow'
type InputSizes = 'default' | 'small'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label: string = ''
  @Input() color: InputColors = 'background'
  @Input() size: InputSizes = 'default'

  constructor() {}
}
