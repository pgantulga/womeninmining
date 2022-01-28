import { Observable } from 'rxjs';
import { Author, ArticleService } from './article.service';
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
export class StoryService extends ArticleService {
  collection: AngularFirestoreCollection = this.db.collection('stories');
  constructor(public db: AngularFirestore) {
    super(db);
  }
  addStory(story: Story, author?) {
    const data = {
      firstName: story.firstName,
      lastName: story.lastName,
      career: story.career,
      image: story.image,
      image_paint: story.image_paint,
      paintBy: story.paintBy,
      content: story.content,
      author: {
        displayName: author.displayName,
        uid: author.uid,
      },
      createdAt: new Date(),
      updateAt: null,
    };
    return this.collection.add(data).then((res) => {
      return res.update({
        id: res.id,
        updatedAt: new Date(),
      });
    });
  }
}
