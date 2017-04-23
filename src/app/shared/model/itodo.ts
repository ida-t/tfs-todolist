import {TodoStatus} from "../constants/todo-status.enum";

export interface ITodo {
  key?: string;
  name: string;
  status: TodoStatus;
  time?: Date;
}
