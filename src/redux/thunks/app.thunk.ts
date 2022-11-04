import { APIStatus } from "../../constants";
import { showWeeklySpendingLimit } from "../../navigation/navigators";
import { AppService } from "../../service/network/appService.ts";
import { setCardData, setCardLimits, setWeeklySpendingLimit } from "../actions/app";
import { cardDataSelector, weeklySpendingLimitSelector } from "../selectors/app";
import store from "../store"

export const loadInitialData = async () => {
  const state = store.getState();
  const dispatch = store.dispatch;
  try {
    const response = await AppService.initialData({
      userId: "1"
    });
    dispatch(setCardData(response?.cardData));
    dispatch(setCardLimits({
      currentSpends: parseInt(response?.cardLimits?.currentSpends),
      availableBalance: parseInt(response?.cardLimits?.availableBalance),
    }));
    dispatch(setWeeklySpendingLimit({
      value: parseInt(response?.cardLimits?.maxLimit),
      isEnabled: parseInt(response?.cardLimits?.maxLimit) > 0,
    }));
    return {
      status: APIStatus.SUCCESS
    };
  } catch (error) {
    // Setting default value in case Mock server fails
    dispatch(setCardData({
      userName: "Mark Henry",
      cardNumber: "1234123412341234",
      expDate: "12/23",
      cvv: "123"
    }));
    dispatch(setCardLimits({
      currentSpends: 500,
      availableBalance: 3000,
    }));
    dispatch(setWeeklySpendingLimit({
      value: 0,
      isEnabled: false,
    }));
    return {
      status: APIStatus.SUCCESS
    };
  }
}

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