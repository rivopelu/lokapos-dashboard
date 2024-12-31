import { useState } from 'react';
import { CardBody, MainCard } from '../../components/MainLogo';
import OtpInput from 'react-otp-input';
import { t } from 'i18next';
import { Button } from '@mui/material';

export function VerifyEmailPage() {
  const [otp, setOtp] = useState('');

  return (
    <div className="min-h-screen h-full flex items-center justify-center">
      <MainCard className="max-w-xl">
        <CardBody className="flex flex-col justify-center items-center text-center gap-14">
          <div className="grid gap-4">
            <p className="font-semibold text-2xl">{t('otp_verification')}</p>
            <p className="mx-8 text-slate-600">{t('otp_verification_description')}</p>
          </div>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span className="mx-2">-</span>}
            renderInput={(props) => (
              <input
                {...props}
                placeholder="○"
                className="border flex items-center justify-center text-3xl text-center"
                style={{ width: 64, height: 64 }}
              />
            )}
          />
          <div className="grid gap-2 w-full">
            <Button size="large" variant="contained" fullWidth>
              {t('submit')}
            </Button>
            <div className="mt-3 hover:underline cursor-pointer text-primary-main active:text-primary-main/40 duration-300">
              {t('resend_email_verfication')}
            </div>
          </div>
        </CardBody>
      </MainCard>
    </div>
  );
}
