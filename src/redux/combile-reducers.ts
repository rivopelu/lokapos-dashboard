import { accountSlice } from './reducers/account.reducers.ts';
import { masterDataSlice } from './reducers/master-data.reducers.ts';
import { SubscriptionSlice } from './reducers/subscription.reducers.ts';

export const combineReducers: any = {
  Account: accountSlice.reducer,
  Subscription: SubscriptionSlice.reducer,
  MasterData: masterDataSlice.reducer,
};
