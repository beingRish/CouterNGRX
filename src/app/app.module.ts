import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    provideStore(),
    provideState({name: 'counter', reducer: counterReducer})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
