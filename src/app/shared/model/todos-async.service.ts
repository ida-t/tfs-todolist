import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {ITodo} from "./itodo";
import {TodoStatus} from "../constants/todo-status.enum";

import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';


const BASE_URL = 'https://tfs-todolist-53858.firebaseio.com/todos';


@Injectable()
export class TodosAsyncService {

  constructor(private http: Http) {
  }

  getTodos(): Observable<ITodo[]> {
    return this.http.get(`${BASE_URL}.json`)
      .map(res => res.json())
      .map(data => {
        const result = Object.keys(data)
          .map(key => {
            return Object.assign({}, data[key], {key});
          });

        console.log('--- result', result);
        return result;
      })
  }

  addTodo(name: string) {
    const newTodo = TodosAsyncService.createNewTodo(name);

    return this.http.post(`${BASE_URL}.json`, newTodo);
  }

  deleteTodo(todoToDelete: ITodo) {
    return this.http.delete(`${BASE_URL}/${todoToDelete.key}/.json`);
  }

  checkTodo(todoToCheck: ITodo) {
    const status = todoToCheck.status === TodoStatus.TODO ? TodoStatus.DONE : TodoStatus.TODO;

    return this.http.patch(`${BASE_URL}/${todoToCheck.key}/.json`, {status});
  }


  static createNewTodo(name: string): ITodo {
    return {
      name,
      status: TodoStatus.TODO,
      key: ''
    };
  }
}
