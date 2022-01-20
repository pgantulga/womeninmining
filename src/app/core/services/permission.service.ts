import { Injectable } from '@angular/core';
import { User } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor() { }
  private checkAuth = (user: User, allowedRoles: string[]): boolean => {
    if (!user) {
      return false;
    }
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true;
      }
    }
  }
  // possible roles: 'guest', 'subscriber', 'member', 'moderator', 'admin'
  canCreate(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuth(user, allowed);
  }

  canEdit(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuth(user, allowed);
  }

  canDelete(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuth(user, allowed);
  }
}
