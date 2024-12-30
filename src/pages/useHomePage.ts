import { useEffect, useState } from 'react';
import { IResBusinessDetail } from '../models/response/IResBusinessDetail';
import { IResSubscriptionPackage } from '../models/response/IResSubscriptionPackage';
import { SubscriptionActions } from '../redux/actions/subscription.actions';
import { IAccountSlice } from '../redux/reducers/account.reducers';
import { ISubscriptionSlice } from '../redux/reducers/subscription.reducers';
import { useAppDispatch, useAppSelector } from '../redux/store';

export function useHomePage() {
  const subscription: ISubscriptionSlice = useAppSelector((state) => state.Subscription);
  const account: IAccountSlice = useAppSelector((state) => state.Account);
  const business: IResBusinessDetail | undefined = account?.getMe?.data?.business;

  const [dataSubscription, setDataSubscription] = useState<IResSubscriptionPackage[]>([]);

  const subscriptionAction = new SubscriptionActions();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(subscriptionAction.getSubscriptionList()).then();
  }, []);

  useEffect(() => {
    setDataSubscription(subscription?.listSubscriptionPackage?.data || []);
  }, [subscription?.listSubscriptionPackage]);

  return { dataSubscription, business };
}
