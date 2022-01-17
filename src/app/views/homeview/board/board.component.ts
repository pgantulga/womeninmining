import { SectionHeaderContent } from './../../../shared/components/section-header/section-header.component';
import { Member } from 'src/app/shared/components/member-list-item/member-list-item.component';
import { ContentService } from './../../../core/services/content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  headerContent: any;
  sectionHeader_1: SectionHeaderContent;
  sectionHeader_2: SectionHeaderContent;

  constructor(public content: ContentService) {
    this.headerContent = {
      title: 'Холбооны зөвлөл',
      style: 'primary',
      image: '/assets/images/story_nobg.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque felis, in posuere ut quis pharetra.',
    };
    this.sectionHeader_1 = {
      title: 'Зөвлөх зөвлөл',
    };
    this.sectionHeader_2 = {
      title: 'Гүйцэтгэх зөвлөл',

    };
  }

  ngOnInit(): void {}
}
