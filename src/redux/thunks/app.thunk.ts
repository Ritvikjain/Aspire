import { showWeeklySpendingLimit } from "../../navigation/navigators";
import { setWeeklySpendingLimit } from "../actions/app";
import { weeklySpendingLimitSelector } from "../selectors/app";
import store from "../store"

export const handleWeeklyLimitToogleClick = (componentId: string) => {
  try {
    const state = store.getState();
    const dispatch = store.dispatch;
    const currentLimitState = weeklySpendingLimitSelector(state);

    if(currentLimitState?.isEnabled) {
      dispatch(setWeeklySpendingLimit({
        value: currentLimitState?.value,
        isEnabled: false,
      }));
    } else {
      showWeeklySpendingLimit(componentId,{});
    }
  } catch (error) {
    
  }
}

export const saveWeeklyLimit = (limit: number, successCallback: Function) => {
  const dispatch = store.dispatch;
  try {
    // make an api call

    // save response in state
    dispatch(setWeeklySpendingLimit({
      value: limit,
      isEnabled: true,
    }));
    successCallback();
  } catch (error) {
    
  }
}