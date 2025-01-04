import { useEffect, useState } from 'react';
import { IResDetailSubscriptionOrder } from '../../models/response/IResDetailSubscriptionOrder';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ISubscriptionSlice } from '../../redux/reducers/subscription.reducers';
import { SubscriptionActions } from '../../redux/actions/subscription.actions';
import { useQueryState } from 'nuqs';
import { UtilsHelper } from '../../helper/utils-helper';
import { UiServices } from '../../services/ui.service';
import { t } from 'i18next';

export function useConfirmationPaymentPage() {
  const [orderId] = useQueryState('orderId');
  const [data, setData] = useState<IResDetailSubscriptionOrder | undefined>(undefined);

  const dispatch = useAppDispatch();
  const Subscription: ISubscriptionSlice = useAppSelector((state) => state.Subscription);

  const utilsHelper = new UtilsHelper();
  const subscriptionAction = new SubscriptionActions();
  const uiService = new UiServices();

  function fetchDetail() {
    if (orderId) {
      dispatch(subscriptionAction.getDetailSubscriptionOrder(orderId));
    }
  }

  useEffect(() => {
    fetchDetail();
  }, [orderId]);

  useEffect(() => {
    if (Subscription?.detailSubscrptionOrder?.data) {
      setData(Subscription?.detailSubscrptionOrder?.data);
    }
  }, [Subscription?.detailSubscrptionOrder?.data]);

  function copyVirtualAccount() {
    if (data?.payment_method) {
      utilsHelper.copyTextToClipboard(data?.payment_code || '').then(() => {
        uiService.handleSnackbarSuccess(t('copy_to_clipboard'));
      });
    }
  }
  return { data, copyVirtualAccount, fetchDetail };
}
