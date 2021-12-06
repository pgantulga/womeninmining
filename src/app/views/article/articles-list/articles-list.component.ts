import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  articles$: Observable<any>;
  constructor(private articleService: ArticleService) {

   }

  ngOnInit(): void {
    this.articles$ = this.articleService.getAllArticles();
  }

}
