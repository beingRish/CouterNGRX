import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

const selectCounterState = createFeatureSelector<AppState>('counter')

export const selectCount = createSelector(
    selectCounterState,
    (state) => state.counter
)

export const selectChannel = createSelector(
    selectCounterState, 
    (state) => state.channelName
)