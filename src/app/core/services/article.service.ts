import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
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
  collection: AngularFirestoreCollection = this.db.collection('articles');

  constructor(
    public db: AngularFirestore,
  ) {
  }

  getArticles(number?, sort?): Observable<any> {
    const collectionName = this.collection.ref.path;
    if (sort) {
      return this.db.collection(collectionName, ref=> ref.orderBy(sort.sort,'asc')).valueChanges();
    }
    if (number) {
      return this.db
        .collection(collectionName, (ref) =>
          ref.limit(number).orderBy('createdAt', 'desc')
        )
        .valueChanges();
    } else {
      return this.collection.valueChanges();
    }

  }

  getArticle(id: string): Observable<any> {
    return this.collection.doc(id).valueChanges();
  }
  createArticle(
    article: { title: any; content: any; type: any },
    author: { uid: any; displayName: any }
  ): any {
    const data = {
      author: {
        uid: author.uid,
        displayName: author.displayName,
      },
      content: article.content,
      createdAt: new Date(),
      title: article.title,
      type: this.changeArticleType(article.type),
    };
    return this.add(data);
  }

  deleteArticle(article: { id: string }): any {
    return this.collection.doc(article.id).delete();
  }
  updateArticle(
    article: { id: any; title: any; content: any; type: any },
    updatedBy: { uid: any; displayName: any }
  ): any {
    const data = {
      content: article.content,
      title: article.title,
      updatedAt: new Date(),
      type: this.changeArticleType(article.type),
      lastUpdateBy: {
        uid: updatedBy.uid,
        displayName: updatedBy.displayName,
      },
    };
    return this.save(article.id, data);
  }
  add(data): any {
    return this.collection
      .add(data)
      .then(res => {
        res.update({
          id: res.id,
          updatedAt: new Date()
        });
        return res.id;
      });
  }
  save(id, data): Promise<any> {
    console.log(data);
    return this.collection.doc(id).set(
      data,
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
      story: false,
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
  getArticlesExclude(type, number): Observable<any> {
    return this.db
      .collection('articles', (ref) =>
        ref
          .orderBy('createdAt', 'desc')
          .where(`type.${type}`, '==', false)
          .limit(number)
      )
      .valueChanges();
  }
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
