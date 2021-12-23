import { DomSanitizer } from '@angular/platform-browser';
import { first, switchMap } from 'rxjs/operators';
import { StoryService } from './../../../core/services/story.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/app/core/services/story.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss'],
})
export class StoryDetailComponent implements OnInit {
  story$: Observable<Story>;
  htmlContent: any;
  description: any;

  constructor(
    private router: Router,
    private storyService: StoryService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.story$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.storyService.getStory(params.get('id'));
      })
    );
    this.story$.pipe(first()).subscribe((story) => {
      this.description = this.createElementFromHTML(story.content);
      console.log(this.description);
    });
  }

  goto() {
    return this.router.navigateByUrl('/stories');
  }

  getHtml(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  createElementFromHTML(htmlString) {
    let div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.getElementsByTagName('p')[0].innerHTML;
  }
}
