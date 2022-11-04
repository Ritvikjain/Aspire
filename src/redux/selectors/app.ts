import { createSelector } from "reselect";
import {RootState} from '../reducers/types/rootState.types';

export const appSliceSelector = (state: RootState) => state.app || {};

export const bottomTabsSelector = createSelector(appSliceSelector, appState => appState && appState.bottomTabs || []);

export const weeklySpendingLimitSelector = createSelector(appSliceSelector, appState => appState && appState.weeklySpendingLimit || {});

export const cardDataSelector = createSelector(appSliceSelector, appState => appState && appState.cardData || {});

export const cardLimitsSelector = createSelector(appSliceSelector, appState => appState && appState.cardLimits || {});