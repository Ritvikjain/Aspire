export interface IWeeklySpendingLimitState {
  value: number,
  isEnabled: boolean,
}

export interface ICardData {
  userName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
}

export interface ICardLimits {
  currentSpends: number;
  availableBalance: number;
}