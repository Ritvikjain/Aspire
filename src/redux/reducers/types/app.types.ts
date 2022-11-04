import { ICardData, ICardLimits, IWeeklySpendingLimitState } from "../../../constants/types";

export interface State {
  bottomTabs: Array<Object>;
  weeklySpendingLimit: IWeeklySpendingLimitState;
  cardData: ICardData;
  cardLimits: ICardLimits;
}
