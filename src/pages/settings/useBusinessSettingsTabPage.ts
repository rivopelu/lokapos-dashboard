import { IReqBusinessRegister } from '../../models/request/IReqBusinessRegister.ts';
import { useFormik } from 'formik';
import { IAccountSlice } from '../../redux/reducers/account.reducers.ts';
import { useAppDispatch, useAppSelector } from '../../redux/store.ts';
import { useEffect, useState } from 'react';
import { HttpService } from '../../services/http.service.ts';
import ErrorService from '../../services/error.service.ts';
import * as yup from 'yup';
import { t } from 'i18next';
import { ENDPOINT } from '../../constants/endpoint.ts';
import { UiServices } from '../../services/ui.service.ts';
import { AccountActions } from '../../redux/actions/account.actions.ts';

export function useBusinessSettingsTabPage() {
  const Account: IAccountSlice = useAppSelector((state) => state.Account);
  const business = Account?.detailBusiness?.data;
  const dispatch = useAppDispatch()
  const accountActions = new AccountActions();

  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  const httpService = new HttpService();
  const errorService = new ErrorService();
  const uiService = new UiServices();


  const initValue: IReqBusinessRegister = {
    name: '',
    address: '',
    logo: '',
    city_id: undefined,
    sub_district_id: undefined,
    district_id: undefined,
    province_id: undefined,
  };

  const validationScheme = yup.object().shape({
    name: yup.string().required(t('validation.required', { name: t('name') })),
    address: yup.string().required(t('validation.required', { name: t('address') })),
    logo: yup.string().url(t('validation.invalid_url')).nullable(),
    city_id: yup.number().required(t('validation.required', { name: t('city') })),
    sub_district_id: yup.number().required(t('validation.required', { name: t('sub_district') })),
    district_id: yup.number().required(t('validation.required', { name: t('district') })),
    province_id: yup.number().required(t('validation.required', { name: t('province') })),
  });

  const formik = useFormik({
    initialValues: initValue,
    validationSchema: validationScheme,
    onSubmit: (values) => {
      httpService
        .PUT(ENDPOINT.EDIT_ACCOUNT_BUSINESS(), values)
        .then(() => {
          setLoadingSubmit(false);
          uiService.handleSnackbarSuccess(t("business_success_updated"))
          dispatch(accountActions.getDetailAccountBusiness()).then()
        })
        .catch((e) => {
          errorService.fetchApiError(e);
          setLoadingSubmit(false);
        });
    },
  });

  useEffect(() => {
    if (business) {
      const data: IReqBusinessRegister = {
        name: business.name,
        address: business.address,
        logo: business.logo,
        city_id: business.city_id,
        district_id: business.district_id,
        province_id: business.province_id,
        sub_district_id: business.sub_district_id,
      };
      formik.setValues(data);
    }
  }, [business]);

  return { formik, loadingSubmit};
}
