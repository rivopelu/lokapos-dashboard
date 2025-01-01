import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IResListCategories } from '../../models/response/IResListCategories';
import { MasterDataAction } from '../../redux/actions/master-data.action';
import { IMasterDataSlice } from '../../redux/reducers/master-data.reducers';

export function useMasterDataPage() {
  const dispatch = useAppDispatch();
  const MasterData: IMasterDataSlice = useAppSelector((state) => state.MasterData);

  const masterDataAction = new MasterDataAction();

  const [listCategories, setListCategories] = useState<IResListCategories[]>([]);

  useEffect(() => {
    console.log(listCategories);
  }, [listCategories]);

  useEffect(() => {
    dispatch(masterDataAction.getListCategories()).then();
  }, []);

  useEffect(() => {
    setListCategories(MasterData?.listCategories?.data || []);
  }, [MasterData?.listCategories?.data]);

  return { listCategories };
}
