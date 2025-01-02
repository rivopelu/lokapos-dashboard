import { useEffect, useState } from 'react';
import { IResListAccount } from '../../models/response/IResListAccount';
import { AccountActions } from '../../redux/actions/account.actions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IAccountSlice } from '../../redux/reducers/account.reducers';

export function useAccountPage() {
  const [dataList, setDataList] = useState<IResListAccount[]>([]);

  const dispatch = useAppDispatch();
  const Account: IAccountSlice = useAppSelector((state) => state.Account);

  const accountAction = new AccountActions();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setDataList(Account?.listAccont?.data || []);
  }, [Account?.listAccont?.data]);

  function fetchData() {
    dispatch(accountAction.getListAccount());
  }

  return { dataList };
}
