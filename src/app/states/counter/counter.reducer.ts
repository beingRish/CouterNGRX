import { createReducer, on } from '@ngrx/store'
import { changeChannelName, customincrement, decrement, increament, reset } from './counter.action'

export interface CounterState {
    count : number,
    channelName: string
}

export const initialCounterState: CounterState = {
    count: 0,
    channelName: 'Leela Web Dev'
}

export const counterReducer = createReducer(
    initialCounterState,
    on(increament, state => ({...state, count: state.count + 1})),
    on(decrement, state => ({...state, count: state.count - 1})),
    on(reset, state => ({...state, count: 0})),
    on(customincrement, (state, action) => ({...state, count:  state.count + action.count})),
    on(changeChannelName, (state) => ({...state, channelName: 'Modified Leela Web Dev'}))

)