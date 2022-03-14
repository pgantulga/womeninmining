import { ContentService } from './../../../core/services/content.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-conference-detail',
  templateUrl: './conference-detail.component.html',
  styleUrls: ['./conference-detail.component.scss'],
})
export class ConferenceDetailComponent implements OnInit, OnDestroy {
  conferenceDetail$ : Observable<any>;
  articles: any[] = [];
  subscription: Subscription
  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.conferenceDetail$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.contentService.getConferenceDetail(params.get('id'));
      })
    );
    this.subscription = this.conferenceDetail$.subscribe(data => {
      this.articles.push(this.articleService.getArticle(data.articleId))
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
