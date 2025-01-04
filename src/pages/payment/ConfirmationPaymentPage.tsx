import LoadingButton from '@mui/lab/LoadingButton';
import { Divider, IconButton, Tooltip } from '@mui/material';
import { t } from 'i18next';
import { MdContentCopy } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CardBody, MainCard } from '../../components/MainLogo';
import { NumberFormatterHelper } from '../../helper/number-format-helper';
import { UtilsHelper } from '../../helper/utils-helper';
import { ROUTES } from '../../routes/routes';
import { useConfirmationPaymentPage } from './useConfirmationPaymentPage';

export function ConfirmationPaymentPage() {
  const page = useConfirmationPaymentPage();
  const numberFormatHelper = new NumberFormatterHelper();
  const utilsHelper = new UtilsHelper();

  function checkStatusUi() {
    switch (page?.data?.status) {
      case 'PENDING':
        return {
          status: <p className="font-bold text-yellow-700  text-4xl">{page?.data?.status}</p>,
          button: (
            <LoadingButton size="large" fullWidth variant="contained" onClick={page.fetchDetail}>
              {t('complete_payment')}
            </LoadingButton>
          ),
        };
      case 'SUCCESS':
        return {
          status: <p className="font-bold text-green-700  text-4xl">{page?.data?.status}</p>,
          button: (
            <Link to={ROUTES.HOME()}>
              <LoadingButton size="large" fullWidth variant="contained">
                {t('back_to_home')}
              </LoadingButton>
            </Link>
          ),
        };
      default:
        return undefined;
    }
  }

  return (
    <div className="flex items-center justify-center">
      <MainCard className="min-w-[600px]">
        <CardBody className="grid gap-6">
          <div className="flex items-center justify-center flex-col text-center gap-7">
            <div>
              <p className=" text-slate-600">{t('payment_status')}</p>
              {checkStatusUi()?.status}
            </div>
            <div>
              <div>{t('total_transaction')}</div>
              <p>{page?.data?.total_transaction ? numberFormatHelper.toRupiah(page.data.total_transaction) : '-'}</p>
            </div>
          </div>
          <Divider />
          <div className="grid gap-6">
            <div className="flex items-center justify-center text-center flex-col">
              <div>{t('payment_method')}</div>
              <p className="font-semibold text-3xl">{t('bank_transfer')}</p>
              <img
                alt={t('payment_method')}
                className="h-16"
                src={utilsHelper.checkBankImageByPaymentMethod(page.data?.payment_method)}
              />
            </div>
            {page.data?.status === 'PENDING' && (
              <div className="flex items-center gap-7 p-4 bg-slate-200">
                <div>
                  <p className="text-slate-500">{t('your_virtual_account')}</p>
                  <p className="text-2xl">{page?.data?.payment_code}</p>
                </div>

                <Tooltip title={t('copy_virtual_account')}>
                  <IconButton onClick={page.copyVirtualAccount}>
                    <MdContentCopy />
                  </IconButton>
                </Tooltip>
              </div>
            )}
            {checkStatusUi()?.button}
          </div>
        </CardBody>
      </MainCard>
    </div>
  );
}
