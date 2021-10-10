import { Component, OnInit } from '@angular/core'

import { Account } from '@app/shared/services/account.service'
import { SessionService } from '@app/shared/services/session.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  session?: Account

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.session = this.sessionService.getSession()
  }
}
