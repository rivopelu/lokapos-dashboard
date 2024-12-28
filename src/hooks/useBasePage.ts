import { AccountActions } from '../redux/actions/account.actions.ts';
import { useAppDispatch, useAppSelector } from '../redux/store.ts';
import { useEffect } from 'react';
import { IAccountSlice } from '../redux/reducers/account.reducers.ts';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../routes/routes.ts';

export function useBasePage() {
  const accountActions = new AccountActions();
  const dispatch = useAppDispatch();
  const Account: IAccountSlice = useAppSelector((state) => state.Account);
  const profile = Account.getMe;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== ROUTES.SIGN_IN()) {
      dispatch(accountActions.getMe()).then();
    }
  }, [location.pathname]);
  return { profile };
}
