import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

const getCounter = createFeatureSelector<AppState>('counter')

export const selectCount = createSelector(
    getCounter,
    (state) => state.counter
)

export const selectChannel = createSelector(
    getCounter, 
    (state) => state.channelName
)