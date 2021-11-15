import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor() { }

  getCurrentRoute(url) {
    if(url.includes('home') || url ==='/') {
      return 'home'
    }
  }
  getRouteMenu(route) {
    switch (route) {
      case 'home':
          return [
              { name: 'Нүүр хуудас', link: 'home' },
          ];
  }
  }
}
