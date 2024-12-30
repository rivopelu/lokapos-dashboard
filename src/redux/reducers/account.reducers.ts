import { TOP_ALERT_ENUM } from '../../enums/top-alert-enum.ts';
import { IResGetMe } from '../../models/response/IResGetMe.ts';
import { BasePayload, IPayloadData } from '../../models/response/IResModel.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAccountSlice {
  getMe?: IPayloadData<IResGetMe>;
  topAlertShow?: TOP_ALERT_ENUM;
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
  },
});
