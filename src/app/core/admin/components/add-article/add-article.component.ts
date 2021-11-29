import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  title = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  constructor() { }

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
}
