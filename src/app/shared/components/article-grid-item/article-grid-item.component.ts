import { ChipTag } from './../chip-tag/chip-tag.component';
import { Component, Input, OnInit } from '@angular/core';
import { Author, Type } from 'src/app/core/services/article.service';


export interface GridContent {
  title: string;
  description: any;
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
  constructor() {
    this.tag = this.getTag(this.content.type);
  }

  ngOnInit(): void {
  }

  getTag(type) {
    if(type.blog) {
      return {label: 'Нийтлэл', link: 'google.com', style: {red: false, primary: true, accent: false}}
    }

    if(type.story) {
      return {label: 'Түүх', link: 'google.com', style: {red: false, primary: false, accent: true}}
    }
    if(type.news) {
      return {label: 'Мэдээ', link: 'google.com', style: {red: true, primary: false, accent: false}}
    }
  }

}
