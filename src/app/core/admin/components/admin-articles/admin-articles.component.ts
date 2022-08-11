import { Observable } from 'rxjs';
import { ArticleService, Article } from './../../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActionDialogComponent } from 'src/app/shared/components/action-dialog/action-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss'],
})
export class AdminArticlesComponent implements OnInit {
  articles$: Observable<Article[]>;
  selected: any;
  type: string;
  types: any[];

  constructor(
    private articleService: ArticleService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.types = this.articleService.getArticleTypes();
    this.selected = null;
    this.select();
  }
  deleteArticle(article) {
    const dialogData = {
      title: 'Adding article',
      content: 'Your artcile will be removed from database.',
    };
    const dialogRef = this.dialog.open(ActionDialogComponent, {
      data: dialogData,
    });
    return dialogRef.afterClosed().subscribe(result => {
      if (result) {
        return this.articleService.deleteArticle(article);
      }
    });
  }
  select(item?): any {
    this.articles$ = null;
    if (!item) {
      this.selected = null;
      this.articles$ = this.articleService.getArticles();
    } else {
      this.selected = item;
      this.articles$ = this.articleService.getArticleByTypes(this.selected.viewValue);

    }
  }
}


