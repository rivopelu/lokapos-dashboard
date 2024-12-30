import { useEffect, useState } from 'react';
import { IResSubscriptionPackage } from '../models/response/IResSubscriptionPackage';
import { SubscriptionActions } from '../redux/actions/subscription.actions';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { ISubscriptionSlice } from '../redux/reducers/subscription.reducers';

export function useHomePage() {
  const subscription: ISubscriptionSlice = useAppSelector((state) => state.Subscription);

  const [dataSubscription, setDataSubscription] = useState<IResSubscriptionPackage[]>([]);

  const subscriptionAction = new SubscriptionActions();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(subscriptionAction.getSubscriptionList()).then();
  }, []);

  useEffect(() => {
    setDataSubscription(subscription?.listSubscriptionPackage?.data || []);
  }, [subscription?.listSubscriptionPackage]);

  return { dataSubscription };
}
