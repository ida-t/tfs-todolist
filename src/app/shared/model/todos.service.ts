import {Injectable} from '@angular/core';
import {ITodo} from "./itodo";
import {TodoStatus} from "../constants/todo-status.enum";

@Injectable()
export class TodosService {

  constructor() {
  }

  private todos: ITodo[] = [
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

  getTodos() {
    return this.todos;
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

  addTodo(name: string) {
    this.todos = this.todos.concat([
      TodosService.createNewTodo(name)
    ]);
  }

  checkTodoName(nameToCheck): boolean {
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
