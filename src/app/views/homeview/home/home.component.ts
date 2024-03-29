import { StoryService } from './../../../core/services/story.service';
import { AuthService } from './../../../core/services/auth.service';
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
  cardContents: WrapperContent[];
  accountCard: WrapperContent;
  gridContent: GridContent;
  sectionHeader_1: SectionHeaderContent;
  sectionHeader_2: SectionHeaderContent;
  sectionHeader_3: SectionHeaderContent;
  articles$: Observable<any>;
  stories$: Observable<any>;
  constructor(
    private articleService: ArticleService,
    private wrapperService: WrapperService,
    public authService: AuthService,
    private storyService: StoryService
  ) {
    this.sectionHeader_1 = {
      title: 'Бид хэн бэ',
      description: 'Хөгжлийн 100 жилд хайгуулаас нөхөн сэргээлт хүртэлх олборлох салбар, геологи, газрын тос, хүнд үйлдвэрт 15 хувьд нь эмэгтэйчүүд ажиллаж байна.',
      // button: {
      //   label: 'Дэлгэрэнгүй',
      //   style: 'primary',
      //   link: '/about',
      // },

    };
    this.sectionHeader_2 = {
      title: 'Бичвэрүүд',
      description: null,
      button: {
        label: 'Бүгдийг харах',
        style: 'icon',
        link: '/articles',
      },
    };
    this.sectionHeader_3 = {
      title: 'Онцлох түүхүүд',
      description: null,
      button: {
        label: 'Дэлгэрэнгүй',
        link: '/stories',
        style: 'icon',
      },
    };
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
    this.articles$ = this.articleService.getArticlesExclude('static', 3);
    this.stories$ = this.storyService.getHighlightedStories();
  }
}
