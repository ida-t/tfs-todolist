import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counterValue;

  @Output()
  counterChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  increase() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }

  decrease() {
    this.counterValue = Math.max(this.counterValue - 1, 0);
    this.counterChange.emit(this.counterValue);
  }

}
