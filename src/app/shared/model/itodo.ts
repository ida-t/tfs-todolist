import {TodoStatus} from "../constants/todo-status.enum";

export interface ITodo {
  id: string;
  name: string;
  status: TodoStatus;
  time?: Date;
}
