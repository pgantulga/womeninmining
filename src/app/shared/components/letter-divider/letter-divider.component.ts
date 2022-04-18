import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'letter-divider',
  templateUrl: './letter-divider.component.html',
  styleUrls: ['./letter-divider.component.scss']
})
export class LetterDividerComponent implements OnInit {
  @Input() letter: string;
  constructor() { }

  ngOnInit(): void {
  }

}
