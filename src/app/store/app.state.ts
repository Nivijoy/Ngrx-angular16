import { CounterState } from './counter.reducer';

// Store interface

export interface AppState {
  counter: CounterState;
  loggedUserData: any;
  // cityList:any[];
}
