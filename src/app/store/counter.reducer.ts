import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.action';

export interface CounterState {
  count: number;
}

export const initialCount: CounterState = {
  count: 0,
};

export const reducer = createReducer(
  initialCount,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 }))
);
