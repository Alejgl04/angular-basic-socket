import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UserguardService implements CanActivate {

  constructor(
    public wsService: WebsocketService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if ( this.wsService.getUsername() ) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
