import { createReducer, on } from '@ngrx/store'
import { changeChannelName, customincrement, decrement, increament, reset } from './counter.action'

export interface CounterState {
    counter : number,
    channelName: string
}

export const initialCounterState: CounterState = {
    counter: 0,
    channelName: 'Leela Web Dev'
}

export const counterReducer = createReducer(
    initialCounterState,
    on(increament, state => ({...state, counter: state.counter + 1})),
    on(decrement, state => ({...state, counter: state.counter - 1})),
    on(reset, state => ({...state, counter: 0})),
    on(customincrement, (state, action) => ({...state, counter:  state.counter + action.count})),
    on(changeChannelName, (state) => ({...state, channelName: 'Modified Leela Web Dev'}))
)