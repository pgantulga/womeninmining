import { Component, Input, OnInit } from '@angular/core';

export interface SectionHeaderContent {
  title: string;
  desc: string;
  button?: {
    label: string;
    link: string;
    style: string;
  }
}
@Component({
  selector: 'section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  @Input() content: SectionHeaderContent;
  constructor() {
    console.log(this.content);
   }

  ngOnInit(): void {
  }

}
