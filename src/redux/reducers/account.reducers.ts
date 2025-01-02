import { TOP_ALERT_ENUM } from '../../enums/top-alert-enum.ts';
import { IResGetMe } from '../../models/response/IResGetMe.ts';
import { IResListAccount } from '../../models/response/IResListAccount.ts';
import {
  BasePayload,
  BasePayloadPaginated,
  IPayloadData,
  IPayloadDataPaginated,
} from '../../models/response/IResModel.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAccountSlice {
  getMe?: IPayloadData<IResGetMe>;
  topAlertShow?: TOP_ALERT_ENUM;
  listAccont?: IPayloadDataPaginated<IResListAccount[]>;
}

const initialState: IAccountSlice = {};

export const accountSlice = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    getMe: (state: IAccountSlice, action: BasePayload<IResGetMe>) => {
      state.getMe = action.payload;
    },
    topAlertShow: (state: IAccountSlice, action: PayloadAction<TOP_ALERT_ENUM | undefined>) => {
      state.topAlertShow = action.payload;
    },
    listAccount: (state: IAccountSlice, action: BasePayloadPaginated<IResListAccount[]>) => {
      state.listAccont = action.payload;
    },
  },
});
