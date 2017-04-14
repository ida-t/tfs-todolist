import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {StatsComponent} from './stats/stats.component';
import {FiltersComponent} from './filters/filters.component';
import {Example1Component} from './di/example1/example1.component';
import {Example2Component} from './di/example2/example2.component';
import {DiSharedService} from "./di/di-shared.service";
import {DiNestedService} from "./di/di-nested.service";
import {TodosService} from "./shared/model/todos.service";
import {TodosAsyncService} from "./shared/model/todos-async.service";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodoListComponent,
    TodoItemComponent,
    StatsComponent,
    FiltersComponent,
    Example1Component,
    Example2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DiSharedService,
    DiNestedService,
    TodosService,
    TodosAsyncService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
