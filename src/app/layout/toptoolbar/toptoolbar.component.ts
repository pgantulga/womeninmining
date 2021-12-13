import { Router } from '@angular/router';
import { MenuService } from './../../core/services/menu.service';
import { ActionDialogComponent } from './../../shared/components/action-dialog/action-dialog.component';
import { AuthService } from './../../core/services/auth.service';
import { MenuList } from './../top-menus';
import { Component, OnInit, ViewChild, Renderer2, NgZone } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatMenuTrigger } from '@angular/material/menu';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { MatDialog } from '@angular/material/dialog';

export interface Menu {
  name: string;
  link: string;
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'toptoolbar',
  templateUrl: './toptoolbar.component.html',
  styleUrls: ['./toptoolbar.component.scss'],
})
export class ToptoolbarComponent implements OnInit {
  isOnTop = true;
  hideToolbar: boolean;
  preScrollPos: number;

  constructor(
    public scrollDispatcher: ScrollDispatcher,
    public authService: AuthService,
    public dialog: MatDialog
  ) {}
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;
  @ViewChild(MatButton) button: any;

  ngOnInit(): void {
    // this.scrollDispatcher.scrolled().subscribe((event: CdkScrollable) => {
    //   // console.log(event);
    //   // this.scrollable(event);
    // });
  }

  //   scrollable(ev): void {
  //     // console.log(ev);
  //     const scroll = ev.measureScrollOffset('top');
  //     let newIsOnTop: boolean = this.isOnTop;
  //     newIsOnTop = !(scroll > 0);
  //     if (newIsOnTop !== this.isOnTop) {
  //         this.zone.run(() => {
  //             this.isOnTop = newIsOnTop;
  //         });
  //     }
  //     if (this.preScrollPos < scroll && this.preScrollPos > 0) {
  //         this.zone.run(() => {
  //             this.hideToolbar = true;
  //         });
  //     } else {
  //         this.zone.run(() => {
  //             this.hideToolbar = false;
  //         });
  //     }
  //     this.preScrollPos = scroll;
  // }

}
