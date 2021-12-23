import { MenuService } from './../../core/services/menu.service';
import { RouteService, Layout } from './../../core/services/route.service';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
} from '@angular/router';
import { combineLatest, merge, Observable } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  currentRoute$: Observable<any>;
  routes$: Observable<any>;
  merged$: Observable<any>;
  routeMenu: any[];
  layout: Layout;
  currentLayout$: Observable<Layout>;
  sideMenu: any[];
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private routeService: RouteService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e: any) => {
        const array = [];
        this.routes$ = combineLatest(this.getRoutes(array, this.route));
        this.routeService.setCurrentRoute(this.currentRoute$);
        this.currentLayout$ = this.routeService.layoutChanger(this.currentRoute$);
      });
  }
  getRoutes(array, activatedRoute: ActivatedRoute): Observable<any>[] {
    if (activatedRoute.firstChild) {
      array.push(activatedRoute.firstChild.data);
      array.push(activatedRoute.firstChild.url);
      return this.getRoutes(array, activatedRoute.firstChild);
    } else {
      this.currentRoute$ = activatedRoute.data;
      return array;
    }
  }
  goto(route) {
    console.log(route[0].path);
    return this.router.navigateByUrl('/'+ route[0].path);
  }
  showRouteMenu(layout, currentRoute):boolean {
    return layout.layout1 && currentRoute.name !== 'home';
  }
  openSidenav() {
    return this.routeService.toggle()
  }
}
