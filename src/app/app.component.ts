import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'womeninmining';
  loading: boolean = false;
  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loading = false;
      }
    });
  }
  ngOnInit():void {

  }
  onActivate(event) {
    this.gotop();
   }
   gotop() {
      // tslint:disable-next-line: no-shadowed-variable
      const element = document.getElementsByName('top-anchor');
      element[0].scrollIntoView({behavior: 'smooth'});
   }
}
