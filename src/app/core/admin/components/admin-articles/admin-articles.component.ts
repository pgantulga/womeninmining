import { Observable } from 'rxjs';
import { ArticleService, Article } from './../../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActionDialogComponent } from 'src/app/shared/components/action-dialog/action-dialog.component';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss'],
})
export class AdminArticlesComponent implements OnInit {
  articles$: Observable<Article[]>;
  constructor(
    private articleService: ArticleService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles();
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
}

// const dialogData = !this.editing
//   ? {
//       title: 'Adding story',
//       content: 'Your story will be added to database.',
//     }
//   : {
//       title: 'Saving story',
//       content: 'Your changes will be saved to database',
//     };

// return dialogRef.afterClosed().subscribe((result) => {
//   if (result) {
//     const dialogPromise = !this.editing ? this.addStory() : this.saveStory();
//     dialogPromise.then(() => {
//       console.log('done');
//       return this.router.navigate(['admin/stories']);
//     });
//   }
// });
