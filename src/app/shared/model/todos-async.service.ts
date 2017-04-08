import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";

const BASE_URL = 'https://tfs-todolist.firebaseio.com/todos';

import 'rxjs/add/operator/map';
import {ITodo} from "./itodo";
import {TodoStatus} from "../constants/todo-status.enum";


@Injectable()
export class TodosAsyncService {

  constructor(private http: Http) {
  }

  getTodos() {
    return this.http.get(`${BASE_URL}.json`)
      .map((res: Response) => res.json())
      .map((data) => {
        const result = Object.keys(data).map(id => {
          return Object.assign({}, data[id], {id: id});
        });
        console.log('--- result', result);
        return result;
      })
  }

  addTodo(name: string) {
    const newTodo = TodosAsyncService.createNewTodo(name);

    return this.http.post(`${BASE_URL}.json`, newTodo)
  }

  checkTodo(todoToCheck: ITodo) {
    const status = todoToCheck.status === TodoStatus.TODO ? TodoStatus.DONE : TodoStatus.TODO;
    return this.http.patch(`${BASE_URL}/${todoToCheck.id}.json`, {status})
  }

  static createNewTodo(name: string): ITodo {
    return {
      id: '',
      name,
      status: TodoStatus.TODO
    };
  }
}
