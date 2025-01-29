import { useAppDispatch, useAppSelector } from '../../redux/store.ts';
import { MasterDataAction } from '../../redux/actions/master-data.action.ts';
import { useEffect, useState } from 'react';
import { IResListShift } from '../../models/response/IResListShift.ts';
import { IMasterDataSlice } from '../../redux/reducers/master-data.reducers.ts';

export function useShiftPage() {
  const MasterData: IMasterDataSlice = useAppSelector((state) => state.MasterData);
  const dispatch = useAppDispatch();
  const loading = MasterData.listShift?.loading;

  const masterDataAction = new MasterDataAction();

  const [listShift, setListShift] = useState<IResListShift[]>([]);

  function fetchData() {
    dispatch(masterDataAction.getListShift()).then();
  }

  useEffect(() => {
    setListShift(MasterData?.listShift?.data || []);
  }, [MasterData.listShift?.data]);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    listShift,
    loading,
  };
}
