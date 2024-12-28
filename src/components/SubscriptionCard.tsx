import { Button } from '@mui/material';
import { IResSubscriptionPackage } from '../models/response/IResSubscriptionPackage';
import { CardBody, MainCard } from './MainLogo';
import { t } from 'i18next';
import { NumberFormatterHelper } from '../helper/number-format-helper';

export function SubscriptionCard(props: IProps) {
  const numberFormatHelper = new NumberFormatterHelper();
  return (
    <MainCard>
      <CardBody>
        <div className="flex items-center justify-between flex-col gap-16">
          <div className="bg-slate-100 p-4 w-full text-center uppercase font-semibold text-slate-600">
            {props.data?.name}
          </div>
          <div className="text-center flex flex-col justify-center gap-3 py-24">
            <div>
              <div className="font-bold text-6xl">
                {props.data.price ? numberFormatHelper.NumberMinifyFormatter(props.data.price) : ''}
              </div>
              <p className="font-semibold text-slate-500 text-xl">{props.data.duration} day</p>
            </div>
            <p>{props.data.description}</p>
          </div>
          <Button fullWidth size="large" variant="contained">
            <div className="p-3">{t('get_started')}</div>
          </Button>
        </div>
      </CardBody>
    </MainCard>
  );
}

interface IProps {
  data: IResSubscriptionPackage;
}
