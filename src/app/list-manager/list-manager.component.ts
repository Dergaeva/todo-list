import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
import {FilterPipe} from '../../pipes'

@Component({
  selector: 'app-list-manager',
  template: `
  <div class="todo-app">
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
    <ul class="list">
      <li *ngFor="let todoItem of todoList| FilterPipe: queryString" class="item">
        <app-todo-item [item]="todoItem"
               (remove)="removeItem($event)"></app-todo-item>
      </li>
    </ul>
    <input type="text" [(ngModel)]="queryString" id="search" placeholder="Search to item">
  </div>
`,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService:TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoListService.addItem({ title });
  }

  removeItem(item) {
    this.todoListService.deleteItem(item);
  }



}
