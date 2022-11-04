import { IWeeklySpendingLimitState } from '../../constants/types';
import { ACTION_TYPES } from './actionTypes';

const setWeeklySpendingLimit = (data: IWeeklySpendingLimitState) => ({
  type: ACTION_TYPES.APP.WEEKLY_SPENDING_LIMIT,
  data
});

export {
  setWeeklySpendingLimit,
}