import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'title-wrapper',
  templateUrl: './title-wrapper.component.html',
  styleUrls: ['./title-wrapper.component.scss']
})
export class TitleWrapperComponent implements OnInit {
  @Input() content: any;
  isPrimary: boolean;
  isAccent: boolean;
  isRed: boolean;
  wrapperImageUrl: string;
  constructor() { }

  ngOnInit(): void {
    this.selectStyle(this.content.style);

  }
  selectStyle(style): void {
    this.isPrimary = (style === 'primary');
    this.isAccent = (style === 'accent');
    this.isRed = (style === 'red');
  }

}
