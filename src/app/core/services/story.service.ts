import { Observable } from 'rxjs';
import { Author, ArticleService } from './article.service';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

export interface Story {
  id?: any,
  firstName: string;
  lastName: string;
  career: string;
  image?: string;
  painter?: string;
  content?: any;
  author?: Author;
  createdAt?: Date;
  updateAt?: Date;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class StoryService extends ArticleService {
  collection: AngularFirestoreCollection = this.db.collection('stories');
  constructor(public db: AngularFirestore) {
    super(db);
  }
  addStory(story: Story, author?): any {
    const data = {
      author: {
        displayName: author.displayName,
        uid: author.uid,
      },
      content: story.content,
      createdAt: new Date(),
      firstName: story.firstName,
      lastName: story.lastName,
      career: story.career,
      description: story.description,
      image: story.image,
      painter: story.painter || null,
      updateAt: null,
    };
    return super.add(data);
  }
  updateStory(story: Story, updatedBy: { uid: any; displayName: any }): any {
    const test = {...story};
    const data = {
      lastUpdatedBy: {
        displayName: updatedBy.displayName,
        uid: updatedBy.uid,
      },
      // content: story.content,
      // createdAt: new Date(),
      // firstName: story.firstName,
      // lastName: story.lastName,
      // career: story.career,
      // description: story.description,
      // image: story.image,
      // painter: story.painter || null,
      updateAt: new Date(),
      ...story
    };
    return super.save(story.id, data);
  }
  highlight(id) {
    return this.collection.doc(id).set({highlighted: true}, {merge: true})
  }
  unHighlight(id) {
    return this.collection.doc(id).set({highlighted: false}, {merge: true})
  }
  getHighlightedStories() {
    return this.db.collection('stories', ref => ref.where('highlighted', '==', true)).valueChanges();
  }
}
