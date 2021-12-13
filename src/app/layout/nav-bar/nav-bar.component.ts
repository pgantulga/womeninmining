import { RouteService } from './../../core/services/route.service';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  activeLink: any;
  selectedParent: number;
  isMenuOpen = false;
  isMenu2Open = false;
  prevButtonTrigger;
  enteredButton = false;
  topMenus: Array<any>;
  constructor(
    private menu: MenuService,
    private router: Router,
    private ren: Renderer2,
    private routeService: RouteService
  ) {
  }
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;
  @ViewChild(MatButton) button: any;
  ngOnInit(): void {
    this.topMenus = this.menu.topMenu;
    // this.routeService.currentRoute$.subscribe(route => {
    //   console.log(route);
    // })

  }
  expand(link, menuTrigger): void {
    this.activeLink = link;
    // console.log('expand');
    setTimeout(() => {
      if (this.prevButtonTrigger && this.prevButtonTrigger !== menuTrigger) {
        // console.log(1);
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = menuTrigger;
        this.isMenuOpen = false;
        this.isMenu2Open = false;
        menuTrigger.openMenu();
      } else if (!this.isMenuOpen) {
        this.enteredButton = true;
        this.prevButtonTrigger = menuTrigger;
        menuTrigger.openMenu();
        // console.log(2);
      } else {
        this.enteredButton = true;
        this.prevButtonTrigger = menuTrigger;
        // console.log(3);
      }
    }, 100);
  }
  buttonLeave(trigger, button): void {
    // console.log('button leave');
    this.activeLink = null;
    setTimeout(() => {
      if (this.enteredButton && !this.isMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      }
      if (!this.isMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.enteredButton = false;
      }
    }, 100);
  }

  menuenter(): void {
    // console.log('menu enter 1');
    this.isMenuOpen = true;
    if (this.isMenu2Open) {
      this.isMenu2Open = false;
    }
  }
  menuLeave(trigger, button): void {
    setTimeout(() => {
      if (!this.isMenu2Open && !this.enteredButton) {
        this.isMenuOpen = false;
        trigger.closeMenu();
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.isMenuOpen = false;
      }
    }, 80)
    // console.log("menuLeave");
  }
  goto(subitem) {
    console.log(subitem);
    this.selectedParent = subitem.parent;
    return this.router.navigateByUrl(subitem.link);
  }
}
