import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
​
@Component({
  selector: 'app-todo-item',
  template: `
    <div class="title-text">
      <input type="checkbox"
             class="todo-checkbox"
             (click)="completeItem()"/>
      <span class="todo-title" [ngClass]="{'todo-complete': isComplete}" contenteditable="true" [textContent]="item.title" >
        {{ item.title }}
      </span>      
    </div>   
    <button class="btn btn-delete" (click)="removeItem()">x</button>
`,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item:TodoItem;
  @Output() remove:EventEmitter<TodoItem> = new EventEmitter();
  @Output() update:EventEmitter<any> = new EventEmitter();

  isComplete:boolean = false;
​
  completeItem() {
    this.isComplete = !this.isComplete;
  }
  ​
  constructor() {
  }
​
  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }
​
}
