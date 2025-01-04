import { useEffect, useState } from 'react';
import { SubscriptionActions } from '../../redux/actions/subscription.actions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ISubscriptionSlice } from '../../redux/reducers/subscription.reducers';
import { IResSubscriptionPackage } from '../../models/response/IResSubscriptionPackage';
import { useQueryState } from 'nuqs';
import { PAYMENT_METHOD_TYPE_ENUM } from '../../enums/payemnt-method-type-enum';
import { IReqPaymentMethod } from '../../models/request/IReqPaymentMethod';
import { HttpService } from '../../services/http.service';
import ErrorService from '../../services/error.service';
import { ENDPOINT } from '../../constants/endpoint';
import { AxiosResponse } from 'axios';

export function usePaymentMethodPage() {
  const [packageId] = useQueryState('packageId');
  const [packageData, setPackageData] = useState<IResSubscriptionPackage | undefined>();
  const [checked, setChecked] = useState<boolean>(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PAYMENT_METHOD_TYPE_ENUM | undefined>();

  const dispatch = useAppDispatch();

  const subscriptionAction = new SubscriptionActions();
  const httpService = new HttpService();
  const errorService = new ErrorService();

  const Subscription: ISubscriptionSlice = useAppSelector((state) => state.Subscription);

  useEffect(() => {
    if (Subscription?.listSubscriptionPackage?.data && packageId) {
      const valueData = Subscription.listSubscriptionPackage.data;
      setPackageData(valueData.find((e) => e.id === packageId));
    }
  }, [Subscription?.listSubscriptionPackage?.data]);

  useEffect(() => {
    dispatch(subscriptionAction.getSubscriptionList()).then();
  }, []);

  function onSubmitPaymentMethod() {
    if (selectedPaymentMethod && packageId) {
      const data: IReqPaymentMethod = {
        method: selectedPaymentMethod,
        package_id: packageId,
      };
      if (selectedPaymentMethod === PAYMENT_METHOD_TYPE_ENUM.BANK_TRANSFER_BCA) {
        httpService
          .POST(ENDPOINT.V2_CREATE_PAYMENT_METHOD(), data)
          .then((res: AxiosResponse<any>) => {
            alert(res.data.response_data);
          })
          .catch((e) => {
            errorService.fetchApiError(e);
          });
      }
    }
  }

  return { packageData, checked, setChecked, setSelectedPaymentMethod, selectedPaymentMethod, onSubmitPaymentMethod };
}
