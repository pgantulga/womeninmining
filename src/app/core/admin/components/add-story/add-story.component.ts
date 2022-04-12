import { ArticleService } from './../../../services/article.service';
import { AuthService } from './../../../services/auth.service';
import { AddArticleComponent } from './../add-article/add-article.component';
import { switchMap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { StoryService } from './../../../services/story.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { config } from './../../../../shared/quill-config';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionDialogComponent } from 'src/app/shared/components/action-dialog/action-dialog.component';
import { UploadFileComponent } from 'src/app/shared/components/upload-file/upload-file.component';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss'],
})
export class AddStoryComponent implements OnInit {
  @ViewChild(UploadFileComponent) uploadComponent: UploadFileComponent;

  config: any;
  editing: boolean;
  oldValue: any;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  career = new FormControl('', [Validators.required]);
  description = new FormControl('', [
    Validators.maxLength(200),
    Validators.minLength(10),
  ]);
  image: any;
  painter = new FormControl('', [Validators.required]);
  content = new FormControl('', [Validators.minLength(150)]);
  story$: Observable<any>;
  storagePath: string;
  author: any;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private storyService: StoryService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.config = config;
    this.editing = false;
    this.storagePath = `images/stories/`;
  }

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.author = user;
    });
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
          this.description.setValue(data.description);
          this.image = data.image;
          this.painter.setValue(data.painter);
          this.content.setValue(data.content);
        }
      });
    }
  }
  getImageFile(ev): any {
    this.image = ev;
  }
  onSubmit(): any {
    const dialogData = !this.editing
      ? {
          title: 'Adding story',
          content: 'Your story will be added to database.',
        }
      : {
          title: 'Saving story',
          content: 'Your changes will be saved to database',
        };
    const dialogRef = this.dialog.open(ActionDialogComponent, {
      data: dialogData,
    });
    return dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const dialogPromise = !this.editing
          ? this.addStory()
          : this.saveStory();
        dialogPromise.then(() => {
          console.log('done');
          return this.router.navigate(['admin/stories']);
        });
      }
    });
  }
  private addStory(): any {
    return this.storyService.addStory(
      {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        career: this.career.value,
        description: this.description.value,
        image: this.image,
        painter: this.painter.value,
        content: this.content.value,
      },
      this.author
    );
  }
  private saveStory(): any {
    const story = {
      id: this.oldValue.id,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      career: this.career.value,
      description: this.description.value,
      image: this.image,
      painter: this.painter.value || null,
      content: this.content.value,
    };
    const updatedBy = {
      uid: this.author.uid,
      displayName: this.author.displayName,
    };
    return this.storyService.updateStory(story, updatedBy);
  }
}
