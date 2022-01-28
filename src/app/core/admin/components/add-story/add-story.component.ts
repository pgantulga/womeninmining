import { ArticleService } from './../../../services/article.service';
import { AuthService } from './../../../services/auth.service';
import { AddArticleComponent } from './../add-article/add-article.component';
import { switchMap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { StoryService } from './../../../services/story.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { config } from './../../../../shared/quill-config';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionDialogComponent } from 'src/app/shared/components/action-dialog/action-dialog.component';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss'],
})
export class AddStoryComponent implements OnInit {
  config: any;
  editing: boolean;
  oldValue: any;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  career = new FormControl('', [Validators.required]);
  image: any;
  paintBy = new FormControl('', [Validators.required]);
  content = new FormControl('', [Validators.minLength(150)]);
  story$: Observable<any>;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private storyService: StoryService,
    private authService: AuthService,
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
    this.config = config;
    this.editing = false;
  }

  ngOnInit(): void {
    this.story$ = this.route.paramMap.pipe(
      switchMap((params) => {
        if (params.get('id')) {
          return this.storyService.getArticle(params.get('id'));
        } else {
          return EMPTY;
        }
      })
    );
    if (this.story$) {
      this.story$.subscribe((data) => {
        if (data) {
          this.editing = true;
          this.oldValue = data;
          this.firstName.setValue(data.firstName);
          this.lastName.setValue(data.lastName);
          this.career.setValue(data.career);
          this.image = data.image;
          this.paintBy.setValue(data.paintBy);
          this.content.setValue(data.content);
        }
      });
    }
  }
  // onSubmit() {
  //   const dialogData = !this.editing
  //     ? {
  //         title: 'Adding story',
  //         content: 'Your story will be added to database.',
  //       }
  //     : {
  //         title: 'Saving story',
  //         content: 'Your changes will be saved to database',
  //       };
  //   const dialogRef = this.dialog.open(ActionDialogComponent, {
  //     data: dialogData,
  //   });
  //   return dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       const dialogPromise = !this.editing
  //         ? this.addArticle()
  //         : this.saveArticle();
  //       dialogPromise.then(() => {
  //         return this.router.navigate(['admin/articles']);
  //       });
  //     }
  //   });
  // }
}
