import { Injectable } from '@angular/core';

export interface Menu {
  name: string;
  link: string;
}
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}
  public topMenu: any = [
    {
      label: 'Бид хэн бэ',
      id: 1,
      children: [
        {
          parent: 1,
          label: 'Бид хэн бэ',
          label2: 'Бидний зорилго, дэмжигчид',
          icon: '',
          link: '/home/about'
        },
        // {
        //   parent: 1,
        //   label: 'Лого бүхий бүтээгдэхүүн',
        //   label2: 'Цамц, малга',
        //   icon: '',
        // },
        {
          parent: 1,
          label: 'Зөвлөл',
          label2: 'Зөвлөх зөвлөл, гүйцэтгэх зөвлөл',
          link: '/home/board'
        }
      ],
    },
    {
      label: 'Шинэ',
      id: 2,
      children: [
        {
          parent: 2,
          label: 'Мэдээ, мэдээлэл',
          label2: 'Шинэ мэдээ мэдээлэл',
          icon: '',
          link: '/articles',
          queryParam:  {
            type: 'news'
          }
        },
        {
          parent: 2,
          label: 'Нийтлэл',
          label2: 'Нийтлэл судалгааны ажлууд',
          icon: '',
          link: '/articles',
          queryParam:  {
            type: 'blog'
          }
        },
        {
          parent: 2,
          label: 'Онцлох түүхүүд',
          label2: 'Жишиг өөрчилсөн түүхүүд',
          icon: '',
          link: '/articles',
          queryParam:  {
            type: 'story'
          }
        }
      ],
    },
    {
      label: 'Чуулган',
      id: 3,
      children: [
        {
          parent: 3,
          label: 'Чуулганы тухай',
          label2: 'Танилцуулга бүртгэл',
          icon: '',
          link: '/conference'
        },
        {
          parent: 3,
          label: '2021 он',
          label2: 'Цахим чуулган',
          icon: '',
          link: '/conference'
        },
        {
          parent: 3,
          label: '2019 он',
          label2: 'Төрийн ордон',
          icon: '',
          link: '/conference'
        },
        {
          parent: 3,
          label: '2018',
          label2: 'Эрдэнэт хот',
          icon: '',
          link: '/conference'
        },
      ],
    },
    {
      label: 'Тэр эмэгтэйн түүх',
      id: 4,
      children: [
        {
          parent: 4,
          label: 'Гайхамшигт 50',
          label2: 'Жишиг өөрчилсөн түүхүүд',
          icon: '',
          link: '/stories'
        },
        {
          parent: 4,
          label: 'Түүх бүтсэн түүх',
          label2: 'Номын нээлт',
          icon: '',
          link: '/opening'

        },
        {
          parent: 4,
          label: 'Өөрийн түүхээ үлдээе',
          label2: 'Түүх үргэлжилсээр',
          icon: '',
          link: '/herstory',
        },
        {
          label: 'Номын худалдаа',
          label2: 'Жишиг өөрчилсөн түүх ном',
          icon: '',
          link: '/null'
        },
      ],
    },
    {
      label: 'Хүний эрх жендер',
      id: 5,
      children: [
        {
          label: 'Танилцуулга',
          parent: 5,
          label2: 'Сургалтын танилцуулга',
          icon: '',
          link: '/null',

        },
        {
          label: 'Хөтөлбөр',
          parent: 5,
          label2: 'Сургалтын модулиуд',
          icon: '',
          link: '/null',

        },
        {
          label: 'Бүртгүүлэх',
          parent: 5,
          label2: 'Цахим сургалтад бүртгүүлэх',
          icon: '',
          link: '/null',

        },
        {
          label: 'Үнэлгээ ',
          parent: 5,
          label2: 'Сургалтад хамрагдсан байгууллагууд',
          icon: '',
          link: '/null',

        },
      ],
    },
    {
      label: 'Хүний хөгжил',
      id: 6,
      children: [
        {
          label: 'Сургалтууд',
          parent: 6,
          label2: 'Сургалтын танилцуулга',
          icon: '',
          link: '/null',

        },
        {
          label: 'Компаний сайн туршлага',
          parent: 6,
          label2: 'Сайн туршлагын талбар',
          icon: '',
          link: '/null',

        },
        {
          label: 'Сайн туршлага хуваалцах',
          label2: 'Сайн туршлага хуваалцах',
          parent: 6,
          icon: '',
          link: '/null',

        },
        {
          label: 'Сургалт хөгжлийн аялал',
          parent: 6,
          label2: 'М-карт худалдан авах',
          icon: '',
          link: '/null',

        },
      ],
    },
  ];
  public adminMenu: any[] = [
    {
      label: 'Articles',
      link: '/admin/articles',
    },
    {
      label: 'Menu',
      link: '/admin/articles',
    },
    {
      label: 'Stories',
      link: '/admin/stories',
    },

  ];
}
