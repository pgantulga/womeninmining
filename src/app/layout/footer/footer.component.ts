import { Menu, MenuService } from './../../core/services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  links: Menu[];
  constructor(private menu: MenuService) {
    this.links = menu.topMenu;
   }

  ngOnInit(): void {

  }

}
