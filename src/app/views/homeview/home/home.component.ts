import { WrapperService } from './../../../core/services/wrapper.service';
import { ArticleService } from 'src/app/core/services/article.service';
import { Observable } from 'rxjs';
import { SectionHeaderContent } from './../../../shared/components/section-header/section-header.component';
import { WrapperContent } from './../../../shared/components/wrapper-hero/wrapper-hero.component';
import { Component, OnInit } from '@angular/core';
import { GridContent } from 'src/app/shared/components/article-grid-item/article-grid-item.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  heroContent: WrapperContent;
  cardContents: WrapperContent[];
  accountCard: WrapperContent;
  gridContent: GridContent;
  sectionHeader_1: SectionHeaderContent;
  sectionHeader_2: SectionHeaderContent;
  sectionHeader_3: SectionHeaderContent;
  articles$: Observable<any>;
  constructor(
    private articleService: ArticleService,
    private wrapperService: WrapperService
  ) {
    this.sectionHeader_1 = {
      title: 'Бид хэн бэ',
      desc: 'Эрдэс баялгийн салбарт монгол эмэгтэй хүн өөртөө итгэлтэй байдлаар ажиллах нөхцөлийг бүрдүүлж хэн нэгнээс хамааралгүйгээр өөрийн ур чадвараараа мөрөөдөлдөө хүрэх боломжийг бүрдүүлэх',
      button: {
        label: 'Дэлгэрэнгүй',
        style: 'primary',
        link: '/about',
      },
    };
    this.sectionHeader_2 = {
      title: 'Бичвэрүүд',
      desc: null,
      button: {
        label: 'Бүгдийг харах',
        style: 'icon',
        link: '/articles',
      },
    };
    this.sectionHeader_3 = {
      title: 'Онцлох түүхүүд',
      desc: null,
      button: {
        label: 'Дэлгэрэнгүй',
        link: '/articles',
        style: 'icon',
      },
    };
    this.heroContent = this.wrapperService.getHeroContent();
    this.cardContents = this.wrapperService.getAllCardContents();
    this.accountCard = {
      subtitle: 'Сайн байна уу,',
      title: 'Туяа',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque felis, in posuere ut quis pharetra.',
      actionButton_1: {
        label: 'Түүхээ хуваалцая',
        link: '',
      },
      actionButton_2: {
        label: 'Танилцуулга',
        link: '',
      },
      imageUrl: '../../../../assets/images/hero_image_conference_big.png',
      imageUrl_small:
        '../../../../assets/images/hero_image_conference_small.png',
      style: 'primary',
      type: 'hero',
    };
  }
  ngOnInit(): void {
    this.articles$ = this.articleService.getArticlesExclude('static', 10);
  }
}
