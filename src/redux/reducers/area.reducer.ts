import { createSlice } from '@reduxjs/toolkit';
import { IResArea } from '../../models/response/IResArea';
import { BasePayload, IPayloadData } from '../../models/response/IResModel';

export interface IAreaSlice {
  listProvince?: IPayloadData<IResArea[]>;
  listCity?: IPayloadData<IResArea[]>;
  listDistrict?: IPayloadData<IResArea[]>;
  listSubDistrict?: IPayloadData<IResArea[]>;
}

const initValue: IAreaSlice = {};

export const AreaSlice = createSlice({
  initialState: initValue,
  name: 'area',
  reducers: {
    getProvice: (state: IAreaSlice, action: BasePayload<IResArea[]>) => {
      state.listProvince = action.payload;
    },
    getCity: (state: IAreaSlice, action: BasePayload<IResArea[]>) => {
      state.listCity = action.payload;
    },
    getDistrict: (state: IAreaSlice, action: BasePayload<IResArea[]>) => {
      state.listDistrict = action.payload;
    },
    getSubDistrict: (state: IAreaSlice, action: BasePayload<IResArea[]>) => {
      state.listSubDistrict = action.payload;
    },
  },
});
