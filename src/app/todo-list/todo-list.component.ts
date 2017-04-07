import {Component} from '@angular/core';
import {ITodo} from '../shared/model/itodo';
import {TodoStatus} from "../shared/constants/todo-status.enum";
import {Filter} from "../shared/constants/filter.enum";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  currentFilter: Filter = Filter.ALL;

  label: string = '123';

  todos: ITodo[] = [
    {
      name: 'Позвонить в сервис',
      status: TodoStatus.TODO,
      time: new Date()
    },
    {
      name: 'Купить хлеб',
      status: TodoStatus.TODO
    },
    {
      name: 'Захватить мир',
      status: TodoStatus.DONE
    },
    {
      name: 'Добавить тудушку в список',
      status: TodoStatus.TODO
    }
  ];

  constructor() {

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
    const isTodoExists = this.checkTodoName(this.label);

    if (!isTodoExists) {
      this.addTodo(this.label);
      this.label = '';
    }
  }

  addTodo(name: string) {
    this.todos = this.todos.concat([
      TodoListComponent.createNewTodo(name)
    ]);
  }

  checkTodo(todoToCheck: ITodo) {
    const status = todoToCheck.status === TodoStatus.TODO ? TodoStatus.DONE : TodoStatus.TODO;
    const newTodo = Object.assign({}, todoToCheck, {status});
    this.todos = this.todos.map(
      todo => todo.name !== todoToCheck.name ? todo : newTodo
    );
  }

  deleteTodo(todoToDelete: ITodo) {
    this.todos = this.todos.filter(
      todo => todo.name !== todoToDelete.name
    );
  }

  private checkTodoName(nameToCheck): boolean {
    return this.todos.some(
      ({name}) => name === nameToCheck
    );
  }

  static createNewTodo(name: string): ITodo {
    return {
      name,
      status: TodoStatus.TODO
    };
  }
}
