import { Injectable } from '@angular/core';

export interface Menu {
  name: string;
  link: string;
}
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  public adminMenu: Menu[] = [
    {
      name: 'Articles',
      link: '/admin/articles'
    },
    {
      name: 'Menu',
      link: '/admin/articles'
    }
  ];
}
