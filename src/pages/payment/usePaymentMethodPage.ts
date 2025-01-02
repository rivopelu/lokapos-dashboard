import { useEffect, useState } from 'react';
import { SubscriptionActions } from '../../redux/actions/subscription.actions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ISubscriptionSlice } from '../../redux/reducers/subscription.reducers';
import { IResSubscriptionPackage } from '../../models/response/IResSubscriptionPackage';
import { useQueryState } from 'nuqs';

export function usePaymentMethodPage() {
  const [packageId] = useQueryState('packageId');
  const [packageData, setPackageData] = useState<IResSubscriptionPackage | undefined>();

  const dispatch = useAppDispatch();
  const subscriptionAction = new SubscriptionActions();

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

  return { packageData };
}
