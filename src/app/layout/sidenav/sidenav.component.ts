import { MenuService } from 'src/app/core/services/menu.service';
import { RouteService } from './../../core/services/route.service';
import { Component, OnInit, Input } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
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
    private menuService: MenuService
  ) {


  }

  ngOnInit(): void {
    this.sideMenu =
      this.current === 'admin'
        ? this.menuService.adminMenu
        : this.menuService.topMenu;
  }
  toggle(item) {
    if(this.isSelected != item.id) {
      this.isSelected = item.id;
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }
}
