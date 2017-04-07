import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Filter} from "../shared/constants/filter.enum";


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() currentFilter: Filter;
  @Output() filterChange = new EventEmitter();

  constructor() {
  }

  filter = Filter;

  ngOnInit() {
  }

  isActive(value: Filter) {
    return this.currentFilter === value;
  }

  setFilter(value: Filter) {
    // this.currentFilter = value;
    this.filterChange.emit(value);
  }

}
