import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { validFilters } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  todos : Todo[] = []
  currentFilter!: validFilters;
  
  constructor(private store : Store<AppState>){}


  ngOnInit(): void {
    this.store.select('todos')
    .subscribe( todos => this.todos = todos );
    this.store.subscribe(({todos,filter}) => {
      this.todos = todos
      this.currentFilter = filter
    })
  }
}
