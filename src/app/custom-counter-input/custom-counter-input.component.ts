import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { changeChannelName, customincrement } from '../states/counter/counter.action';
import { selectChannel } from '../states/counter/counter.selector';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value!: number;
  channelName!: any;

  constructor(private store: Store<{ count: AppState }>) {

    this.store.select(selectChannel).subscribe(channelName => {
      console.log('Channel Name Observable called');
      this.channelName = channelName;

    })
  }

  ngOnInit(): void {
  }

  onChangeChannel() {
    this.store.dispatch(changeChannelName());
  }


  onAdd() {
    this.store.dispatch(customincrement({ count: +this.value }));
    console.log(this.value);
  }

}
