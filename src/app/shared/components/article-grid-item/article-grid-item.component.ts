import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { Author, Type } from 'src/app/core/services/article.service';
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
  styleUrls: ['./article-grid-item.component.scss']
})
export class ArticleGridItemComponent implements OnInit {
  @Input() content: GridContent;
  tag: any;
  image: string;
  htmlContent: any;
  constructor(private sanitzier: DomSanitizer, private router: Router) {
  }
  ngOnInit(): void {
    this.htmlContent = this.sanitzier.bypassSecurityTrustHtml(this.content.content)
        this.tag = this.getTag(this.content);
        this.image = (this.content.image) ? this.content.image : '../../../../assets/images/image.jpg';
  }

  getTag(content) {
    if(!content.type) {
      return {label: 'Нийтлэл', link: 'google.com', style: {red: false, primary: true, accent: false}}
    }
    if(content.type.blog) {
      return {label: 'Нийтлэл', link: 'google.com', style: {red: false, primary: true, accent: false}}
    }

    if(content.type.story) {
      return {label: 'Түүх', link: 'google.com', style: {red: false, primary: false, accent: true}}
    }
    if(content.type.news) {
      return {label: 'Мэдээ', link: 'google.com', style: {red: true, primary: false, accent: false}}
    }
  }
  gotoArticle(article) {
    console.log(article);
    this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(() => {
      return this.router.navigate(['/articles', article.id]);
    })
  }

}
