import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ToDoItem } from '@todo-models';
import { Observable } from 'rxjs';
import ToDoState from '@states/todo';
import { Store, select } from '@ngrx/store';

import * as fromTodoSelectors from '@selectors/todo';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DayTodoListResolverService implements Resolve<ToDoItem[]> {
    constructor(
        private router: Router,
        private store: Store<ToDoState>
    ) {}
        
    resolve(route: ActivatedRouteSnapshot): Observable<ToDoItem[]> | Observable<never> {
        console.log('month in resolver...');
        console.log(route.paramMap.get('monthNumber'));

        console.log('month in resolver...');
        console.log(route.paramMap.get('dayNumber'));

        return this.store.pipe(
            select(fromTodoSelectors.selectTodosByMonthAndDay, { month : +route.paramMap.get('monthNumber'), day : +route.paramMap.get('dayNumber') }),
            take(1),
            map(todo => {
                if (todo != null) return todo;
                else {
                    this.router.navigate(['../']);
                    return null;
                }
            })
        );
    }
}
