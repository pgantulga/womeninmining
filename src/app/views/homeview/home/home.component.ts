import { SectionHeaderContent } from './../../../shared/components/section-header/section-header.component';
import { WrapperContent } from './../../../shared/components/wrapper-hero/wrapper-hero.component';
import { Component, OnInit } from '@angular/core';
import { GridContent } from 'src/app/shared/components/article-grid-item/article-grid-item.component';

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
  constructor() {
    this.sectionHeader_1 = {
      title: 'Бид хэн бэ',
      desc: 'Эрдэс баялгийн салбарт монгол эмэгтэй хүн өөртөө итгэлтэй байдлаар ажиллах нөхцөлийг бүрдүүлж хэн нэгнээс хамааралгүйгээр өөрийн ур чадвараараа мөрөөдөлдөө хүрэх боломжийг бүрдүүлэх',
      button: {
        label: 'Дэлгэрэнгүй',
        style: 'primary',
        link: ''
      }
    };
    this.sectionHeader_2 = {
      title: 'Бичвэрүүд',
      desc: null,
      button: {
        label: 'Бүгдийг харах',
        style: 'icon',
        link: ''
      }
    };
    this.sectionHeader_3 = {
      title: 'Онцлох түүхүүд',
      desc: null,
      button: {
        label: 'Дэлгэрэнгүй',
        link: '',
        style: 'icon'
      }
    };
    this.gridContent = {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque felis, in posuere ut quis pharetra.',
      image: '../../../../assets/images/image.jpg',
      author: {
        uid: 'adlkjfaldfs',
        displayName: 'Tulgaa',
      },
      createdAt: new Date(),
      type: {
        news: true,
        blog: false,
        story: false,
        static: false,
      },
    };
    this.heroContent = {
      subtitle: '',
      title: 'Эрдэс баялаг эмэгтэйчүүдийн холбоо',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque felis, in posuere ut quis pharetra.',
      actionButton_1: {
        label: 'Видео тоглуулах',
        link: '',
      },
      actionButton_2: {
        label: 'Танилцуулга татах',
        link: '',
      },
      imageUrl: '../../../../assets/images/hero_image.webp',
      imageUrl_small: '../../../../assets/images/hero_image.webp',
      style: 'background',
      type: 'hero',
    };
    this.cardContents = [
      {
        subtitle: '',
        title: 'Жишиг өөрчилсөн түүх',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque felis, in posuere ut quis pharetra.',
        actionButton_1: {
          label: 'Түүхээ хуваалцах',
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
        type: 'card',
      },
      {
        subtitle: '',
        title: 'Хүний эрх жендэрийн сургалт',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque felis, in posuere ut quis pharetra.',
        actionButton_1: {
          label: 'Дэлгэрэнгүй',
          link: '',
        },
        actionButton_2: {
          label: 'Танилцуулга',
          link: '',
        },
        imageUrl: '../../../../assets/images/gender_card.webp',
        imageUrl_small:
          '../../../../assets/images/gender_card.webp',
        style: 'red',
        type: 'card',
      },
      {
        subtitle: '',
        title: 'Гайхалтай түүхүүд',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque felis, in posuere ut quis pharetra.',
        actionButton_1: {
          label: 'Дэлгэрэнгүй',
          link: '',
        },
        actionButton_2: {
          label: 'Танилцуулга',
          link: '',
        },
        imageUrl: '../../../../assets/images/story_card.webp',
        imageUrl_small:
          '../../../../assets/images/story_card.webp',
        style: 'accent',
        type: 'card',
      }
    ];
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
  ngOnInit(): void {}
}
