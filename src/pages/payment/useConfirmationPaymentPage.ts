import { useEffect, useState } from 'react';
import { IResDetailSubscriptionOrder } from '../../models/response/IResDetailSubscriptionOrder';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ISubscriptionSlice } from '../../redux/reducers/subscription.reducers';
import { SubscriptionActions } from '../../redux/actions/subscription.actions';
import { useQueryState } from 'nuqs';

export function useConfirmationPaymentPage() {
  const [orderId] = useQueryState('orderId');
  const [data, setData] = useState<IResDetailSubscriptionOrder | undefined>(undefined);

  const dispatch = useAppDispatch();
  const Subscription: ISubscriptionSlice = useAppSelector((state) => state.Subscription);

  const subscriptionAction = new SubscriptionActions();

  useEffect(() => {
    if (orderId) {
      dispatch(subscriptionAction.getDetailSubscriptionOrder(orderId));
    }
  }, [orderId]);

  useEffect(() => {
    if (Subscription?.detailSubscrptionOrder?.data) {
      setData(Subscription?.detailSubscrptionOrder?.data);
    }
  }, [Subscription?.detailSubscrptionOrder?.data]);

  return { data };
}
