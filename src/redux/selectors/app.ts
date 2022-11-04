import { createSelector } from "reselect";

export const appSliceSelector = (state) => state.app || {};

export const bottomTabsSelector = createSelector(appSliceSelector, appState => appState && appState.bottomTabs || []);

export const weeklySpendingLimitSelector = createSelector(appSliceSelector, appState => appState && appState.weeklySpendingLimit || {});