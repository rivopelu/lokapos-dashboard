import { Dispatch } from '@reduxjs/toolkit';
import BaseActions from '../base-actions';
import { AreaSlice } from '../reducers/area.reducer';
import { ENDPOINT } from '../../constants/endpoint';
import { BaseResponse } from '../../models/response/IResModel';
import { IResArea } from '../../models/response/IResArea';

export class AreaAction extends BaseActions {
  private action = AreaSlice.actions;

  getProvince() {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.getProvice({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.GET_LIST_PROVINCE())
        .then((res: BaseResponse<IResArea[]>) => {
          dispatch(this.action.getProvice({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.action.getProvice({ loading: false, data: undefined }));
        });
    };
  }

  getCity(id: number) {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.getCity({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.GET_LIST_CITY(id))
        .then((res: BaseResponse<IResArea[]>) => {
          dispatch(this.action.getCity({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.action.getCity({ loading: false, data: undefined }));
        });
    };
  }
}
