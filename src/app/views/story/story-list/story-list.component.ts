import { WrapperService } from 'src/app/core/services/wrapper.service';
import { Observable } from 'rxjs';
import { StoryService, Story, ALPHABET_MN } from './../../../core/services/story.service';
import { SectionHeaderContent } from './../../../shared/components/section-header/section-header.component';
import { ContentService } from './../../../core/services/content.service';
import { Component, OnInit } from '@angular/core';
import { HeaderContent } from 'src/app/shared/components/title-wrapper/title-wrapper.component';

const toggleMenu = [
  {
    name: 'Үсгийн дарааллаар',
    sort: 'firstName',
    icon: 'text_rotate_vertical'
  },
  {
    name: 'Жагсаалтаар',
    sort: 'createdAt',
    icon: 'view_stream'
  },
];

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss'],
})
export class StoryListComponent implements OnInit {
  header: HeaderContent;
  sectionHeader: SectionHeaderContent;
  stories$: Observable<Story[]>;
  toggleMenu: any[];
  selectedSort: any;
  alphabet = ALPHABET_MN;
  constructor(private content: ContentService, private storyService: StoryService, private wrapperService: WrapperService) {
    this.header = wrapperService.getTitleWrapper();
    this.sectionHeader = {
      title: 'Гайхамшигт түүхүүд',
      description:
        'Жишиг өөрчилсөөр ирсэн зуун зуун уурхайчин эмэгтэйчүүдээс үлгэр дууриайл, урам зориг авч ирээдүй хойчийн олон олон охид геологи, геофизикч, инженер, оператор, аврагчас өгсүлээд уурхайн эзэн болох болтугай.',
    };
    this.toggleMenu = toggleMenu;
    this.selectedSort =toggleMenu[1];
  }

  ngOnInit(): void {
    this.stories$ = this.storyService.getArticles(10, this.selectedSort);

  }
  changeSort(sort) {
    console.log('selected sort', sort.sort)
    this.selectedSort = sort;
    this.stories$ = this.storyService.getArticles(10, this.selectedSort);
  }
}
