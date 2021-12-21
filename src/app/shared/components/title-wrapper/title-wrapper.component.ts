import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

export interface HeaderContent {
  title: string;
  style: string;
  image: string;
  description?: string;
  button?: {
    label: string;
    link: string
  }
}

@Component({
  selector: 'title-wrapper',
  templateUrl: './title-wrapper.component.html',
  styleUrls: ['./title-wrapper.component.scss']
})
export class TitleWrapperComponent implements OnInit {
  @Input() content: HeaderContent;
  isPrimary: boolean;
  isAccent: boolean;
  isRed: boolean;
  wrapperImageUrl: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.selectStyle(this.content.style);

  }
  selectStyle(style): void {
    this.isPrimary = (style === 'primary');
    this.isAccent = (style === 'accent');
    this.isRed = (style === 'red');
  }
  goto(link) {
    this.router.navigateByUrl(link);
  }

}
