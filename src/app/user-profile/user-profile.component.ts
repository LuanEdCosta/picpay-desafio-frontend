import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Account } from '@app/shared/services/account.service'
import { SessionService } from '@app/shared/services/session.service'

@Component({
  selector: 'app-user-profile',

  templateUrl: './user-profile.component.html',

  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  session?: Account

  constructor(private sessionService: SessionService, private router: Router) {}

  ngOnInit(): void {
    this.session = this.sessionService.getSession()
  }

  logout(): void {
    this.sessionService.deleteSession()
    this.router.navigateByUrl('/login')
  }

  goBack(): void {
    this.router.navigateByUrl('/')
  }
}
