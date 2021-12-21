import { Observable } from 'rxjs';
import { Author } from './article.service';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

export interface Story {
  firstName: string;
  lastName: string;
  career: string;
  image: string;
  image_paint?: string;
  paintBy?: string;
  content: any;
  author?: Author;
  createdAt?: Date;
  updateAt?: Date;
}

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  storyCollection: AngularFirestoreCollection = this.db.collection('stories');
  constructor(private db: AngularFirestore) {}
  getStories(): Observable<any> {
    return this.storyCollection.valueChanges();
  }
  addStory(story: Story, author?) {
    return this.storyCollection.add({
      firstName: story.firstName,
      lastName: story.lastName,
      career: story.career,
      image: story.image,
      image_paint: story.image_paint,
      paintBy: story.paintBy,
      content: story.content,
      author: {
        displayName: 'Тулгай',
        uid: 'asdfasdfasdf',
      },
      createdAt: new Date(),
      updateAt: null,
    });
  }
}
