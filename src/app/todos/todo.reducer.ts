import { createReducer, on } from '@ngrx/store';
import { cleanCompleted, create, edit, remove, toggle, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo('Save the world'),
    new Todo('Study'),
    new Todo('Read',true),
    new Todo('Eat'),
];

export const todoReducer = createReducer(
    initialState,
    on(create, (state, { text }) => [...state, new Todo(text)]),
    on(toggle, (state, { id }) => {
        return state.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            } else {
                return item;
            }
        })
    }),
    on(edit, (state, { id, text }) => {
        return state.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    text: text
                }
            } else {
                return item;
            }
        })
    }),
    on(remove, (state, { id }) => {
        return state.filter(item => item.id !== id)
    }),
    on(toggleAll, (state, { completed }) => {
        return state.map(item => {
            return {
                ...item,
                completed: completed
            }
        })
    }),
    on(cleanCompleted, (state) => {
        return state.filter(item => item.completed === false )
    }),

);
