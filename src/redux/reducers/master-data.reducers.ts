import { createSlice } from '@reduxjs/toolkit';
import { IResListMerchant } from '../../models/response/IResListMerchant';
import { BasePayload, IPayloadData } from '../../models/response/IResModel';

export interface IMasterDataSlice {
  listMerchant?: IPayloadData<IResListMerchant[]>;
}

const initState: IMasterDataSlice = {};

export const masterDataSlice = createSlice({
  name: 'master-data',
  initialState: initState,
  reducers: {
    listMerchant: (state: IMasterDataSlice, action: BasePayload<IResListMerchant[]>) => {
      state.listMerchant = action.payload;
    },
  },
});
