import { Dispatch } from '@reduxjs/toolkit';
import BaseActions from '../base-actions';
import { masterDataSlice } from '../reducers/master-data.reducers';
import { ENDPOINT } from '../../constants/endpoint';
import { BaseResponse } from '../../models/response/IResModel';
import { IResListMerchant } from '../../models/response/IResListMerchant';
import { IResListCategories } from '../../models/response/IResListCategories';
import { IResListMenu } from '../../models/response/IResListMenu';
import { IResDetailMenu } from '../../models/response/IResDetailMenu.ts';

export class MasterDataAction extends BaseActions {
  private action = masterDataSlice.actions;

  getDetailMenu(id: string) {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.detailMenu({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.DETAIL_MENU(id))
        .then((res: BaseResponse<IResDetailMenu>) => {
          dispatch(this.action.detailMenu({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.action.detailMenu({ loading: false, data: undefined }));
        });
    };
  }

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

  getListCategories() {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.listCategories({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.LIST_CATEGORIES())
        .then((res: BaseResponse<IResListCategories[]>) => {
          dispatch(this.action.listCategories({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.action.listCategories({ loading: false, data: undefined }));
        });
    };
  }

  getListMenu() {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.listMenu({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.LIST_MENU())
        .then((res: BaseResponse<IResListMenu[]>) => {
          dispatch(this.action.listMenu({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.action.listMenu({ loading: false, data: undefined }));
        });
    };
  }
}
