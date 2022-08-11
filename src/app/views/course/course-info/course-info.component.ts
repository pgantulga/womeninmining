import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';
import { HeaderContent } from 'src/app/shared/components/title-wrapper/title-wrapper.component';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent implements OnInit {
  headerContent: HeaderContent;
  articleIds: any[] = [];
  articles: any[] = [];
  constructor(private articleService: ArticleService, private router: Router) {
    this.headerContent = {
      title: 'Хүний эрх, жендэрийн цахим сургалт',
      style: 'orange',
      image: '/assets/images/assets/gender_card.png',
      button: {
        label: 'Бүртгүүлэх',
        link:'https://mooc.num.edu.mn/courses/course-v1:EBEX+EBEX001+2022_Spring/course/'
      },
      description:
        'Мэдлэгийн цахим шилжилт буюу Эрдэс баялгийн салбарын хүний эрх, Жендэрийн цахим сургалтын тани',
    };

  }

  ngOnInit(): void {
    this.articleIds = [
      'ltXFJFLT47pKvLPAgTPP',
      'FewNhmeWxHYPgn3oDLXI',
      '8dZivGCasYfy6Ajg28Zp'
     ];
    this.getArticlesByArray(this.articleIds);
  }
  getArticlesByArray(array: Array<any>) {
    array.forEach((item) => {
      this.articles.push(this.articleService.getArticle(item));
    });
  }
}
