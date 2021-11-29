import { User, AuthService } from './../../../core/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {
  @Input() user: User;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  signout(): Promise<any> {
    return this.authService.signOut();
  }
}
