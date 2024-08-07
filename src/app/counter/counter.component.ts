import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { selectCount } from '../states/counter/counter.selector';
import { decrement, increament, reset } from '../states/counter/counter.action'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count$:any;
  constructor(private store: Store<AppState>){
    this.count$ = this.store.select(selectCount);
  }
  increment(){
    this.store.dispatch(increament())
  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }
}
