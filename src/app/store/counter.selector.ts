import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

//create store instance
export const selectCounterState = (state: AppState) => state.counter;
export const selectLoggedUserData = (state: AppState) => state.loggedUserData;

//read data from store

export const selectCounter = createSelector(
  selectCounterState,
  (state) => state.count
);
