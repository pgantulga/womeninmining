import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

export interface WrapperContent {
  subtitle: string;
  title: string;
  actionButton_1: {
    link: string;
    label: string;
  };
  actionButton_2: {
    link: string;
    label: string;
  };
  description: string;
  imageUrl: string;
  imageUrl_small: string;
  style: string;
  type: string;
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'wrapper-hero',
  templateUrl: './wrapper-hero.component.html',
  styleUrls: ['./wrapper-hero.component.scss']
})
export class WrapperHeroComponent implements OnInit {
  @Input() content: WrapperContent;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  wrapperImageUrl: string;
  isPrimary: boolean;
  isAccent: boolean;
  isRed: boolean;
  constructor(
    private breakpointObserver: BreakpointObserver,

  ) { }

  ngOnInit(): void {
    this.selectStyle(this.content.style);
    this.isHandset$.subscribe((b: boolean) => {
      this.wrapperImageUrl = (b || this.content.type === 'card') ? this.content.imageUrl_small : this.content.imageUrl;
    });
  }

  selectStyle(style): void {
    this.isPrimary = (style === 'primary');
    this.isAccent = (style === 'accent');
    this.isRed = (style === 'red');
  }

}
