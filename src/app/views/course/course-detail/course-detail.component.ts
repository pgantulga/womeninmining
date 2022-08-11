import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';
import { HeaderContent } from 'src/app/shared/components/title-wrapper/title-wrapper.component';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  headerContent: HeaderContent;
  articleIds: any[] = [];
  articles: any[] = [];

  constructor(private articleService: ArticleService, private router: Router) {
    this.headerContent = {
      title: 'Хүний эрх, жендэрийн цахим сургалтыг хөтөлбөр',
      style: 'orange',
      image: '/assets/images/assets/gender_card.png',
      button: {
        label: 'Бүртгүүлэх',
        link:'https://mooc.num.edu.mn/courses/course-v1:EBEX+EBEX001+2022_Spring/course/'
      },
      description:
        'Мэдлэгийн цахим шилжилт буюу Эрдэс баялгийн салбарын хүний эрх, Жендэрийн цахим сургалтын хөтөлбөр',
    };
   }

  ngOnInit(): void {
    this.articleIds = [
      '5awALTexr853XYoGhOkQ'
     ];
    this.getArticlesByArray(this.articleIds);
  }
  getArticlesByArray(array: Array<any>) {
    array.forEach((item) => {
      this.articles.push(this.articleService.getArticle(item));
    });
  }

}
