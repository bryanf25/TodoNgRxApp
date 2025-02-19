import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions'

@Component({
  selector: 'app-todo-page',
  standalone: false,
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent implements OnInit {

  completed: boolean = false;

  constructor(private store: Store<AppState>) { }
  
  ngOnInit(): void {
  }

  toggleAll() {
    this.completed = !this.completed
    this.store.dispatch(actions.toggleAll({ completed: this.completed }))
  }
}
