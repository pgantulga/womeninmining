import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { Type, ArticleService } from 'src/app/core/services/article.service';
import { Router } from '@angular/router';

export interface ListItemContent {
  title: string;
  content: any;
  createdAt: Date;
  type: Type;
}

@Component({
  selector: 'article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.scss'],
})
export class ArticleListItemComponent implements OnInit {
  @Input() content: ListItemContent;
  tag: any;
  htmlContent: any;
  constructor( private sanitizter: DomSanitizer, private router: Router, private articleService: ArticleService) {}

  ngOnInit(): void {
    this.htmlContent = this.sanitizter.bypassSecurityTrustHtml(this.content.content);
    this.tag = this.articleService.getTag(this.content);

  }

}
