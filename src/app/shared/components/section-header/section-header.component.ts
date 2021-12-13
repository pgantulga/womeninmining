import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface SectionHeaderContent {
  title: string;
  desc: string;
  button?: {
    label: string;
    link: string;
    style: string;
  };
}
@Component({
  selector: 'section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class SectionHeaderComponent implements OnInit {
  @Input() content: SectionHeaderContent;
  constructor(private router: Router) {
  }

  ngOnInit(): void {}
  goto(link) {
    this.router.navigateByUrl(link);
  }
}
