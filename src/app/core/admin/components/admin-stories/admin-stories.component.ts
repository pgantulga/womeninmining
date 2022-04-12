import { AuthService } from './../../../services/auth.service';
import { Story, StoryService } from './../../../services/story.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-stories',
  templateUrl: './admin-stories.component.html',
  styleUrls: ['./admin-stories.component.scss'],
})
export class AdminStoriesComponent implements OnInit {
  stories$: Observable<Story[]>;
  author: any;
  constructor(
    private storyService: StoryService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.stories$ = this.storyService.getArticles();
  }

  addStory() {
    const story = {
      firstName: 'Болормаа',
      lastName: 'Лунтан',
      career: 'Сэтгүүлч',
      image: '../../../assets/images/people/bolormaa.webp',
      image_paint: null,
      paintBy: '-',
      content: 'any',
      createdAt: null,
      updateAt: null,
    };
    return this.storyService.addStory(story, this.author);
  }
  highlightStory(story){
    return story.highlighted ? this.storyService.unHighlight(story.id) : this.storyService.highlight(story.id)

  }
}
