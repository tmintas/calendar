import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODO_FEATURE_KEY, TodosState, adapter, todoSortFunc, todoSortDone, TODO_MAX_ITEMS_DOR_DAY } from '@states/todo';
import * as fromRouterState from '@states/router';
import { Todo } from '@todo-models';
import { CustomRouterReducerState } from '@states/router';

export const selectFeature = createFeatureSelector<TodosState>(TODO_FEATURE_KEY);
export const selectRouteFeature = createFeatureSelector<CustomRouterReducerState>(fromRouterState.ROUTER_FEATURE_KEY);
const {
	selectAll,
	selectTotal,
} = adapter.getSelectors();
  
export const selectAllTodos = createSelector(
	selectFeature,
	selectAll
  );

export const selectTodoTotal = selectTotal;

export const selectTodosByDate = createSelector(
	selectAllTodos,
	(state : Todo[], props : { date : Date }) => {
		if (!state.length) return [];
		return state
			.filter(i => {
				return i.Date && 
					i.Date.getFullYear() === props.date.getFullYear() && 
					i.Date.getMonth() === props.date.getMonth() && 
					i.Date.getDate() === props.date.getDate();
			})
			.sort((next, prev) => todoSortFunc(next, prev))
			.sort((next, prev) => todoSortDone(next, prev))
			.map((el, i) => {
				if (i > TODO_MAX_ITEMS_DOR_DAY) {
					return { ...el, Visible : false }
				}

				return el;
			});
	}
);

export const selectById = createSelector(
	selectAllTodos,
	(items : Todo[], props : { id : number }) => items.find(i => i.id === props.id)
);

export const isLoading = createSelector(
	selectFeature,
	(state : TodosState) => state.isLoading
);

export const loadingMessage = createSelector(
	selectFeature,
	(state : TodosState) => state.loadingMessage
);

export const selectImportanceOptions = createSelector(
	selectFeature,
	(state : TodosState) => state.importanceOptions
);
