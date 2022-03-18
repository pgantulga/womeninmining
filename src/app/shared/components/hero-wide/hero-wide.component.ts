import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { WrapperContent } from '../wrapper-hero/wrapper-hero.component';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';


@Component({
  selector: 'hero-wide',
  templateUrl: './hero-wide.component.html',
  styleUrls: ['./hero-wide.component.scss']
})
export class HeroWideComponent implements OnInit {
  @Input() content: WrapperContent;
  wrapperImageUrl: string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isHandset$.subscribe((b: boolean) => {
      this.wrapperImageUrl = (b || this.content.type === 'card') ? this.content.imageUrl_small : this.content.imageUrl;
    });
  }
  goto(link){
    return this.router.navigateByUrl(link)
  }

}
