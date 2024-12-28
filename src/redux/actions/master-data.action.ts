import { Dispatch } from '@reduxjs/toolkit';
import BaseActions from '../base-actions';
import { masterDataSlice } from '../reducers/master-data.reducers';
import { ENDPOINT } from '../../constants/endpoint';
import { BaseResponse } from '../../models/response/IResModel';
import { IResListMerchant } from '../../models/response/IResListMerchant';

export class MasterDataAction extends BaseActions {
  private action = masterDataSlice.actions;

  getListMerchant() {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.listMerchant({ loading: false, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.LIST_MERCHANT())
        .then((res: BaseResponse<IResListMerchant[]>) => {
          dispatch(this.action.listMerchant({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.action.listMerchant({ loading: false, data: undefined }));
        });
    };
  }
}
