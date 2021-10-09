import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent {
  @Input() size: 'large' | 'medium' | 'small' = 'medium'

  constructor() {}
}
