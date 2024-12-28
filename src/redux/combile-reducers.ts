import { accountSlice } from './reducers/account.reducers.ts';

export const combineReducers: any = {
  Account: accountSlice.reducer,
};
