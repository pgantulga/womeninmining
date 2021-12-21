import { Story, StoryService } from './../../../services/story.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-stories',
  templateUrl: './admin-stories.component.html',
  styleUrls: ['./admin-stories.component.scss']
})
export class AdminStoriesComponent implements OnInit {
  stories$: Observable<Story[]>;
  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.stories$ = this.storyService.getStories();
  }

  addStory() {
    const sotry = {
      firstName: 'Жанчив',
      lastName: 'Оюунгэрэл',
      career: 'Петровис ХХК үүсгэн байгуулагч',
      image: '../../../assets/images/people/oyungerel.webp',
      image_paint: null,
      paintBy: 'Цэгмидийн Болд',
      content: 'any',
      author: {
        displayName: 'Тулгаа',
        uid: 'asdfasdfasdf',
      },
      createdAt: null,
      updateAt: null
    }
    return this.storyService.addStory(sotry);
  }

}
