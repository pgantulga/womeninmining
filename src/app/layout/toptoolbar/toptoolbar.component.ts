import { MenuList } from './../top-menus';
import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { MatButton } from '@angular/material/button';
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
  activeLink: any;
  isMenuOpen = false;
  isMenu2Open = false;
  prevButtonTrigger;
  enteredButton = false;
  topMenus: Array<any>;

  constructor() {
    this.topMenus = MenuList;
  }
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;
  @ViewChild(MatButton) button: any;


  ngOnInit(): void {
  }
  expand(link, menuTrigger): void {
    this.activeLink = link;
    console.log('expand');
    setTimeout(() => {
      if (this.prevButtonTrigger && this.prevButtonTrigger !== menuTrigger) {
        console.log(1);
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = menuTrigger;
        this.isMenuOpen = false;
        this.isMenu2Open = false;
        menuTrigger.openMenu();
      }
      else if (!this.isMenuOpen) {
        this.enteredButton = true;
        this.prevButtonTrigger = menuTrigger;
        menuTrigger.openMenu();
        console.log(2);
      }
      else {
        this.enteredButton = true;
        this.prevButtonTrigger = menuTrigger;
        console.log(3);
      }
    }, 100);
  }
  buttonLeave(trigger): void {
    console.log('button leave');
    this.activeLink = null;
    setTimeout(() => {
      if (this.enteredButton && !this.isMenuOpen) {
        trigger.closeMenu();
      }
      if (!this.isMenuOpen) {
        trigger.closeMenu();
      } else {
        this.enteredButton = false;
      }
    }, 100);
  }

  menuenter(): void {
    console.log('menu enter 1');
    this.isMenuOpen = true;
    if (this.isMenu2Open) {
      this.isMenu2Open = false;
    }
  }
  menu2enter(): void {
    console.log('menu enter 2');
    this.isMenu2Open = true;
  }
}
