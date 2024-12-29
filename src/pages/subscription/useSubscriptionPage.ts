import { useEffect, useState } from 'react';
import { IResListOrderSubscription } from '../../models/response/IResListOrderSubscription';
import { SubscriptionActions } from '../../redux/actions/subscription.actions';
import { ISubscriptionSlice } from '../../redux/reducers/subscription.reducers';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export function useSubscriptionPage() {
  const [listData, setListData] = useState<IResListOrderSubscription[]>([]);

  const dispatch = useAppDispatch();
  const subscriptinAction = new SubscriptionActions();
  const Subscription: ISubscriptionSlice = useAppSelector((state: any) => state.Subscription);

  useEffect(() => {
    dispatch(subscriptinAction.getOrderSubscription());
  }, []);

  useEffect(() => {
    setListData(Subscription?.listOrderSubscription?.data || []);
  }, [Subscription]);

  return { listData };
}
