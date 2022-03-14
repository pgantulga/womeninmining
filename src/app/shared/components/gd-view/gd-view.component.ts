import { Component, Input, OnInit } from '@angular/core';
const id = 'https://drive.google.com/embeddedfolderview?id=1xO7PgciXeNWkeEhEJgc0FZ_N81047518#list';

@Component({
  selector: 'gd-view',
  templateUrl: './gd-view.component.html',
  styleUrls: ['./gd-view.component.scss']
})
export class GdViewComponent implements OnInit {
  @Input() folderId: string;
  src: string;
  constructor() { }

  ngOnInit(): void {
    this.src = 'https://drive.google.com/embeddedfolderview?id=' + this.folderId + '#list';
  }

}
