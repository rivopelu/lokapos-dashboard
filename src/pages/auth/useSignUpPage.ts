import { useState } from 'react';
import { IReqSignUp } from '../../models/request/IReqSignUp';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { t } from 'i18next';

export function useSignUpPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
      .email(t('validation.invalid_email')) // "invalid email" from the validation messages
      .required(t('validation.required', { name: t('email') })), // "email is required"
    first_name: yup.string().required(t('validation.required', { name: t('first_name') })), // "first name is required"
    last_name: yup.string().required(t('validation.required', { name: t('last_name') })), // "last name is required"
    password: yup
      .string()
      .min(6, t('validation.min', { name: t('password'), value: 6 })) // "password must be greater than or equal to 6"
      .required(t('validation.required', { name: t('password') })), // "password is required"
    confirmation_password: yup
      .string()
      .oneOf([yup.ref('password'), ''], t('validation.password_mismatch')) // Custom message for mismatched passwords
      .required(t('validation.required', { name: t('confirmation_password') })), // "confirmation password is required"
  });
  const formik = useFormik({
    initialValues: initValue,
    validationSchema: validationScheme,
    onSubmit: (e) => {
      console.log(JSON.stringify(e));
    },
  });

  return { showPassword, setShowPassword, formik };
}
