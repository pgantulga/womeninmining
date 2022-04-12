import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Story } from './../../../core/services/story.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'story-list-item',
  templateUrl: './story-list-item.component.html',
  styleUrls: ['./story-list-item.component.scss'],
})
export class StoryListItemComponent implements OnInit {
  @Input() story: Story;
  htmlContent: any;
  description: any;

  constructor(private sanitzier: DomSanitizer, private router: Router) {}

  ngOnInit(): void {
    this.htmlContent = this.sanitzier.bypassSecurityTrustHtml(
      this.story.content
    );
    this.description = this.createElementFromHTML(this.story.content);
  }
  gotoStory(story) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      return this.router.navigate(['/stories', story.id]);
    });
  }
  createElementFromHTML(htmlString) {
    let div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.getElementsByTagName('p')[0].innerHTML;
  }
}
