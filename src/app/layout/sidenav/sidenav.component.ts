import { MenuService } from 'src/app/core/services/menu.service';
import { RouteService } from './../../core/services/route.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() current: string;
  sideMenu: any[];
  adminMenu: any[];
  constructor(
    public routeService: RouteService,
    private menuService: MenuService
  ) {


  }

  ngOnInit(): void {
    this.sideMenu =
      this.current === 'admin'
        ? this.menuService.adminMenu
        : this.menuService.topMenu;
  }
}
