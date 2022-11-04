import { ACTION_TYPES } from '../actions/actionTypes';
import { State } from './types/app.types';

const initialState = {
  bottomTabs: [{tabTitle: 'home', displayName: 'Home', isActive: false},{tabTitle: 'card', displayName: 'Debit Card', isActive: true},{tabTitle: 'payments', displayName: 'Payments', isActive: false},{tabTitle: 'credit', displayName: 'Credit', isActive: false},{tabTitle: 'profile', displayName: 'Profile', isActive: false}],
  weeklySpendingLimit: {
    value:0,
    isEnabled: false,
  },
};

const reducer = (state: State = initialState, action: {type: string, data: any}) => {
  switch (action.type) {
    case ACTION_TYPES.APP.BOTTOM_TABS:
      return {
        ...state,
        bottomTabs: action.data
      }
    case ACTION_TYPES.APP.WEEKLY_SPENDING_LIMIT:
      return {
        ...state,
        weeklySpendingLimit: action.data
      }
    default:
      return state;
  }
};

export default reducer;
