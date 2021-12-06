import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/core/services/article.service';

@Component({
  selector: 'article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  @Input() article: Article
  htmlContent: any;
  constructor(private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.article.content);
  }
}
