import { Dispatch } from '@reduxjs/toolkit';
import BaseActions from '../base-actions';
import { SubscriptionSlice } from '../reducers/subscription.reducers';
import { ENDPOINT } from '../../constants/endpoint';
import { BaseResponse, BaseResponsePaginated } from '../../models/response/IResModel';
import { IResSubscriptionPackage } from '../../models/response/IResSubscriptionPackage';
import { IResListOrderSubscription } from '../../models/response/IResListOrderSubscription';
import { endOfDay } from 'date-fns';
import { IResDetailSubscriptionOrder } from '../../models/response/IResDetailSubscriptionOrder';

export class SubscriptionActions extends BaseActions {
  private actions = SubscriptionSlice.actions;

  getDetailSubscriptionOrder(orderId: string) {
    return async (dispatch: Dispatch) => {
      dispatch(this.actions.detailSubscription({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.GET_DETAIL_SUBSCRIPTION(orderId))
        .then((res: BaseResponse<IResDetailSubscriptionOrder>) => {
          dispatch(this.actions.detailSubscription({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.actions.detailSubscription({ loading: false, data: undefined }));
        });
    };
  }

  getOrderSubscription() {
    return async (dispatch: Dispatch) => {
      dispatch(this.actions.listOrderSubscription({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.GET_ORDER_SUBSCRIPTION())
        .then((res: BaseResponsePaginated<IResListOrderSubscription[]>) => {
          dispatch(
            this.actions.listOrderSubscription({
              data: res.data.response_data,
              paginated_data: res.data.paginated_data,
              loading: false,
            }),
          );
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.actions.listOrderSubscription({ loading: false, data: undefined }));
        });
    };
  }

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
