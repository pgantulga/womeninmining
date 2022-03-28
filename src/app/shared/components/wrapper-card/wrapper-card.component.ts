import { Router } from '@angular/router';
import { WrapperContent } from './../wrapper-hero/wrapper-hero.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'wrapper-card',
  templateUrl: './wrapper-card.component.html',
  styleUrls: ['./wrapper-card.component.scss']
})
export class WrapperCardComponent implements OnInit {
  @Input() content: WrapperContent;
  wrapperImageUrl: string;
  isPrimary: boolean;
  isAccent: boolean;
  isRed: boolean;
  constructor( private router: Router
  ) { }

  ngOnInit(): void {
    this.selectStyle(this.content.style);
    this.wrapperImageUrl = this.content.imageUrl_small;
  }

  selectStyle(style): void {
    this.isPrimary = (style === 'primary');
    this.isAccent = (style === 'accent');
    this.isRed = (style === 'red');
  }
  goto(link) {
    return this.router.navigateByUrl(link);
  }

}
