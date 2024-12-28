import { accountSlice } from './reducers/account.reducers.ts';
import { SubscriptionSlice } from './reducers/subscription.reducers.ts';

export const combineReducers: any = {
  Account: accountSlice.reducer,
  Subscription: SubscriptionSlice.reducer,
};
