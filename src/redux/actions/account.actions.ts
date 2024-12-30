import BaseActions from '../base-actions.ts';
import { Dispatch } from '@reduxjs/toolkit';
import { accountSlice } from '../reducers/account.reducers.ts';
import { ENDPOINT } from '../../constants/endpoint.ts';
import { BaseResponse } from '../../models/response/IResModel.ts';
import { IResGetMe } from '../../models/response/IResGetMe.ts';
import { TOP_ALERT_ENUM } from '../../enums/top-alert-enum.ts';

export class AccountActions extends BaseActions {
  private actions = accountSlice.actions;
  getMe() {
    return async (dispatch: Dispatch) => {
      dispatch(this.actions.getMe({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.GET_ME())
        .then((res: BaseResponse<IResGetMe>) => {
          if (!res?.data?.response_data?.is_verified_email) {
            dispatch(this.actions.topAlertShow(TOP_ALERT_ENUM.VERIFIED_EMAIL));
          }
          dispatch(this.actions.getMe({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.actions.getMe({ loading: false, data: undefined }));
        });
    };
  }

  setTopAlert(en?: TOP_ALERT_ENUM) {
    return async (dispatch: Dispatch) => {
      dispatch(this.actions.topAlertShow(en));
    };
  }
}
