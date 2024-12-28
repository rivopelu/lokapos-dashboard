import { createSlice } from '@reduxjs/toolkit';
import { BasePayload, IPayloadData } from '../../models/response/IResModel';
import { IResSubscriptionPackage } from '../../models/response/IResSubscriptionPackage';

export interface ISubscriptionSlice {
  listSubscriptionPackage?: IPayloadData<IResSubscriptionPackage[]>;
}

const initState: ISubscriptionSlice = {};

export const SubscriptionSlice = createSlice({
  name: 'subscription',
  initialState: initState,
  reducers: {
    listSubscriptionPackage: (state: ISubscriptionSlice, action: BasePayload<IResSubscriptionPackage[]>) => {
      state.listSubscriptionPackage = action.payload;
    },
  },
});
