import { t } from 'i18next';
import { CardBody, MainCard } from '../../components/MainLogo';
import { useDataConstants } from '../../hooks/useDataConstants';
import { CardActionArea, Divider } from '@mui/material';
import { usePaymentMethodPage } from './usePaymentMethodPage';
import { NumberFormatterHelper } from '../../helper/number-format-helper';
import { ILabelValue } from '../../interfaces/feature-type-interface';

export function PaymentMethodPage() {
  const data = useDataConstants();
  const page = usePaymentMethodPage();
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
          <div className="grid  grid-cols-6 gap-4">
            {data.bankPaymentMethodData.map((item, i) => (
              <CardActionArea key={i}>
                <MainCard className="px-10">
                  <CardBody>
                    <div className="flex items-center gap-4 justify-center">
                      <img src={item.image} alt={item.name} className="h-10" />
                    </div>
                  </CardBody>
                </MainCard>
              </CardActionArea>
            ))}
          </div>
        </CardBody>
      </MainCard>
    </div>
  );
}
