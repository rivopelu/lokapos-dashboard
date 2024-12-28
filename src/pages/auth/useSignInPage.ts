import { useState } from 'react';
import { IReqSignIn } from '../../models/request/IReqSignIn.ts';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { t } from 'i18next';
import { HttpService } from '../../services/http.service.ts';
import { ENDPOINT } from '../../constants/endpoint.ts';
import ErrorService from '../../services/error.service.ts';

export function useSignInPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  const httpService = new HttpService();
  const errorService = new ErrorService();

  const validationScheme = yup.object().shape({
    email: yup
      .string()
      .email(t('validation.invalid_email'))
      .required(t('validation.required', { name: t('email') })),
    password: yup.string().required(t('validation.required', { name: t('password') })),
  });

  const initValue: IReqSignIn = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initValue,
    validationSchema: validationScheme,
    onSubmit: (value) => {
      onSignIn(value);
    },
  });

  function onSignIn(data: IReqSignIn) {
    setLoadingSubmit(true);
    httpService
      .POST(ENDPOINT.SIGN_IN(), data)
      .then(() => {
        alert('OKE');
        setLoadingSubmit(false);
      })
      .catch((e) => {
        errorService.fetchApiError(e);
        setLoadingSubmit(false);
      });
  }

  return { showPassword, setShowPassword, formik, loadingSubmit };
}
