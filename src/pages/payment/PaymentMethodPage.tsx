import { t } from 'i18next';
import { CardBody, MainCard } from '../../components/MainLogo';
import { useDataConstants } from '../../hooks/useDataConstants';
import { Divider } from '@mui/material';

export function PaymentMethodPage() {
  const data = useDataConstants();
  return (
    <div className="flex items-center justify-center">
      <MainCard>
        <CardBody>
          <p className="text-xl font-semibold">{t('select_payment_method')}</p>
        </CardBody>
        <Divider />
        <CardBody>
          <div className="grid gap-3">
            {data.bankPaymentMethodData.map((item, i) => (
              <MainCard key={i}>
                <CardBody>
                  <div>{item.name}</div>
                </CardBody>
              </MainCard>
            ))}
          </div>
        </CardBody>
      </MainCard>
    </div>
  );
}
