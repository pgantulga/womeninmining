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
      children: [
        {
          label: 'Бид хэн бэ',
          label2: 'Бидний зорилго, дэмжигчид',
          icon: '',
        },
        {
          label: 'Лого бүхий бүтээгдэхүүн',
          label2: 'Цамц, малга',
          icon: '',
        },
      ],
    },
    {
      label: 'Чуулган',
      children: [
        {
          label: 'Чуулганы тухай',
          label2: 'Танилцуулга бүртгэл',
          icon: '',
        },
        {
          label: '2021 он',
          label2: 'Цахим чуулган',
          icon: '',
        },
        {
          label: '2019 он',
          label2: 'Төрийн ордон',
          icon: '',
        },
        {
          label: '2018',
          label2: 'Эрдэнэт хот',
          icon: '',
        },
      ],
    },
    {
      label: 'Тэр эмэгтэйн түүх',
      children: [
        {
          label: 'Түүх бүтсэн түүх',
          label2: 'Номын нээлт',
          icon: '',
        },
        {
          label: 'Гайхамшигт 50',
          label2: 'Жишиг өөрчилсөн түүх',
          icon: '',
        },
        {
          label: 'Өөрийн түүхээ үлдээе',
          label2: 'Түүх үргэлжилсээр',
          icon: '',
        },
        {
          label: 'Номын худалдаа',
          label2: 'Жишиг өөрчилсөн түүх ном',
          icon: '',
        },
      ],
    },
    {
      label: 'Хүний эрх жендер',
      children: [
        {
          label: 'Танилцуулга',
          label2: 'Сургалтын танилцуулга',
          icon: '',
        },
        {
          label: 'Хөтөлбөр',
          label2: 'Сургалтын модулиуд',
          icon: '',
        },
        {
          label: 'Бүртгүүлэх',
          label2: 'Цахим сургалтад бүртгүүлэх',
          icon: '',
        },
        {
          label: 'Үнэлгээ ',
          label2: 'Сургалтад хамрагдсан байгууллагууд',
          icon: '',
        },
      ],
    },
    {
      label: 'Хүний хөгжил',
      children: [
        {
          label: 'Сургалтууд',
          label2: 'Сургалтын танилцуулга',
          icon: '',
        },
        {
          label: 'Компаний сайн туршлага',
          label2: 'Сайн туршлагаын талбар',
          icon: '',
        },
        {
          label: 'Сайн туршлага хуваалцах',
          label2: 'Сайн туршлага хуваалцах',
          icon: '',
        },
        {
          label: 'Сургалт хөгжлийн аялал',
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
  ];
  public footerMenu: Menu[] = [
    {
      name: 'Холбоос 1',
      link: '',
    },
    {
      name: 'Холбоос 2',
      link: '',
    },
    {
      name: 'Холбоос 3',
      link: '',
    },
    {
      name: 'Холбоос 4',
      link: '',
    },
    {
      name: 'Холбоос 5',
      link: '',
    },
  ];
}
