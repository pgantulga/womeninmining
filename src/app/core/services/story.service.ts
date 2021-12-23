import { Observable } from 'rxjs';
import { Author } from './article.service';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentData,
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
  getStory(id: string): Observable<any> {
    return this.storyCollection.doc(id).valueChanges();
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
        displayName: author.displayName,
        uid: author.uid,
      },
      createdAt: new Date(),
      updateAt: null,
    })
    .then(res => {
      return res.update({
        id: res.id,
        updatedAt: new Date()
      })
    })
  }
}
