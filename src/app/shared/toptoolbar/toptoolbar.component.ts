import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

export interface Menu {
  name: string;
  link: string;
}



@Component({
  selector: 'app-toptoolbar',
  templateUrl: './toptoolbar.component.html',
  styleUrls: ['./toptoolbar.component.scss']
})
export class ToptoolbarComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }
  // topMenus: Menu[];
  activeLink: any;

  constructor() { }
  topMenus = [
    {
      name: 'Чуулган',
    },
    {
      name: 'Бид хэн бэ',
    },
    {
      name: 'Тэр эмэгтэйн түүх',
    },
    {
      name: 'Хүний эрх жендэр',
    },
    {
      name: 'Хүний хөгжил',
    },

  ];
  ngOnInit(): void {
  }
  expand(link): void {
    this.activeLink = link;
    console.log(link)
  }
  closeMyMenu() {
    this.trigger.closeMenu();
  }  
}
