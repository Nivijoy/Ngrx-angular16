import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { selectCounter, selectCounterState } from './store/counter.selector';
import { decrement, increment } from './store/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter$: Observable<number> = new Observable<number>();

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(selectCounter);
  }
  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
