import { createAction, props } from '@ngrx/store';
import { ToDoItem } from 'app/to-dos/models/to-do-item.model';

export const enum TodoActionTypes {
    ADD = '[Todo] Add',
    DELETE = '[Todo] Delete',
    LOAD_MONTH = '[Todo] LoadMonth',
    LOAD_MONTH_SUCCESS = '[Todo] LoadMonthSuccess',
    LOAD_MONTH_FAIL = '[Todo] LoadMonthFail',
    LOAD_DAY = '[Todo] LoadMonth',
    LOAD_DAY_SUCCESS = '[Todo] LoadMonthSuccess',
    LOAD_DAY_FAIL = '[Todo] LoadMonthFail',
    AddTodo = "AddTodo"
}

export const AddTodo = createAction(TodoActionTypes.ADD , props<{ item : ToDoItem }>());

export const DeleteTodo = createAction(TodoActionTypes.DELETE, props<{ id : number }>());

export const LoadMonthTodos = createAction(TodoActionTypes.LOAD_MONTH);
export const LoadMonthTodosSuccess = createAction(TodoActionTypes.LOAD_MONTH_SUCCESS, props<{ items : ToDoItem[] }>());
export const LoadMonthTodosFail = createAction(TodoActionTypes.LOAD_MONTH_FAIL, props<{ err : any }>());

export const LoadDayTodos = createAction(TodoActionTypes.LOAD_DAY);
export const LoadDayTodosSuccess = createAction(TodoActionTypes.LOAD_DAY_SUCCESS, props<{ items : ToDoItem[] }>());
export const LoadDayTodosFail = createAction(TodoActionTypes.LOAD_DAY_FAIL, props<{ err : any }>());