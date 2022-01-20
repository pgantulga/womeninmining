import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot) {
    const roles = route.data.roles;
    return this.authService.user$.pipe(
      take(1),
      map(user => {
        if (user) {
          for (const role of roles) {
            if(user.roles[role]) {
              return true
            }
          }
        }

      }),
      tap(access => {
        if(!access) {
          console.log('Access denied');
          this.router.navigate(['/']);

        }
      })
    )
  }
}
