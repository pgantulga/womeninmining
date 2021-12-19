import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Type {
  news: boolean;
  blog: boolean;
  story: boolean;
  static: boolean;
}
export interface Author {
  uid: string;
  displayName: string;
}
export interface Article {
  title: string;
  content: any;
  createdAt: Date;
  author: Author;
  type: Type;
  updatedAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articleCollection = this.db.collection('articles');

  constructor(private db: AngularFirestore) { }

  getArticles(number): Observable<any> {
    return this.db.collection('articles', ref => ref.limit(number).orderBy('createdBy', 'desc')).valueChanges();
  }
  getArticle(id: string): Observable<any> {
    return this.articleCollection.doc(id).valueChanges();
  }
  createArticle(
    article: { title: any; content: any; type: any },
    author: { uid: any; displayName: any }
  ): any {
    return this.articleCollection
      .add({
        author: {
          uid: author.uid,
          displayName: author.displayName,
        },
        content: article.content,
        createdAt: new Date(),
        title: article.title,
        type: this.changeArticleType(article.type),
      })
      .then((res) => {
        return res.update({
          id: res.id,
        });
      });
  }
  deleteArticle(article: { id: string }): any {
    return this.articleCollection.doc(article.id).delete();
  }
  updateArticle(
    article: { id: any; title: any; content: any; type: any },
    updatedBy: { uid: any; displayName: any }
  ): any {
    return this.articleCollection.doc(article.id).set(
      {
        content: article.content,
        title: article.title,
        updatedAt: new Date(),
        type: this.changeArticleType(article.type),
        lastUpdateBy: {
          uid: updatedBy.uid,
          displayName: updatedBy.displayName,
        },
      },
      { merge: true }
    );
  }
  getArticleTypes(): any {
    return [
      { value: { news: true }, viewValue: 'news' },
      { value: { story: true }, viewValue: 'story' },
      { value: { blog: true }, viewValue: 'blog' },
      { value: { static: true }, viewValue: 'static' },
    ];
  }
  private changeArticleType(type): Type {
    console.log(type);
    const articleTypes = {
      news: false,
      blog: false,
      static: false,
      story: false
    };
    const key = Object.keys(type);
    articleTypes[key[0]] = true;
    return articleTypes;

  }
  getArticleByTypes(type): Observable<any> {
    return this.db
      .collection('articles', (ref) =>
        ref.orderBy('createdAt', 'desc').where(`type.${type}`, '==', true)
      )
      .valueChanges();
  }
  // getArticlesExclude(type, number): Observable<any> {
  //   return this.db
  //     .collection('articles', (ref) =>
  //       ref.orderBy('createdAt', 'desc').where(`type.${type}`, '!=', true )
  //     ).valueChanges();

  // }
  getTag(content): any {
    if (!content.type) {
      return {
        label: 'Нийтлэл',
        link: 'google.com',
        style: { red: false, primary: true, accent: false },
      };
    }
    if (content.type.static) {
      return {
        label: 'Статик',
        link: 'google.com',
        style: { red: false, primary: false, accent: true },
      };
    }
    if (content.type.blog) {
      return {
        label: 'Нийтлэл',
        link: 'google.com',
        style: { red: false, primary: true, accent: false },
      };
    }

    if (content.type.story) {
      return {
        label: 'Түүх',
        link: 'google.com',
        style: { red: false, primary: false, accent: true },
      };
    }
    if (content.type.news) {
      return {
        label: 'Мэдээ',
        link: 'google.com',
        style: { red: true, primary: false, accent: false },
      };
    }
  }
}
