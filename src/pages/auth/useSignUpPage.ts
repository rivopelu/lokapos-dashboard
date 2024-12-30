import { useState } from 'react';
import { IReqSignUp } from '../../models/request/IReqSignUp';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { t } from 'i18next';
import { HttpService } from '../../services/http.service';
import ErrorService from '../../services/error.service';
import { ENDPOINT } from '../../constants/endpoint';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export function useSignUpPage() {
  const httpService = new HttpService();
  const errorService = new ErrorService();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  const initValue: IReqSignUp = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    confirmation_password: '',
  };

  const validationScheme = yup.object().shape({
    email: yup
      .string()
      .email(t('validation.invalid_email'))
      .required(t('validation.required', { name: t('email') })),
    first_name: yup.string().required(t('validation.required', { name: t('first_name') })),
    last_name: yup.string().required(t('validation.required', { name: t('last_name') })),
    password: yup
      .string()
      .min(6, t('validation.min', { name: t('password'), value: 6 }))
      .required(t('validation.required', { name: t('password') })),
    confirmation_password: yup
      .string()
      .oneOf([yup.ref('password'), ''], t('validation.password_mismatch'))
      .required(t('validation.required', { name: t('confirmation_password') })),
  });
  const formik = useFormik({
    initialValues: initValue,
    validationSchema: validationScheme,
    onSubmit: (e) => {
      onSubmitSignUp(e);
      navigate(ROUTES.SIGN_IN());
    },
  });

  function onSubmitSignUp(value: IReqSignUp) {
    setLoadingSubmit(true);
    httpService
      .POST(ENDPOINT.SIGN_UP(), value)
      .then(() => {
        setLoadingSubmit(false);
      })
      .catch((e) => {
        errorService.fetchApiError(e);
        setLoadingSubmit(false);
      });
  }

  return { showPassword, setShowPassword, formik, loadingSubmit };
}
