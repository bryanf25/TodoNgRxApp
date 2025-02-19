import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { validFilters } from '../filter/filter.actions';

@Pipe({
  name: 'filter',
  standalone: false
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters) {

    switch (filter) {
      case 'completed':
        return todos.filter(todos => todos.completed)
      case 'active':
        return todos.filter(todos => !todos.completed)
      default:
        return todos;
    }

  }

}
