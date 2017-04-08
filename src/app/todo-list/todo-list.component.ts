import {Component, OnInit} from '@angular/core';
import {ITodo} from '../shared/model/itodo';
import {TodoStatus} from "../shared/constants/todo-status.enum";
import {Filter} from "../shared/constants/filter.enum";
import {TodosService} from "../shared/model/todos.service";
import {TodosAsyncService} from "../shared/model/todos-async.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  currentFilter: Filter = Filter.ALL;
  label: string = '123';
  todos: ITodo[] = [];

  constructor(private todosService: TodosService,
              private todosAsyncService: TodosAsyncService) {

  }

  ngOnInit() {
    this.updateTodos();
  }

  onFilterChange(value: Filter) {
    this.currentFilter = value;
  }

  checkFilter({status}: ITodo): boolean {
    switch (this.currentFilter) {

      case Filter.DONE:
        return status === TodoStatus.DONE;

      case Filter.TODO:
        return status === TodoStatus.TODO;

      default:
        return true;
    }
  }

  submit() {
    const isTodoExists = this.todosService.checkTodoName(this.label);

    if (!isTodoExists) {
      this.addTodo(this.label);
      this.label = '';
    }
  }

  addTodo(name: string) {
    // this.todosService.addTodo(name);
    this.todosAsyncService.addTodo(name).subscribe(() => {
      this.updateTodos();
    });
  }

  checkTodo(todoToCheck: ITodo) {
    this.todosAsyncService.checkTodo(todoToCheck)
      .subscribe(() => {
        this.updateTodos();
      });
  }

  deleteTodo(todoToDelete: ITodo) {
    this.todosService.deleteTodo(todoToDelete);
    this.updateTodos();
  }

  private updateTodos() {
    // this.todos = this.todosService.getTodos();

    this.todosAsyncService.getTodos()
      .subscribe((data) => {
        this.todos = data;
      });
  }
}
