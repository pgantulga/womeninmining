import { AuthService } from './../../../services/auth.service';
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
  author: any;
  constructor(private storyService: StoryService, private authService: AuthService) { }

  ngOnInit(): void {
    this.stories$ = this.storyService.getStories();
    this.authService.user$.subscribe((user) => {
      this.author = user;
    });
  }

  addStory() {
    const sotry = {
      firstName: 'Болормаа',
      lastName: 'Лунтан',
      career: 'Сэтгүүлч',
      image: '../../../assets/images/people/bolormaa.webp',
      image_paint: null,
      paintBy: '-',
      content: 'any',
      createdAt: null,
      updateAt: null
    }
    return this.storyService.addStory(sotry, this.author);
  }

}
