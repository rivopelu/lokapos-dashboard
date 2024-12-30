import { useEffect, useState } from 'react';
import { MasterDataAction } from '../../redux/actions/master-data.action';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IResListMerchant } from '../../models/response/IResListMerchant';
import { IMasterDataSlice } from '../../redux/reducers/master-data.reducers';

export function useMerchantPage() {
  const [listMerchant, setListMerchant] = useState<IResListMerchant[]>([]);

  const masterDataActions = new MasterDataAction();

  const MasterData: IMasterDataSlice = useAppSelector((state) => state.MasterData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(masterDataActions.getListMerchant());
  }, []);

  useEffect(() => {
    setListMerchant(MasterData?.listMerchant?.data || []);
  }, [MasterData?.listMerchant]);

  return { listMerchant };
}
