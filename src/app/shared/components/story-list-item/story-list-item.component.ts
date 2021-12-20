    import { Story } from './../../../core/services/story.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'story-list-item',
  templateUrl: './story-list-item.component.html',
  styleUrls: ['./story-list-item.component.scss']
})
export class StoryListItemComponent implements OnInit {
  @Input() story: Story

  constructor() { }

  ngOnInit(): void {
  }

}
