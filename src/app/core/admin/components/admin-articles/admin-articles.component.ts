import { Observable } from 'rxjs';
import { ArticleService, Article } from './../../../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss']
})
export class AdminArticlesComponent implements OnInit {
  articles$: Observable<Article[]>
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticleByTypes('static');
  }

}
