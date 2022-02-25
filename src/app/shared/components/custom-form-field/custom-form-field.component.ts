import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormControlName, Validators } from '@angular/forms';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'custom-form-field',
  templateUrl: './custom-form-field.component.html',
  styleUrls: ['./custom-form-field.component.scss']
})
export class CustomFormFieldComponent {
  @Input() name: string;
  @Input() control: any;
  @Output() newValue = new EventEmitter<string>();
  // control = new FormControl('', [Validators.required]);
  constructor() {
   }

}
