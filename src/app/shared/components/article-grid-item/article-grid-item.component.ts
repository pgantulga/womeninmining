import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import {
  Author,
  Type,
  ArticleService,
} from 'src/app/core/services/article.service';
import { Router } from '@angular/router';

export interface GridContent {
  title: string;
  content: any;
  author: Author;
  image: any;
  createdAt: Date;
  type: Type;
}

@Component({
  selector: 'article-grid-item',
  templateUrl: './article-grid-item.component.html',
  styleUrls: ['./article-grid-item.component.scss'],
})
export class ArticleGridItemComponent implements OnInit {
  @Input() content: GridContent;
  tag: any;
  image: string;
  htmlContent: any;
  description: any;
  constructor(
    private sanitzier: DomSanitizer,
    private router: Router,
    private articleService: ArticleService
  ) {}
  ngOnInit(): void {
    this.htmlContent = this.sanitzier.bypassSecurityTrustHtml(
      this.content.content
    );
    this.description  = this.createElementFromHTML(this.content.content);
    this.tag = this.articleService.getTag(this.content);
    this.image = this.content.image
      ? this.content.image
      : '../../../../assets/images/image.jpg';
  }

  gotoArticle(article) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      return this.router.navigate(['/articles', article.id]);
    });
  }
  createElementFromHTML(htmlString) {
    let div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.getElementsByTagName('p')[0].innerHTML;
  }
}
