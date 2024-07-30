import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { customincrement } from '../states/counter/counter.action';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent {

  constructor(private store: Store<{ count: AppState }>){}

  value!: number;

  onAdd() {
    this.store.dispatch(customincrement({ count: +this.value }));
    console.log(this.value);
  }

}
