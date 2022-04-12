import { Observable } from 'rxjs';
import { StoryService, Story } from './../../../core/services/story.service';
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
  constructor(private content: ContentService, private storyService: StoryService) {
    this.header = {
      title: 'Жишиг өөрчилсөн түүх',
      style: 'accent',
      image: content.images.story_nobg,
      button: {
        label: 'Өөрийн түүхээ хуваалцах',
        link: '',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque felis, in posuere ut quis pharetra.',
    };
    this.sectionHeader = {
      title: 'Гайхамшигт түүхүүд',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie iaculis fusce egestas nec nunc pretium. Auctor mauris eget dui massa. Nunc pulvinar in venenatis risus aliquet erat. Tortor mi commodo quis vel in risus. Nec aliquam in ac dignissim pellentesque purus vivamus nisl nibh.',
    };
    this.toggleMenu = toggleMenu;
    this.selectedSort =toggleMenu[1];
  }

  ngOnInit(): void {
    this.stories$ = this.storyService.getArticles(10, this.selectedSort);
  }
  changeSort(sort) {
    console.log(sort)
    this.selectedSort = sort;
    this.stories$ = this.storyService.getArticles(10, this.selectedSort);

  }
}
