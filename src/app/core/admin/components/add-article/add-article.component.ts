import { ArticleService, Type } from './../../../services/article.service';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  ActionDialogComponent,
} from './../../../../shared/components/action-dialog/action-dialog.component';
import { config } from './../../../../shared/quill-config';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
  types: Type[];
  constructor(private dialog: MatDialog, private router: Router, private authService: AuthService, private articleService: ArticleService) {
    this.config = config;
    this.editing = false;
    this.types = []
  }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.author = user;
    })
  }
  getErrorMessage(): string {
    if (this.title.hasError('required')) {
      return 'Title required';
    }
    return this.title.hasError('length') ? '150 тэмдэгтэд багтаана уу' : '';
  }
  onSubmit() {
    console.log('onsubmit')
    const dialogData = !this.editing
      ? {
          title: 'Addin article',
          content: 'Your article will be added to database.',
        }
      : {
          title: 'Saving article',
          content: 'Your changes will be saved to datase',
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
  private addArticle(): any {
    return this.articleService.createArticle({
      title: this.title.value,
      content: this.content.value
    }, this.author)
  }
  private saveArticle(): any {
  }
}
