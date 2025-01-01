import { useEffect, useState } from 'react';
import { MasterDataAction } from '../../redux/actions/master-data.action';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IResListMenu } from '../../models/response/IResListMenu';
import { IMasterDataSlice } from '../../redux/reducers/master-data.reducers';

export function useMenuPage() {
  const dispatch = useAppDispatch();
  const MasterData: IMasterDataSlice = useAppSelector((state) => state.MasterData);
  const loading = MasterData?.listMenu?.loading;

  const masterDataAction = new MasterDataAction();

  const [listMenu, setListMenu] = useState<IResListMenu[]>([]);

  useEffect(() => {
    dispatch(masterDataAction.getListMenu());
  }, []);

  useEffect(() => {
    setListMenu(MasterData?.listMenu?.data || []);
  }, [MasterData?.listMenu?.data]);

  return { loading, listMenu };
}
