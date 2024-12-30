import BaseActions from '../base-actions.ts';
import { Dispatch } from '@reduxjs/toolkit';
import { accountSlice } from '../reducers/account.reducers.ts';
import { ENDPOINT } from '../../constants/endpoint.ts';
import { BaseResponse } from '../../models/response/IResModel.ts';
import { IResGetMe } from '../../models/response/IResGetMe.ts';

export class AccountActions extends BaseActions {
  private actions = accountSlice.actions;
  getMe() {
    return async (dispatch: Dispatch) => {
      dispatch(this.actions.getMe({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.GET_ME())
        .then((res: BaseResponse<IResGetMe>) => {
          dispatch(this.actions.getMe({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.actions.getMe({ loading: false, data: undefined }));
        });
    };
  }
}
