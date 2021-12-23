import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'story-detail-header',
  templateUrl: './story-detail-header.component.html',
  styleUrls: ['./story-detail-header.component.scss']
})
export class StoryDetailHeaderComponent implements OnInit {
  @Input() content: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goto() {
    return this.router.navigateByUrl('/stories');
  }

}
