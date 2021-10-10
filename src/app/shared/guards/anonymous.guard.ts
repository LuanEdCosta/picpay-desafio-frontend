import { Injectable } from '@angular/core'

import { CanActivate, Router, UrlTree } from '@angular/router'

import { Observable } from 'rxjs'
import { SessionService } from '../services/session.service'

@Injectable({
  providedIn: 'root',
})
export class AnonymousGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const hasSession = this.sessionService.hasSession()
    if (hasSession) this.router.navigateByUrl('/')
    return !hasSession
  }
}
