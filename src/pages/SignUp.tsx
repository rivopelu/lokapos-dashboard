import { t } from 'i18next';
import { BrandLogo } from '../components/BrandLogo';
import { InputText } from '../components/InputText';
import { CardBody, MainCard } from '../components/MainLogo';
import { Button, Checkbox, Divider, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes';

export function SignUpPage() {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-slate-400 min-h-screen"></div>
      <div className="flex items-center justify-between h-[80%] my-auto  flex-col">
        <BrandLogo />
        <MainCard>
          <CardBody>
            <h3 className="text-3xl font-semibold capitalize">{t('sign_in')}</h3>
          </CardBody>
          <Divider />
          <CardBody>
            <div className="grid gap-4 min-w-[600px]">
              <div className="grid grid-cols-2 gap-4">
                <InputText label={t('first_name')} placeholder={t('insert_first_name')} required />
                <InputText label={t('last_name')} placeholder={t('insert_last_name')} required />
              </div>
              <InputText label={t('email')} placeholder={t('insert_email')} required />
              <InputText label={t('password')} placeholder={t('insert_password')} required />
              <InputText label={t('confirmation_password')} placeholder={t('insert_confirmation_password')} required />
              <FormControlLabel control={<Checkbox defaultChecked={false} />} label={t('show_password')} />
              <Button variant="contained">{t('sign_up')}</Button>
              <p>
                {t('already_have_account')}{' '}
                <Link to={ROUTES.SIGN_IN()} className="text-primary-main hover:underline">
                  {t('sign_in_here')}
                </Link>
              </p>
            </div>
          </CardBody>
        </MainCard>
        <h1 className="text-slate-600 text-xs ">V 1.0.0</h1>
      </div>
    </div>
  );
}
