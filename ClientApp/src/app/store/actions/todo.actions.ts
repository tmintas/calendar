import { createAction, props } from '@ngrx/store';
import { ToDoItem } from 'app/to-dos/models/to-do-item.model';
import { DropdownOption } from 'app/shared/models/dropdown-option.model';

export const enum TodoActionTypes {
	LOAD_TODOS_ALL = '[Todo] LoadAll',
	LOAD_TODOS_ALL_SUCCESS = '[Todo] LoadAllSuccess',
	LOAD_TODOS_ALL_FAIL = '[Todo] LoadAllFail',

	LOAD_TODOS_MONTH = '[Todo] LoadMonth',
	LOAD_TODOS_MONTH_SUCCESS = '[Todo] LoadMonthSuccess',
	LOAD_TODOS_MONTH_FAIL = '[Todo] LoadMonthFail',
	LOAD_TODOS_DAY = '[Todo] LoadMonth',
	LOAD_TODOS_DAY_SUCCESS = '[Todo] LoadMonthSuccess',
	LOAD_TODOS_DAY_FAIL = '[Todo] LoadMonthFail',
	LOAD_TODO = '[Todo] LoadTodo',
	LOAD_TODO_SUCCESS = '[Todo] LoadTodoSuccess',
	LOAD_TODO_FAIL = '[Todo] LLoadTodoFail',
	DELETE_TODO_START = '[Todo] DeleteTodoStart',
	DELETE_TODO_SUCCESS = '[Todo] DeleteTodoSuccess',
	DELETE_TODO_FAIL = '[Todo] DeleteTodoFail',
	SUBMIT_TODO = '[Todo] Submit Todo',
	CREATE_TODO = '[Todo] CreateTodo',
	CREATE_TODO_SUCCESS = '[Todo] CreateTodoSuccess',
	CREATE_TODO_FAIL = '[Todo] CreateTodoFail',
	UPDATE_TODO_SUCCESS = '[Todo] LoadMonthSuccess',
	UPDATE_TODO_FAIL = '[Todo] LoadMonthFail',
	UPDATE_TODO = '[Todo] UpdateTodo',
	LOAD_IMPORTANCE = '[Todo] LoadImportance',
	LOAD_IMPORTANCE_SUCCESS = '[Todo] LoadImportanceSuccess'
}

export const LoadImportanceOptions = createAction(TodoActionTypes.LOAD_IMPORTANCE);
export const LoadImportanceOptionsSuccess = createAction(TodoActionTypes.LOAD_IMPORTANCE_SUCCESS, props<{ options : DropdownOption[] }>());

export const LoadTodosAll = createAction(TodoActionTypes.LOAD_TODOS_ALL);
export const LoadTodosAllSuccess = createAction(TodoActionTypes.LOAD_TODOS_ALL_SUCCESS, props<{items : ToDoItem[]}>());
export const LoadTodosAllFail = createAction(TodoActionTypes.LOAD_TODOS_ALL_FAIL, props<{ err : any }>());

export const SubmitTodo = createAction(TodoActionTypes.SUBMIT_TODO , props<{ item : ToDoItem }>());

export const CreateTodo = createAction(TodoActionTypes.CREATE_TODO , props<{ item : ToDoItem }>());
export const CreateTodoSuccess = createAction(TodoActionTypes.CREATE_TODO_SUCCESS , props<{ item : ToDoItem }>());
export const CreateTodoFail = createAction(TodoActionTypes.CREATE_TODO_FAIL , props<{ err : any }>());

export const UpdateTodo = createAction(TodoActionTypes.UPDATE_TODO, props<{ id : number, item : ToDoItem}>());
export const UpdateTodoSuccess = createAction(TodoActionTypes.UPDATE_TODO_SUCCESS, props<{ item : ToDoItem }>());
export const UpdateTodoFail = createAction(TodoActionTypes.UPDATE_TODO_FAIL, props<{ err : any }>());

export const DeleteTodoStart = createAction(TodoActionTypes.DELETE_TODO_START , props<{ id : number }>());
export const DeleteTodoSuccess = createAction(TodoActionTypes.DELETE_TODO_SUCCESS , props<{ id : number }>());
export const DeleteTodoFail = createAction(TodoActionTypes.DELETE_TODO_FAIL , props<{ err : any }>());
