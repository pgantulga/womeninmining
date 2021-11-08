import { Component, OnInit } from '@angular/core';

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
  // topMenus: Menu[];

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

}
