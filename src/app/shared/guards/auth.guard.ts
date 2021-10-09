import { Injectable } from '@angular/core'
import { UrlTree, CanActivate, Router } from '@angular/router'

import { Observable } from 'rxjs'

import { SessionService } from '@app/shared/services/session.service'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const hasSession = this.sessionService.hasSession()
    if (!hasSession) this.router.navigateByUrl('/login')
    return hasSession
  }
}
