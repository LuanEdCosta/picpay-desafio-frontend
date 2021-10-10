import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-profile-option',
  templateUrl: './profile-option.component.html',
  styleUrls: ['./profile-option.component.scss'],
})
export class ProfileOptionComponent {
  @Input() iconName: string = ''
  @Input() optionTitle: string = ''
  @Input() subtitle: string = ''
  @Input() actionText: string = ''

  constructor() {}
}
