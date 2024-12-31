import { useState } from 'react';
import { HttpService } from '../../services/http.service';
import ErrorService from '../../services/error.service';
import { ENDPOINT } from '../../constants/endpoint';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { UiServices } from '../../services/ui.service';
import { t } from 'i18next';
import { AccountActions } from '../../redux/actions/account.actions';
import { useAppDispatch } from '../../redux/store';

export function useVerifyEmailPage() {
  const httpService = new HttpService();
  const errorService = new ErrorService();
  const uiService = new UiServices();
  const accountAction = new AccountActions();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingResendEmail, setLoadingResendEmail] = useState<boolean>(false);

  function onSubmitVerify() {
    setLoading(true);
    const data = {
      otp,
    };
    httpService
      .POST(ENDPOINT.VERIFY_EMAIL(), data)
      .then(() => {
        setLoading(false);
        dispatch(accountAction.getMe()).then(() => {
          navigate(ROUTES.HOME());
          dispatch(accountAction.setTopAlert(undefined));
          uiService.handleSnackbarSuccess(t('email_verification_success'));
        });
      })
      .catch((e) => {
        setLoading(false);
        setOtp('');
        errorService.fetchApiError(e);
      });
  }

  function onResendEmailVerification() {
    setLoadingResendEmail(true);
    httpService
      .PATCH(ENDPOINT.RESEND_VERIFICATION_EMAIL())
      .then(() => {
        setLoadingResendEmail(false);
        uiService.handleSnackbarSuccess(t('otp_resend_to_email_success'));
      })
      .catch((e) => {
        setLoadingResendEmail(false);
        errorService.fetchApiError(e);
      });
  }

  return { otp, setOtp, onSubmitVerify, loading, onResendEmailVerification, loadingResendEmail };
}
