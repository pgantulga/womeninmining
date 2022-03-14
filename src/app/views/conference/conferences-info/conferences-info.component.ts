import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/core/services/article.service';
import { HeaderContent } from 'src/app/shared/components/title-wrapper/title-wrapper.component';

@Component({
  selector: 'app-conferences-info',
  templateUrl: './conferences-info.component.html',
  styleUrls: ['./conferences-info.component.scss']
})
export class ConferencesInfoComponent implements OnInit {
  headerContent: HeaderContent;
  articleIds: any [] = [];
  articles: any[] = [];

  constructor(private articleService: ArticleService, private router: Router) {
    this.headerContent = {
      title: 'Эрдэс баялаг Эмэгтэйчүүд чуулган',
      style: 'accent',
      image: '/assets/images/story_nobg.png',
      description: 'Эрдэс баялгийн салбарын эмэгтэйчүүдийн үндэсний чуулганыг жил бүр уламжлал болгон зохион байгуулдаг.'
    }
    this.articleIds = [
      {
        id: 'xRtK5qklJUq7sa8XjeqV',
        year: 2021
      },
      {
        id: 'S3nlWDTM85WwpKVdl0Vi',
        year: 2019
      }
    ];
  }

  ngOnInit(): void {
    this.getArticlesByArray(this.articleIds);
  }
  getArticlesByArray(array: Array<any>) {
    array.forEach(item => {
      this.articles.push({
        data$: this.articleService.getArticle(item.id),
        year: item.year
      });
    })
  }
  goto(year) {
    return this.router.navigate(['/conferences', year])
  }

}
