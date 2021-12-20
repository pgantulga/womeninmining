import { Author } from './article.service';
import { Injectable } from '@angular/core';

export interface Story {
  firstName: string;
  lastName: string;
  career: string;
  image: string;
  image_paint?: string;
  paintBy?: string;
  content: any;
  author: Author
  createdAt: Date,
  updateAt: Date
}

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor() { }
}
