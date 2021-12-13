import { Component, Input, OnInit } from '@angular/core';
export interface ChipTag {
  label: string;
  link: string;
  style: {
    primary: boolean;
    accent: boolean;
    red: boolean;
  };
}

@Component({
  selector: 'chip-tag',
  templateUrl: './chip-tag.component.html',
  styleUrls: ['./chip-tag.component.scss'],
})
export class ChipTagComponent implements OnInit {
  @Input() item: ChipTag;
  color: string;
  constructor() {
  }
  ngOnInit(): void {
    this.color = this.getColor(this.item.style);
  }
  getColor(style): any {
    if(style.primary) {
      return 'primary'
    }
    if(style.accent) {
      return 'accent'
    }
    if(style.red) {
      return 'warn'
    }
  }
}
