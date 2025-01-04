import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ENDPOINT } from '../../constants/endpoint';
import { PAYMENT_METHOD_TYPE_ENUM } from '../../enums/payemnt-method-type-enum';
import { IReqPaymentMethod } from '../../models/request/IReqPaymentMethod';
import { BaseResponse } from '../../models/response/IResModel';
import { IResSubscriptionPackage } from '../../models/response/IResSubscriptionPackage';
import { SubscriptionActions } from '../../redux/actions/subscription.actions';
import { ISubscriptionSlice } from '../../redux/reducers/subscription.reducers';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ROUTES } from '../../routes/routes';
import ErrorService from '../../services/error.service';
import { HttpService } from '../../services/http.service';

export function usePaymentMethodPage() {
  const [packageId] = useQueryState('packageId');
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [packageData, setPackageData] = useState<IResSubscriptionPackage | undefined>();
  const [checked, setChecked] = useState<boolean>(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PAYMENT_METHOD_TYPE_ENUM | undefined>();

  const navigate = useNavigate();
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
      setLoadingSubmit(true);
      httpService
        .POST(ENDPOINT.V2_CREATE_PAYMENT_METHOD(), data)
        .then((res: BaseResponse<string>) => {
          navigate(ROUTES.CONFIRMATION_PAYMENT(res.data.response_data));
          setLoadingSubmit(false);
        })
        .catch((e) => {
          setLoadingSubmit(false);

          errorService.fetchApiError(e);
        });
    }
  }

  return {
    packageData,
    checked,
    setChecked,
    setSelectedPaymentMethod,
    selectedPaymentMethod,
    onSubmitPaymentMethod,
    loadingSubmit,
  };
}
