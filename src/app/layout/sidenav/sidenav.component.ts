import { Router } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu.service';
import { RouteService } from './../../core/services/route.service';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MatSidenav } from '@angular/material/sidenav';
interface FlatNode {
  expandable: boolean;
  label: string;
  level: number;
}
interface MenuNode {
  label: string;
  children?: MenuNode[];
}

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() current: string;
  @Output() closeSidebar = new EventEmitter();
  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      label: node.label,
      level: level,
    };
  };
  sideMenu: any[];
  adminMenu: any[];
  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  isOpen: boolean = false;
  isSelected: any;

  constructor(
    public routeService: RouteService,
    private menuService: MenuService,
    private router: Router,

  ) {


  }

  ngOnInit(): void {
    this.sideMenu =
      this.current === 'admin'
        ? this.menuService.adminMenu
        : this.menuService.topMenu;
  }
  toggle(item) {
    if (this.isSelected !== item.id) {
      this.isSelected = item.id;
      this.isOpen = true;
    } else {
      this.isOpen = false;
      this.isSelected = null;
    }
  }
  goto(subitem): Promise<any> {
    if (subitem.queryParam) {
      return this.router.navigate(
        [subitem.link],
        { queryParams: subitem.queryParam }
      ).then(() => {
        return this.closeSidebar.emit(subitem.link);
      });
    } else {
      return this.router.navigateByUrl(subitem.link)
      .then (() => {
        return this.closeSidebar.emit(subitem.link);
      });
    }
  }
}
