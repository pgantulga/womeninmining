import { Router } from '@angular/router';
import { WrapperService } from './../../../core/services/wrapper.service';
import { ContentService } from './../../../core/services/content.service';
import { User } from './../../../core/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'account-wrapper',
  templateUrl: './account-wrapper.component.html',
  styleUrls: ['./account-wrapper.component.scss']
})
export class AccountWrapperComponent implements OnInit {
  @Input() user: User
  content: any;
  isPrimary: boolean;
  isAccent: boolean = true;
  isRed: boolean;

  constructor(private wrapperService: WrapperService, private router: Router) {
    this.content = this.wrapperService.getAccountWrapper()
   }

  ngOnInit(): void {
  }

  getGreetings(): any {
    const currentTime = new Date().getHours();
    if (currentTime < 6 ) {
      return 'Оройн мэнд!';
    } else if ( currentTime < 12 ) {
      return 'Өглөөний мэнд!';
    } else if (currentTime < 18) {
      return 'Өдрийн мэнд!';
    } else { return 'Оройн мэнд!'; }
  }
  goto(link) {
    return this.router.navigateByUrl(link);
  }

}
