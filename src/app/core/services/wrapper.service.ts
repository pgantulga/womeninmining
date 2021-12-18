import { WrapperContent } from './../../shared/components/wrapper-hero/wrapper-hero.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WrapperService {
  constructor() {}
  getHeroContent(): WrapperContent {
    return {
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
  }
  getAllCardContents(): WrapperContent[] {
    return [
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
        imageUrl_small: '../../../../assets/images/gender_card.webp',
        style: 'red',
        type: 'card',
      },
      {
        subtitle: '',
        title: 'Гайхамшигт түүхүүд',
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
        imageUrl_small: '../../../../assets/images/story_card.webp',
        style: 'accent',
        type: 'card',
      },
    ];
  }
}
