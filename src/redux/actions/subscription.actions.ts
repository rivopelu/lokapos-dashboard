import { Dispatch } from '@reduxjs/toolkit';
import BaseActions from '../base-actions';
import { SubscriptionSlice } from '../reducers/subscription.reducers';
import { ENDPOINT } from '../../constants/endpoint';
import { BaseResponse } from '../../models/response/IResModel';
import { IResSubscriptionPackage } from '../../models/response/IResSubscriptionPackage';

export class SubscriptionActions extends BaseActions {
  private actions = SubscriptionSlice.actions;

  getSubscriptionList() {
    return async (dispatch: Dispatch) => {
      dispatch(this.actions.listSubscriptionPackage({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.LIST_SUBSCRIPTION())
        .then((res: BaseResponse<IResSubscriptionPackage[]>) => {
          dispatch(this.actions.listSubscriptionPackage({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.actions.listSubscriptionPackage({ loading: false, data: undefined }));
        });
    };
  }
}
