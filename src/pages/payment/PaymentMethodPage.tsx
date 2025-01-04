import LoadingButton from '@mui/lab/LoadingButton';
import { CardActionArea, Checkbox, Divider, FormControlLabel } from '@mui/material';
import { t } from 'i18next';
import { CardBody, MainCard } from '../../components/MainLogo';
import { NumberFormatterHelper } from '../../helper/number-format-helper';
import { useDataConstants } from '../../hooks/useDataConstants';
import { ILabelValue } from '../../interfaces/feature-type-interface';
import { usePaymentMethodPage } from './usePaymentMethodPage';

export function PaymentMethodPage() {
  const page = usePaymentMethodPage();
  const data = useDataConstants();
  const numberFormatHelper = new NumberFormatterHelper();

  const dataListPayment: ILabelValue<string>[] = [
    {
      label: t('package_name'),
      value: page?.packageData?.name || '-',
    },
    {
      label: t('total'),
      value: page?.packageData?.price ? numberFormatHelper.toRupiah(page.packageData.price) : '-',
    },
    {
      label: t('duration'),
      value: page?.packageData?.duration ? `${page.packageData.duration} ${t('day')}` : '-',
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <MainCard>
        <CardBody>
          <p className="text-xl font-semibold">{t('select_payment_method')}</p>
        </CardBody>
        <Divider />
        <CardBody>
          <div className="grid gap-4">
            {dataListPayment.map((item, i) => (
              <div key={i} className="flex justify-between w-full border-b pb-4">
                <div>{item.label}</div>
                <div>{item.value}</div>
              </div>
            ))}
            <p className="text-xs text-slate-400">{page.packageData?.description}</p>
          </div>
        </CardBody>
        <Divider />
        <CardBody>
          <div className="grid gap-6">
            <div className="text-2xl font-semibold">{t('select_payment_method')}</div>

            <div className="grid gap-3">
              <div className=" text-slate-400">{t('bank_transfer')}</div>
              <div className="grid  grid-cols-3 gap-4">
                {data.bankPaymentMethodData.map((item, i) => (
                  <CardActionArea key={i} onClick={() => page.setSelectedPaymentMethod(item.key)}>
                    <MainCard
                      className={`px-10 border ${page.selectedPaymentMethod === item.key ? 'border-primary-main bg-primary-main' : ''}`}
                    >
                      <CardBody>
                        <div className="flex items-center gap-4 justify-center">
                          <img src={item.image} alt={item.name} className="h-10" />
                        </div>
                      </CardBody>
                    </MainCard>
                  </CardActionArea>
                ))}
              </div>
            </div>
            <FormControlLabel
              defaultChecked={false}
              checked={page.checked}
              onChange={(_, e) => page.setChecked(e)}
              control={<Checkbox />}
              label={t('terms_and_condition_payment_method')}
            />
            <LoadingButton
              loading={page.loadingSubmit}
              disabled={!(page.selectedPaymentMethod && page.checked)}
              onClick={() => page.onSubmitPaymentMethod()}
              variant="contained"
            >
              {t('pay_now')}
            </LoadingButton>
          </div>
        </CardBody>
      </MainCard>
    </div>
  );
}
