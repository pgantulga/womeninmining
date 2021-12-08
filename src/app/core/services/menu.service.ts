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
  public footerMenu: Menu[] = [
    {
      name: 'Холбоос 1',
      link: ''
    },
    {
      name: 'Холбоос 2',
      link: ''
    },
    {
      name: 'Холбоос 3',
      link: ''
    },
    {
      name: 'Холбоос 4',
      link: ''
    },
    {
      name: 'Холбоос 5',
      link: ''
    },
  ]
}
