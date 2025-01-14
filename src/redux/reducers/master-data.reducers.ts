import { createSlice } from '@reduxjs/toolkit';
import { IResListMerchant } from '../../models/response/IResListMerchant';
import { BasePayload, IPayloadData } from '../../models/response/IResModel';
import { IResListCategories } from '../../models/response/IResListCategories';
import { IResListMenu } from '../../models/response/IResListMenu';
import { IResDetailMenu } from '../../models/response/IResDetailMenu.ts';

export interface IMasterDataSlice {
  listMerchant?: IPayloadData<IResListMerchant[]>;
  listCategories?: IPayloadData<IResListCategories[]>;
  listMenu?: IPayloadData<IResListMenu[]>;
  detailMenu?: IPayloadData<IResDetailMenu>;
}

const initState: IMasterDataSlice = {};

export const masterDataSlice = createSlice({
  name: 'master-data',
  initialState: initState,
  reducers: {
    listMerchant: (state: IMasterDataSlice, action: BasePayload<IResListMerchant[]>) => {
      state.listMerchant = action.payload;
    },
    listCategories: (state: IMasterDataSlice, action: BasePayload<IResListCategories[]>) => {
      state.listCategories = action.payload;
    },
    listMenu: (state: IMasterDataSlice, action: BasePayload<IResListMenu[]>) => {
      state.listMenu = action.payload;
    },
    detailMenu: (state: IMasterDataSlice, action: BasePayload<IResDetailMenu>) => {
      state.detailMenu = action.payload;
    },
  },
});
