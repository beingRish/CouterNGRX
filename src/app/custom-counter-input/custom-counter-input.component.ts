import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { changeChannelName, customincrement } from '../states/counter/counter.action';
import { selectChannel } from '../states/counter/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent {
  value!: number;
  channelName$!: Observable<any>;
  constructor(private store: Store<{ count: AppState }>) {
    this.channelName$ = this.store.select(selectChannel)
  }
  onChangeChannel() {
    this.store.dispatch(changeChannelName());
  }
  onAdd() {
    this.store.dispatch(customincrement({ count: +this.value }));
    console.log(this.value);
  }
}
