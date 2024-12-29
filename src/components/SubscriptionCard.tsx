import { Button } from '@mui/material';
import { IResSubscriptionPackage } from '../models/response/IResSubscriptionPackage';
import { CardBody, MainCard } from './MainLogo';
import { t } from 'i18next';
import { NumberFormatterHelper } from '../helper/number-format-helper';
import { HttpService } from '../services/http.service';
import { ENDPOINT } from '../constants/endpoint';
import { IReqCreateSubscriptionOrder } from '../models/request/IReqCreateSubscriptionOrder';
import { IResCreateOrderPaymentSubscription } from '../models/response/IResCreatePaymentOrderSubscription';
import ErrorService from '../services/error.service';
import { BaseResponse } from '../models/response/IResModel';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

export function SubscriptionCard(props: IProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const numberFormatHelper = new NumberFormatterHelper();
  const errorService = new ErrorService();
  const httpService = new HttpService();

  function onSubscribe() {
    setLoading(true);
    const data: IReqCreateSubscriptionOrder = {
      package_id: props.data.id,
    };
    httpService
      .POST(ENDPOINT.CREATE_SUBSCRIPTION_ORDER(), data)
      .then((res: BaseResponse<IResCreateOrderPaymentSubscription>) => {
        const token = res.data.response_data.token;
        if (token) {
          if (window?.snap?.pay) {
            window.snap.pay(token);
          }
        }
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        errorService.fetchApiError(e);
      });
  }

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
            <p className="italic text-slate-600">{props.data.description}</p>
          </div>
          <LoadingButton loading={loading} onClick={onSubscribe} fullWidth size="large" variant="outlined">
            <div className="p-3">{t('get_started')}</div>
          </LoadingButton>
        </div>
      </CardBody>
    </MainCard>
  );
}

interface IProps {
  data: IResSubscriptionPackage;
}
