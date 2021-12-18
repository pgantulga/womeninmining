import { ArticleService } from 'src/app/core/services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  articlesIds: any[];
  articles: any[] = [];
  headerContent: any;
  sectionHeader: any;
  constructor(private articleService: ArticleService) {
    this.headerContent = {
      title: 'Бид хэн бэ',
      style: 'accent',
      image: '/assets/images/story_nobg.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque felis, in posuere ut quis pharetra.'
    }
    this.sectionHeader = {
      title: 'Бүтээгдэхүүн',
      desc: null,
      // button: {
      //   label: 'Дэлгэрэнгүй',
      //   link: '/articles',
      //   style: 'icon'
      // }
    }
  }

  ngOnInit(): void {
    this.articlesIds = ['8u5rwFIWddZ2mV5OgxYG', 'O8w00tDOpl2kBSfVxOoB', '6NcogfFcNNyAz4IPNbcV'];
    this.getArticlesByArray(this.articlesIds);
  }

  getArticlesByArray(array: Array<string>) {
    array.forEach(item => {
      this.articles.push(this.articleService.getArticle(item));
    })
  }
  //8u5rwFIWddZ2mV5OgxYG - about us
}
