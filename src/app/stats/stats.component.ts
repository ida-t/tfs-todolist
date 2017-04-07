import {Component, OnInit, Input} from '@angular/core';
import {ITodo} from "../shared/model/itodo";
import {TodoStatus} from "../shared/constants/todo-status.enum";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input() todos: ITodo[];

  constructor() {
  }

  ngOnInit() {

  }

  // counter = 0;

  get total() {
    // console.log(this.counter++);
    return this.todos.length;
  }

  get todo() {
    return this.todos.filter(
      ({status}) => status === TodoStatus.TODO
    ).length;
  }

  get done() {
    return this.total - this.todo;
  }

}
