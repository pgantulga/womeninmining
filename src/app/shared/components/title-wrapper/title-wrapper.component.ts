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
  isAccent = true;
  isRed: boolean;
  wrapperImageUrl: string;
  constructor() { }

  ngOnInit(): void {
  }

}
