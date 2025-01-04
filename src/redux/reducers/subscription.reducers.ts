import { createSlice } from '@reduxjs/toolkit';
import {
  BasePayload,
  BasePayloadPaginated,
  IPayloadData,
  IPayloadDataPaginated,
} from '../../models/response/IResModel';
import { IResSubscriptionPackage } from '../../models/response/IResSubscriptionPackage';
import { IResListOrderSubscription } from '../../models/response/IResListOrderSubscription';
import { IResDetailSubscriptionOrder } from '../../models/response/IResDetailSubscriptionOrder';

export interface ISubscriptionSlice {
  listSubscriptionPackage?: IPayloadData<IResSubscriptionPackage[]>;
  listOrderSubscription?: IPayloadDataPaginated<IResListOrderSubscription[]>;
  detailSubscrptionOrder?: IPayloadData<IResDetailSubscriptionOrder>;
}

const initState: ISubscriptionSlice = {};

export const SubscriptionSlice = createSlice({
  name: 'subscription',
  initialState: initState,
  reducers: {
    listSubscriptionPackage: (state: ISubscriptionSlice, action: BasePayload<IResSubscriptionPackage[]>) => {
      state.listSubscriptionPackage = action.payload;
    },
    listOrderSubscription: (state: ISubscriptionSlice, action: BasePayloadPaginated<IResListOrderSubscription[]>) => {
      state.listOrderSubscription = action.payload;
    },
    detailSubscription: (state: ISubscriptionSlice, action: BasePayload<IResDetailSubscriptionOrder>) => {
      state.detailSubscrptionOrder = action.payload;
    },
  },
});
