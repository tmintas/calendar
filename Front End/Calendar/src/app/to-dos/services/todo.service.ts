import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take, map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToDoItem } from '@todo-models';
import { TodoItemDto } from '../models/to-do-item-dto.model';
import { DropdownOption } from 'app/shared/models/dropdown-option.model';
import { Importance } from '../enums/importance.enum';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type':  'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class TodoService {

	constructor(private http : HttpClient) {}

	public GetAll() : Observable<ToDoItem[]> {
		// TODO get viewmodels instead of dtos
		return this.http.get<TodoItemDto[]>('http://localhost:3000/todos').pipe(
			map(dtos => dtos.map(dto => ToDoItem.GetFromDto(dto)),
			take(1),
		));
	}

	public CreateTodo(item : ToDoItem) : Observable<ToDoItem> {
		return this.http.post<TodoItemDto>('http://localhost:3000/todos', ToDoItem.MapToDto(item), httpOptions).pipe(
			map((itemDto) => {
				item.Id = itemDto.id; 
				return item;
			}),
			catchError((err) => of(err))
		);
	}

	public DeleteTodo(id : number) : Observable<{}> {
		const url = `http://localhost:3000/todos/${id}`;

		return this.http.delete(url);
	}

	public Update(id : number, updateModel : ToDoItem) : Observable<ToDoItem> {
		const url = `http://localhost:3000/todos/${id}`;

		return this.http.put<TodoItemDto>(url, ToDoItem.MapToDto(updateModel), httpOptions).pipe(
			map(dto => ToDoItem.GetFromDto(dto))
		);
	}

	public GetImportanceOptions() : DropdownOption[] {
		return [
			{ Value : Importance.Low, DisplayName : "Low" },
			{ Value : Importance.Middle, DisplayName : "Middle" },
			{ Value : Importance.High, DisplayName : "High" }
		]
	}
}
