import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss']
})
export class StoryDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goto() {
    return this.router.navigateByUrl('/stories');
  }
}
