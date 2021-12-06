import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Article, ArticleService } from './../../../core/services/article.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article$ : Observable<Article>;
  constructor(private articleService: ArticleService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.article$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.articleService.getArticle(params.get("id"));
      })
    )
  }

}
