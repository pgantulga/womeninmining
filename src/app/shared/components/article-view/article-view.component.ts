import { AuthService } from './../../../core/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/core/services/article.service';
import { Router } from '@angular/router';
import { PermissionService } from 'src/app/core/services/permission.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss'],
})
export class ArticleViewComponent implements OnInit {
  @Input() article: Article;
  htmlContent: any;
  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    public auth: AuthService,
    public permission: PermissionService,
    private meta: Meta
  ) {}
  ngOnInit(): void {
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(
      this.article.content
    );
    this.meta.updateTag(
      {
        property: 'og:title', content: this.article.title
      }
    )

  }
  goto(link,id) {
    return this.router.navigate([link, id]);
  }
}
