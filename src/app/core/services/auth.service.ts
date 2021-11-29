import { Router } from '@angular/router';
import { first, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase';
import { MatSnackBar } from '@angular/material/snack-bar';



export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  displayName: string;
  roles: Roles;
  uid: string;
  notificationTokens: any[];
  verified: boolean;
}

export interface Roles {
  guest?: boolean;
  subscriber?: boolean;
  moderator?: boolean;
  admin?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  private userCollection = this.db.collection<any>('users');
  constructor(
    public af: AngularFireAuth,
    private db: AngularFirestore,
    public snackBar: MatSnackBar,
    private router: Router

  ) {
    this.user$ = this.af.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.userCollection.doc<User>(user.uid).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
  getUser(): Promise<any> {
    return this.user$.pipe(first()).toPromise();
  }
  getUserById(user): Observable<any> {
    return this.userCollection.doc(user.uid).valueChanges();
  }
  async googleLogin(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.af.signInWithPopup(provider);
    return this.userLoginHandler(credential);
  }
  private async userLoginHandler(data): Promise<any> {
    const resolver = {
      firstTime: false,
      ...data.user,
    };
    const user = await this.getUser();
    if (user) {
      // resolver.firstTime = user.company || user.position ? false : true;
      return new Promise((resolve) => {
        resolve(resolver);
      });
    } else {
      resolver.firstTime = true;
      return this.createUserData(data.user).then(() => {
        return new Promise((resolve) => {
          resolve(resolver);
        });
      });
    }
  }
  private createUserData(user: any): any {
    const ref = this.userCollection.doc(user.uid);
    const data = {
      uid: user.uid,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: user.email,
      displayName: user.displayName || null,
      roles: {
        guest: true,
      },
    };
    return ref.set(data, { merge: true });
  }
  async signOut(): Promise<any> {
    await this.af.signOut().then((res) => {
      console.log('Successfully signed out');
      // this.snackBar.openFromComponent(SnackComponent, {
      //   data: 'Амжилттай гарлаа',
      // });
    });
    return this.router.navigate(['/']);
  }
}

