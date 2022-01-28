import { HeaderContent } from './../../../shared/components/title-wrapper/title-wrapper.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  header: HeaderContent;
  constructor() {
    this.header = {
      title: 'Хуудас олдсонгүй.',
      style: 'accent',
      image: '/assets/images/story_nobg.png',
      description: 'Таны дуудсан хуудас олдсонгүй.',
      button: {
        label: 'Нүүр хуудас',
        link: 'home'
      }
    }
   }
  ngOnInit(): void {
  }
}
