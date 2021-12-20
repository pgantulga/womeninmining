import { Component, Input, OnInit } from '@angular/core';

export interface Member {
  displayName: string;
  represent: string;
  image?: string;
  story?: boolean;
  storyLink?: string;
}

@Component({
  selector: 'member-list-item',
  templateUrl: './member-list-item.component.html',
  styleUrls: ['./member-list-item.component.scss']
})
export class MemberListItemComponent implements OnInit {
  @Input() member: Member;
  constructor() { }
  ngOnInit(): void {
  }

}
