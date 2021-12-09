import { Injectable } from '@angular/core';
export interface Layout {
  layout1: boolean;
  layout2: boolean;
  layout3: boolean;
  layout4: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor() {}

  getCurrentRoute(url): any {
    if (url.includes('home') || url === '/') {
      return 'home';
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
  getRouteMenu(route): any {
    console.log(route);
    switch (route) {
      case 'home':
        return null;
      case 'login':
        return [{ name: 'Нэвтрэх', link: 'login' }];
      case 'articles':
        return [{ name: 'Нүүр хуудас', link: 'home' }, { name: 'Бичвэрүүд', link: 'articles' }];
    }
  }

  // Default pages layout-1, story page: layout-2, login page: layout-3, admin page: layout-4
  getLayout(route): Layout {
    if (
      route === 'post-detail' ||
      route === 'post-edit' ||
      route === 'settings' ||
      route === 'user-detail' ||
      route === 'article-view' ||
      route === 'moderator' ||
      route === 'tag-detail'
    ) {
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
    } else if (route === 'login' || route === 'not-found') {
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
}
