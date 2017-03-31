import {Component} from '@angular/core';
import {ITodo} from '../shared/model/itodo';
import {TodoStatus} from "../shared/constants/todo-status.enum";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

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


  checkTodo(todoToCheck) {

    const newStatus = todoToCheck.status === TodoStatus.TODO ? TodoStatus.DONE : TodoStatus.TODO;
    const newTodo = {
      name: todoToCheck.name,
      status: newStatus
    };

    this.todos = this.todos.map(todo => todo.name !== todoToCheck.name ? todo : newTodo);
  }

}
