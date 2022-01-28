import { switchMap, filter, first, take } from 'rxjs/operators';
import { ArticleService, Type } from './../../../services/article.service';
import { AuthService } from './../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActionDialogComponent } from './../../../../shared/components/action-dialog/action-dialog.component';
import { config } from './../../../../shared/quill-config';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss'],
})
export class AddArticleComponent implements OnInit {
  config: any;
  editing: boolean;
  title = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  content = new FormControl('', [Validators.minLength(150)]);
  author: any;
  oldValue: any;
  types: any;
  selectedType: any;
  article$: Observable<any>;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
    //super()
    this.config = config;
    this.editing = false;
    this.types = this.articleService.getArticleTypes();
  }

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.author = user;
    });
    this.article$ = this.route.paramMap.pipe(
      switchMap((params) => {
        if (params.get('id')) {
          return this.articleService.getArticle(params.get('id'));
        } else {
          return EMPTY;
        }
      })
    );
    if (this.article$) {
      this.article$.subscribe((data) => {
        if (data) {
          this.editing = true;

          this.oldValue = data;
          this.title.setValue(data.title);
          this.content.setValue(data.content);
          const selected = Object.keys(data.type).filter((type: any) => {
            return data.type[type];
          });
          this.selectedType = this.types.filter((type: any) => {
            return Object.keys(type.value)[0] ===
              selected[0];
          })[0].value;
        }
      });
    }
  }
  getErrorMessage(): string {
    if (this.title.hasError('required')) {
      return 'Title required';
    }
    return this.title.hasError('length') ? '150 тэмдэгтэд багтаана уу' : '';
  }
  onSubmit() {
    const dialogData = !this.editing
      ? {
        title: 'Adding article',
        content: 'Your article will be added to database.',
      }
      : {
        title: 'Saving article',
        content: 'Your changes will be saved to database',
      };
    const dialogRef = this.dialog.open(ActionDialogComponent, {
      data: dialogData,
    });
    return dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const dialogPromise = !this.editing
          ? this.addArticle()
          : this.saveArticle();
        dialogPromise.then(() => {
          return this.router.navigate(['admin/articles']);
        });
      }
    });
  }
  cancel(url): void {
    const dialogData = {
      title: 'Are you sure to cancel?',
      content: 'Your changes will not be saved.',
    };
    this.dialog
      .open(ActionDialogComponent, { data: dialogData })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.title.setValue(null);
          this.content.setValue(null);
          return this.router.navigate([url]);
        }
      });
  }
  addArticle(): any {
    return this.articleService.createArticle(
      {
        title: this.title.value,
        content: this.content.value,
        type: this.selectedType,
      },
      this.author
    );
  }
  saveArticle(): Promise<any> {
    let article = {
      id: this.oldValue.id,
      title: this.title.value,
      content: this.content.value,
      type: this.selectedType,
    };
    let updatedBy = {
      uid: this.author.uid,
      displayName: this.author.displayName,
    };
    return this.articleService.updateArticle(article, updatedBy);
  }
}
