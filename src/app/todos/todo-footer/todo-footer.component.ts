import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actionsFilter from '../../filter/filter.actions';
import * as actionsTodo from '../../todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  standalone: false,
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit {

  currentFilter: actionsFilter.validFilters = 'all'
  filters: actionsFilter.validFilters[] = ['all','active','completed']
  pendingTaskCount: number = 0;

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    this.store.subscribe(state => {
      this.currentFilter = state.filter
      this.pendingTaskCount = state.todos.filter(todo => !todo.completed).length
    })
  }

  setFilter(filterSelected : actionsFilter.validFilters){
    this.store.dispatch(actionsFilter.setFilter({filter: filterSelected}))
  }

  clear(){
    this.store.dispatch(actionsTodo.cleanCompleted())
  }
}
