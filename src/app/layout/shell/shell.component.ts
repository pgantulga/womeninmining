import { MenuService } from './../../core/services/menu.service';
import { RouteService, Layout } from './../../core/services/route.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  currentRoute: string;
  routeMenu: any[];
  layout: Layout;
  sideMenu: any[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
        .pipe(
            map(result => result.matches),
            shareReplay()
        );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private routeService: RouteService,
    private menuService: MenuService
  ) {
    this.currentRoute = this.routeService.getCurrentRoute(this.router.url);
    this.layout = this.routeService.getLayout(this.currentRoute);

  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.currentRoute = this.routeService.getCurrentRoute(e.url);
        this.routeMenu = this.routeService.getRouteMenu(this.currentRoute);
        this.layout = this.routeService.getLayout(this.currentRoute);
        this.sideMenu = (this.currentRoute === 'admin') ? this.menuService.adminMenu: [1,2,3,3,4];
        console.log('Current route:', this.currentRoute);
        console.log('Current layout:', this.layout);
      });

  }

  getRouteMenu(route): any {
    return this.routeService.getRouteMenu(route)
  }

}
