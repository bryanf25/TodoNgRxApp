import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions'

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})

export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputReal') txtInputReal!: ElementRef;


  chkCompleted!: FormControl;
  txtEdited!: FormControl;
  editing: boolean = false

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtEdited = new FormControl(this.todo.text, Validators.required)

    this.chkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }))
    })
  }

  edit() {
    this.editing = true;
    this.txtEdited.setValue(this.todo.text);
    setTimeout(() => {
      this.txtInputReal.nativeElement.select()
    }, 1);
  }

  finishEdit() {
    this.editing = false

    if(this.txtEdited.invalid){return}
    if(this.txtEdited.value === this.todo.text){return}

    this.store.dispatch(actions.edit({
      id: this.todo.id,
      text: this.txtEdited.value
    }))}

    remove(){
      this.store.dispatch(actions.remove({id: this.todo.id}))
    }


}
