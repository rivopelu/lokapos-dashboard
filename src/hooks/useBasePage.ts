import { AccountActions } from '../redux/actions/account.actions.ts';
import { useAppDispatch, useAppSelector } from '../redux/store.ts';
import { useEffect, useState } from 'react';
import { IAccountSlice } from '../redux/reducers/account.reducers.ts';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../routes/routes.ts';
import { NotificationService } from '../services/notification.service.ts';

export function useBasePage() {
  const accountActions = new AccountActions();
  const notificationService = new NotificationService()

  const dispatch = useAppDispatch();
  const Account: IAccountSlice = useAppSelector((state) => state.Account);
  const profile = Account.getMe;
  const location = useLocation();

  const [isTokenFound, setTokenFound] = useState<boolean>(false);

  useEffect(() => {
    notificationService.getToken(setTokenFound).then();
  }, []);

  notificationService.onMessage().then((res) => {
    console.log(res.title)
  })

  useEffect(() => {
    console.log("TOKEN",isTokenFound)
  }, [isTokenFound]);


  useEffect(() => {
    if (!Account?.getMe?.data) {
      if (location.pathname !== ROUTES.SIGN_IN()) {
        if (location.pathname !== ROUTES.SIGN_UP()) {
          dispatch(accountActions.getMe()).then();
          dispatch(accountActions.getMe()).then();
        }
      }
    }
  }, [location.pathname]);
  return { profile };
}
