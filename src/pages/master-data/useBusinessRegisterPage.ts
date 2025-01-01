import { useFormik } from 'formik';
import { IReqBusinessRegister } from '../../models/request/IReqBusinessRegister';
import { useState } from 'react';
import { HttpService } from '../../services/http.service';
import { ENDPOINT } from '../../constants/endpoint';
import ErrorService from '../../services/error.service';
import { UiServices } from '../../services/ui.service';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { t } from 'i18next';
import { AccountActions } from '../../redux/actions/account.actions';
import { useAppDispatch } from '../../redux/store';

export function useBusinessRegisterPage() {
  const httpService = new HttpService();
  const errorService = new ErrorService();
  const uiService = new UiServices();
  const accountAction = new AccountActions();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  const initValue: IReqBusinessRegister = {
    name: '',
    address: '',
    logo: '',
  };
  const formik = useFormik({
    initialValues: initValue,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  function onSubmit(data: IReqBusinessRegister) {
    setLoadingSubmit(true);
    httpService
      .POST(ENDPOINT.REGISTER_NEW_BUSINESS(), data)
      .then(() => {
        successRegister();
      })
      .catch((e) => {
        setLoadingSubmit(false);
        errorService.fetchApiError(e);
      });
  }

  function successRegister() {
    dispatch(accountAction.getMe());
    navigate(ROUTES.HOME());
    setLoadingSubmit(false);
    uiService.handleSnackbarSuccess(t('your_businness_successfully_register'));
  }

  function checkDisableButton(): boolean {
    return !(
      formik.values.name &&
      formik.values.address &&
      formik.values.logo &&
      formik.values.province_id &&
      formik.values.city_id &&
      formik.values.district_id &&
      formik.values.sub_district_id
    );
  }

  return { formik, loadingSubmit, checkDisableButton };
}
