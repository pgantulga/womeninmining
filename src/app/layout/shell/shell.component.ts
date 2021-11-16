import { RouteService } from './../../core/services/route.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  currentRoute: string;
  routeMenu: any[];
  constructor(
    private router: Router,
    private routeService: RouteService
  ) {

  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.currentRoute = this.routeService.getCurrentRoute(e.url);
        this.routeMenu = this.routeService.getRouteMenu(this.currentRoute);
      });

  }

  getRouteMenu(route): any {
    return this.routeService.getRouteMenu(route)
  }

}
