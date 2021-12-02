import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogData, ActionDialogComponent } from './../../../../shared/components/action-dialog/action-dialog.component';
import { config } from './../../../../shared/quill-config';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  config: any;
  title = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  content = new FormControl('', [
    Validators.minLength(150)
  ]);
  constructor(private dialog: MatDialog, private router: Router) {
    this.config = config;
  }

  ngOnInit(): void {
  }
  getErrorMessage(): string {
    if (this.title.hasError('required')) {
      return 'Title required';
    }
    return this.title.hasError('length') ? '150 тэмдэгтэд багтаана уу' : '';
  }
  onSubmit() {

  }
  cancel(url): void {
    const dialogData = {
      title: 'Are you sure to cancel?',
      content: 'Your changes will not be saved.'
    };
    this.dialog.open(ActionDialogComponent, { data: dialogData })
      .afterClosed().subscribe( result => {
        if (result) {
          this.title.setValue(null);
          this.content.setValue(null);
          return this.router.navigate([url])
        }
      })
  }
}
