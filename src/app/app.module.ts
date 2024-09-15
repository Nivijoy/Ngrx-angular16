import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { reducer } from './store/counter.reducer';

@NgModule({
  imports: [BrowserModule, StoreModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    provideStore(),
    provideState({ name: 'counter', reducer: reducer }),
  ],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
