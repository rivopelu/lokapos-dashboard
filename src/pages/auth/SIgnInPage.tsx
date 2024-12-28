import { Button, Checkbox, Divider, FormControlLabel } from '@mui/material';
import { t } from 'i18next';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../../components/BrandLogo';
import { InputText } from '../../components/InputText';
import { CardBody, MainCard } from '../../components/MainLogo';
import { ROUTES } from '../../routes/routes';
import { useSignInPage } from './useSignInPage';
import LoadingButton from '@mui/lab/LoadingButton';

export function SignInPage() {
  const page = useSignInPage();
  const formik = page.formik;

  return (
    <div className="grid grid-cols-2 ">
      <div className="flex items-center justify-between flex-col h-[80%] my-auto">
        <BrandLogo />
        <MainCard>
          <CardBody>
            <div className="text-3xl font-semibold">{t('sign_in')}</div>
          </CardBody>
          <Divider />
          <CardBody>
            <div className="grid gap-4 min-w-[400px]">
              <InputText
                label={t('email')}
                placeholder={t('insert_email')}
                required
                name={'email'}
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                errorMessage={formik.touched.email && formik.errors.email}
                onEnter={() => formik.handleSubmit()}
              />
              <InputText
                label={t('password')}
                type={page.showPassword ? 'text' : 'password'}
                placeholder={t('insert_password')}
                required
                name={'password'}
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                errorMessage={formik.touched.password && formik.errors.password}
                onEnter={() => formik.handleSubmit()}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={page.showPassword} onChange={(_, checked) => page.setShowPassword(checked)} />
                }
                label={t('show_password')}
              />
              <LoadingButton loading={page.loadingSubmit} onClick={() => formik.handleSubmit()} variant="contained">
                {t('sign_in')}
              </LoadingButton>
              <p className="text-center">
                {t('dont_have_account')}
                <Link to={ROUTES.SIGN_UP()} className="text-primary-main">
                  {t('sign_up_here')}
                </Link>
              </p>
            </div>
          </CardBody>
        </MainCard>
        <div>HELLO</div>
      </div>
      <div className="min-h-screen bg-slate-300"></div>
    </div>
  );
}
