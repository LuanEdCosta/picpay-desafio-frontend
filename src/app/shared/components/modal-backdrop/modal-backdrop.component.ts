import { Component, OnDestroy, OnInit } from '@angular/core'

@Component({
  selector: 'app-modal-backdrop',
  templateUrl: './modal-backdrop.component.html',
  styleUrls: ['./modal-backdrop.component.scss'],
})
export class ModalBackdropComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    document.querySelector('html').setAttribute('style', 'overflow-y: hidden')
  }

  ngOnDestroy(): void {
    document.querySelector('html').removeAttribute('style')
  }
}
