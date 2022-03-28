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
        'Эрдэс баялгийн салбарт монгол эмэгтэй хүн өөртөө итгэлтэй, бусдаас хамааралгүйгээр өөрийн ур чадвараараа мөрөөдөлдөө хүрэх боломжийг бүрдүүлэхийн төлөө',
      actionButton_1: {
        label: 'Видео тоглуулах',
        link: '',
      },
      actionButton_2: {
        label: 'Бидний тухай',
        link: '/home/about',
      },
      imageUrl: '../../../../assets/images/hero_wide.webp',
      imageUrl_small: '../../../../assets/images/hero_image.webp',
      style: 'background',
      type: 'hero',
    };
  }
  getAccountWrapper() {
    return {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque felis, in posuere ut quis pharetra.',
      actionButton_1: {
        label: 'Түүхээ хуваалцая',
        link: '',
      },
      actionButton_2: {
        label: 'Тохиргоо',
        link: '/auth/profile-settings',
      },
      imageUrl: '../../../assets/images/story_nobg.png',
      style: 'accent',
    };
  }
  getAllCardContents(): WrapperContent[] {
    return [
      {
        subtitle: '',
        title: 'Үндэсний чуулган',
        description:
          'Эрдэс баялгийн салбарын эмэгтэйчүүдийн үндэсний чуулганыг жил бүр уламжлал болгон зохион байгуулдаг.',
        actionButton_1: {
          label: 'Дэлгэрэнгүй',
          link: '/conferences',
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
          link: '/gender',
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
          'Эрдэс баялгийн салбарын эмэгтэйчийн төлөөлөл болсон 50 эмэгтэйн Гайхамшигт 50- Жишиг өөрчилсөн түүх',
        actionButton_1: {
          label: 'Дэлгэрэнгүй',
          link: '/stories',
        },
        actionButton_2: {
          label: 'Танилцуулга',
          link: '',
        },
        imageUrl: '../../../assets/images/story_nobg.png',
        imageUrl_small: '.../../../assets/images/story_nobg.png',
        style: 'accent',
        type: 'card',
      },
    ];
  }
}
