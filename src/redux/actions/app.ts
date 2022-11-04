import { ICardData, ICardLimits, IWeeklySpendingLimitState } from '../../constants/types';
import { ACTION_TYPES } from './actionTypes';

const setWeeklySpendingLimit = (data: IWeeklySpendingLimitState) => ({
  type: ACTION_TYPES.APP.WEEKLY_SPENDING_LIMIT,
  data
});

const setCardData = (data: ICardData) => ({
  type: ACTION_TYPES.APP.CARD_DATA,
  data
});

const setCardLimits = (data: ICardLimits) => ({
  type: ACTION_TYPES.APP.CARD_LIMITS,
  data
});

export {
  setWeeklySpendingLimit,
  setCardData,
  setCardLimits,
}