import LoadingButton from '@mui/lab/LoadingButton';
import { t } from 'i18next';
import OtpInput from 'react-otp-input';
import { CardBody, MainCard } from '../../components/MainLogo';
import { useDataConstants } from '../../hooks/useDataConstants';
import { useVerifyEmailPage } from './useVerifyEmailPage';

export function VerifyEmailPage() {
  const page = useVerifyEmailPage();
  return (
    <div className="min-h-screen h-full flex items-center justify-center">
      <MainCard className="max-w-xl">
        <CardBody className="flex flex-col justify-center items-center text-center gap-14">
          <div className="grid gap-4">
            <p className="font-semibold text-2xl">{t('otp_verification')}</p>
            <p className="mx-8 text-slate-600">{t('otp_verification_description')}</p>
          </div>
          <div>
            <OtpInput
              value={page.otp}
              onChange={page.setOtp}
              numInputs={6}
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
            <p className="mt-4 text-slate-400">
              {t('otp_exipre_in_minute', { minute: useDataConstants().emailVerificationOtpExpireTimeInMinute })}
            </p>
          </div>
          <div className="grid gap-2 w-full">
            <LoadingButton
              loading={page.loading}
              onClick={page.onSubmitVerify}
              disabled={!page.otp}
              size="large"
              variant="contained"
              fullWidth
            >
              {t('submit')}
            </LoadingButton>
            <button
              onClick={page.onResendEmailVerification}
              className="mt-3 hover:underline cursor-pointer text-primary-main active:text-primary-main/40 duration-300"
            >
              {t(page.loadingResendEmail ? 'loading...' : 'resend_email_verfication')}
            </button>
          </div>
        </CardBody>
      </MainCard>
    </div>
  );
}
