import { WrapperContent } from './../../../shared/components/wrapper-hero/wrapper-hero.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroContent: WrapperContent;
  cardContents: WrapperContent[];
  accountCard: WrapperContent;
  constructor() {
    this.heroContent = {
      subtitle: '',
      title: 'Эрдэс баялаг эмэгтэйчүүдийн чуулган',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque felis, in posuere ut quis pharetra.',
      actionButton_1: {
        label: 'Танилцуулга',
        link: ''
      },
      actionButton_2: {
        label: 'Танилцуулга',
        link: ''
      },
      imageUrl: '../../../../assets/images/hero_image_conference_big.png',
      imageUrl_small: '../../../../assets/images/hero_image_conference_small.png',
      style: 'primary',
      type: 'hero'
    };
    this.cardContents = [
      {
        subtitle: '',
        title: 'Жишиг өөрчилсөн түүх',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque felis, in posuere ut quis pharetra.',
        actionButton_1: {
          label: 'Түүхээ хуваалцах',
          link: ''
        },
        actionButton_2: {
          label: 'Танилцуулга',
          link: ''
        },
        imageUrl: '../../../../assets/images/hero_image_conference_big.png',
        imageUrl_small: '../../../../assets/images/hero_image_conference_small.png',
        style: 'accent',
        type: 'card'
      },
      {
        subtitle: '',
        title: 'Хүний эрх жендэрийн сургалт',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque felis, in posuere ut quis pharetra.',
        actionButton_1: {
          label: 'Дэлгэрэнгүй',
          link: ''
        },
        actionButton_2: {
          label: 'Танилцуулга',
          link: ''
        },
        imageUrl: '../../../../assets/images/hero_image_conference_big.png',
        imageUrl_small: '../../../../assets/images/hero_image_conference_small.png',
        style: 'red',
        type: 'card'
      },
    ];
    this.accountCard = {
      subtitle: 'Сайн байна уу,',
      title: 'Туяа',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque felis, in posuere ut quis pharetra.',
      actionButton_1: {
        label: 'Түүхээ хуваалцая',
        link: ''
      },
      actionButton_2: {
        label: 'Танилцуулга',
        link: ''
      },
      imageUrl: '../../../../assets/images/hero_image_conference_big.png',
      imageUrl_small: '../../../../assets/images/hero_image_conference_small.png',
      style: 'primary',
      type: 'hero'
    };
  }
    ngOnInit(): void {
    }
  }
