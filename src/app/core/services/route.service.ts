import { map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

export interface Layout {
  layout1: boolean;
  layout2: boolean;
  layout3: boolean;
  layout4: boolean;
}
// export interface MenuLabel{
//   label: string;
//   link: string;
// }
export interface Route {
  name: string;
  link: string;
  label: string;
}
@Injectable({
  providedIn: 'root',
})
export class RouteService {
  currentRoute$: Observable<any>;
  private sidenav: MatSidenav;

  constructor() {}
  public toggle(): void {
    this.sidenav.toggle();
  }
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }
  setCurrentRoute(route) {
    this.currentRoute$ = route;
  }

  getCurrentRoute(url): any {
    this.getRoute(url);
    if (url === 'home' || url === '/') {
      return { route: 'home', labels: this.getRoute(url) };
    }
    if (url.includes('home') && url.includes('about')) {
      return { route: 'about', labels: this.getRoute(url) };
    }
    if (url.includes('login')) {
      return 'login';
    }
    if (url.includes('profile-settings')) {
      return 'profile-settings';
    }
    if (url.includes('admin')) {
      return 'admin';
    }
    if (url.includes('articles')) {
      return 'articles';
    }
  }
  getRoute(url): any {
    const urlArray = url.split('/');
    urlArray.splice(0, 1);
    console.log(urlArray);
  }

  getRouteMenu(route): any {
    switch (route) {
      case 'home':
        return null;
      case 'login':
        return null;
      case 'articles':
        return [
          { name: 'Нүүр хуудас', link: 'home' },
          { name: 'Бичвэрүүд', link: 'articles' },
        ];
      case 'about':
        return [
          { name: 'Нүүр хуудас', link: 'home' },
          { name: 'Бидний тухай', link: 'about' },
        ];
    }
  }

  // Default pages layout-1, story page: layout-2, login page: layout-3, admin page: layout-4
  getLayout(route?): any {
    if (!route) {
      return {
        layout1: true,
        layout2: false,
        layout3: false,
        layout4: false,
      };
    }
    if (route === 'story-detail') {
      return {
        layout1: false,
        layout2: true,
        layout3: false,
        layout4: false,
      };
    } else if (route === 'admin') {
      return {
        layout1: false,
        layout2: false,
        layout3: false,
        layout4: true,
      };
    } else if (route === 'auth' || route === 'not-found') {
      return {
        layout1: false,
        layout2: false,
        layout3: true,
        layout4: false,
      };
    } else {
      return {
        layout1: true,
        layout2: false,
        layout3: false,
        layout4: false,
      };
    }
  }
  layoutChanger(current$): any {
    return current$.pipe(
      map((route: any) => {
        console.log(route.name);
        return this.getLayout(route.name);
      })
    );
  }
}
