import { useEffect, useState } from 'react';
import { IReqCreateNewAccount } from '../../models/request/IReqCreateNewAccount';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { t } from 'i18next';
import { HttpService } from '../../services/http.service';
import ErrorService from '../../services/error.service';
import { UiServices } from '../../services/ui.service';
import { ENDPOINT } from '../../constants/endpoint';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
export function useNewAccountPage() {
  const [checked, setChecked] = useState<boolean>(false);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  const httpService = new HttpService();
  const errorService = new ErrorService();
  const uiService = new UiServices();

  const navigate = useNavigate();

  const initValue: IReqCreateNewAccount = {
    first_name: '',
    last_name: '',
    email: '',
    role: '',
  };
  const validationSchema = yup.object().shape({
    first_name: yup
      .string()
      .required(t('validation.required', { name: t('first_name') })) // Pesan dinamis dengan nama field
      .min(2, t('validation.min_length', { name: t('first_name'), length: 2 })) // Minimal 2 karakter
      .max(50, t('validation.max_length', { name: t('first_name'), length: 50 })), // Maksimal 50 karakter

    last_name: yup
      .string()
      .required(t('validation.required', { name: t('last_name') })) // Pesan dinamis dengan nama field
      .min(2, t('validation.min_length', { name: t('last_name'), length: 2 })) // Minimal 2 karakter
      .max(50, t('validation.max_length', { name: t('last_name'), length: 50 })), // Maksimal 50 karakter

    email: yup
      .string()
      .required(t('validation.required', { name: t('email') }))
      .email(t('validation.invalid_email', { name: t('email') })),

    role: yup
      .string()
      .required(t('validation.required', { name: t('role') }))
      .oneOf(['ADMIN', 'STAFF'], t('validation.invalid_role', { name: t('role') })),
  });
  const formik = useFormik({
    initialValues: initValue,
    validationSchema: validationSchema,
    onSubmit: (e) => {
      if (checked) {
        setLoadingSubmit(true);
        httpService
          .POST(ENDPOINT.CREATE_ACCOUNT(), e)
          .then(() => {
            setLoadingSubmit(false);
            navigate(ROUTES.ACCOUNT_PAGE());
            uiService.handleSnackbarSuccess(t('account_success_create'));
          })
          .catch((e) => {
            errorService.fetchApiError(e);
            setLoadingSubmit(false);
          });
      }
    },
  });

  function checkDisableButton() {
    return !(formik.isValid && checked);
  }

  return { checked, setChecked, formik, checkDisableButton, loadingSubmit };
}
