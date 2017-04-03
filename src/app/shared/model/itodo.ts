import {TodoStatus} from "../constants/todo-status.enum";

export interface ITodo {
  name: string;
  status: TodoStatus;
  time?: Date;
}
