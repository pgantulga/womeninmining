import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  articles$: Observable<any>;
  headerContent: any;
  constructor(private articleService: ArticleService) {
    this.headerContent = {
      title: 'Бичвэрүүд',
      style: 'primary',
      image: '/assets/images/story_nobg.png',
      description:
        'Сүүлийн үеийн мэдээ мэдээлэл, нийтлэл болон гайхамшигт түүхүүд ',
    };
  }

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticlesExclude('static', 12);
  }
}
