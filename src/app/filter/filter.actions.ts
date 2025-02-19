import { createAction, props } from '@ngrx/store';

export type validFilters = 'all' | 'active' | 'completed'

export const setFilter = createAction(
    '[Filter] Set Filter',
    props<{ filter : validFilters}>()
);