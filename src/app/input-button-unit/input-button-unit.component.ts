import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-input-button-unit',
  template: `
<input class="todo-input"
       #inputElementRef
       [value]="title"       
       (keyup.enter)="submitValue($event.target.value)">
​
<button class="btn btn-default"
        (click)="submitValue(inputElementRef.value)">
  Save
</button>
`,
  styleUrls: ['./input-button-unit.component.css']
})

export class InputButtonUnitComponent implements OnInit {
  @Output() submit:EventEmitter<string> = new EventEmitter();

  title = 'Save World';

  constructor() {
  }

  ngOnInit() {
  }

  changeTitle(newTitle:string) {
    this.submit.emit(newTitle);
  }

  submitValue(newTitle:string) {
    this.submit.emit(newTitle);
  }
}
