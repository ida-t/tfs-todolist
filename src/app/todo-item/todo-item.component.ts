import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ITodo} from "../shared/model/itodo";
import {TodoStatus} from "../shared/constants/todo-status.enum";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: ITodo;

  @Output() check = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  checkTodo() {
    this.check.emit(this.todo);
  }

  deleteTodo() {
    this.delete.emit(this.todo);
  }

  isDone() {
    return this.todo.status === TodoStatus.DONE;
  }

  get done() {
    return this.todo.status === TodoStatus.DONE;
  }
}
