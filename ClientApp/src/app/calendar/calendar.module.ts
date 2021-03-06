import { NgModule } from '@angular/core';

import { CalendarRoutingModule } from './calendar-routing.module';
import { MonthComponent } from './components/month/month.component';
import { DayComponent } from './components/day/day.component';
import { CalendarComponent } from './calendar.component';
import { SharedModule } from '../shared/shared.module';
import { ToDosModule } from 'app/to-dos/to-dos.module';
import { StoreModule } from '@ngrx/store';

import { CALENDAR_FEATURE_KEY } from '@states/calendar';
import * as fromCalendarReducers from '@reducers/calendar';
import { EffectsModule } from '@ngrx/effects';
import { CalendarEffects } from 'app/store/effects/calendar.effects';
import { AuthModule } from 'app/auth/auth.module';

@NgModule({
	declarations: [
		MonthComponent,
		DayComponent,
		CalendarComponent,
	],
	imports: [
		StoreModule.forFeature(CALENDAR_FEATURE_KEY, fromCalendarReducers.calendarReducer),
		EffectsModule.forFeature([CalendarEffects]),
		CalendarRoutingModule,
		SharedModule,
		AuthModule,
		ToDosModule
	],
	exports: [
		MonthComponent,
		ToDosModule,
		AuthModule
	]
})
export class CalendarModule { }
