import { ContentService } from './../../core/services/content.service';
import { Menu, MenuService } from './../../core/services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  links: Menu[];
  contacts: any[];
  constructor(private menu: MenuService, private content: ContentService) {
    this.links = menu.topMenu;
    this.contacts = content.contacts;
   }

  ngOnInit(): void {

  }

}
