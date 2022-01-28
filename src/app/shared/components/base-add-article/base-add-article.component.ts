import { EMPTY, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-base-add-article',
  templateUrl: './base-add-article.component.html',
  styleUrls: ['./base-add-article.component.scss'],
})
export class BaseAddArticleComponent implements OnInit {
  author: any;
  doc$: Observable<any>;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.authService.user$.subscribe((user) => {
    //   this.author = user;
    // });
    // this.doc$ = this.route.paramMap.pipe(
    //   switchMap((params) => {
    //     if (params.get('id')) {
    //       return this.service.getArticle(params.get('id'));
    //     } else {
    //       return EMPTY;
    //     }
    //   })
    // );
  }
}
