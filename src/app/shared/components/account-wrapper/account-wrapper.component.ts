import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'account-wrapper',
  templateUrl: './account-wrapper.component.html',
  styleUrls: ['./account-wrapper.component.scss']
})
export class AccountWrapperComponent implements OnInit {
  @Input() content: any;
  isPrimary = true;
  isAccent: boolean;
  isRed: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
