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
          link: '/articles/news'
        },
        {
          parent: 2,
          label: 'Нийтлэл',
          label2: 'Нийтлэл судалгааны ажлууд',
          icon: '/articles/news',
        },
        {
          parent: 2,
          label: 'Онцлох түүхүүд',
          label2: 'Жишиг өөрчилсөн түүхүүд',
          link: '/articles/stories'
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
        },
        {
          parent: 3,
          label: '2021 он',
          label2: 'Цахим чуулган',
          icon: '',
        },
        {
          parent: 3,
          label: '2019 он',
          label2: 'Төрийн ордон',
          icon: '',
        },
        {
          parent: 3,
          label: '2018',
          label2: 'Эрдэнэт хот',
          icon: '',
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
        },
        {
          parent: 4,
          label: 'Өөрийн түүхээ үлдээе',
          label2: 'Түүх үргэлжилсээр',
          icon: '',
        },
        // {
        //   label: 'Номын худалдаа',
        //   label2: 'Жишиг өөрчилсөн түүх ном',
        //   icon: '',
        // },
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
        },
        {
          label: 'Хөтөлбөр',
          parent: 5,
          label2: 'Сургалтын модулиуд',
          icon: '',
        },
        {
          label: 'Бүртгүүлэх',
          parent: 5,
          label2: 'Цахим сургалтад бүртгүүлэх',
          icon: '',
        },
        {
          label: 'Үнэлгээ ',
          parent: 5,
          label2: 'Сургалтад хамрагдсан байгууллагууд',
          icon: '',
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
        },
        {
          label: 'Компаний сайн туршлага',
          parent: 6,
          label2: 'Сайн туршлагаын талбар',
          icon: '',
        },
        {
          label: 'Сайн туршлага хуваалцах',
          label2: 'Сайн туршлага хуваалцах',
          parent: 6,
          icon: '',
        },
        {
          label: 'Сургалт хөгжлийн аялал',
          parent: 6,
          label2: 'М-карт худалдан авах',
          icon: '',
        },
      ],
    },
  ];
  public adminMenu: Menu[] = [
    {
      name: 'Articles',
      link: '/admin/articles',
    },
    {
      name: 'Menu',
      link: '/admin/articles',
    },
    {
      name: 'Stories',
      link: '/admin/stories',
    },

  ];
}
