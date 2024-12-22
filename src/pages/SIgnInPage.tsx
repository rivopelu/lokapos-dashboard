import { t } from 'i18next';
import { InputText } from '../components/InputText';
import { CardBody, MainCard } from '../components/MainLogo';
import { Button, Checkbox, Divider, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { BrandLogo } from '../components/BrandLogo';

export function SignInPage() {
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
              <InputText label={t('email')} placeholder={t('insert_email')} required />
              <InputText label={t('password')} placeholder={t('insert_password')} required />
              <FormControlLabel
                control={<Checkbox checked={false} onChange={(_, checked) => console.log(checked)} />}
                label={t('show_password')}
              />
              <Button variant="contained">{t('sign_in')}</Button>
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
