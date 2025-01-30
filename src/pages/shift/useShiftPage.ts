import { useAppDispatch, useAppSelector } from '../../redux/store.ts';
import { MasterDataAction } from '../../redux/actions/master-data.action.ts';
import { useEffect, useState } from 'react';
import { IResListShift } from '../../models/response/IResListShift.ts';
import { IMasterDataSlice } from '../../redux/reducers/master-data.reducers.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import { defaultPaginationType } from '../../interfaces/feature-type-interface.ts';
import { ROUTES } from '../../routes/routes.ts';

export function useShiftPage() {
  const MasterData: IMasterDataSlice = useAppSelector((state) => state.MasterData);
  const dispatch = useAppDispatch();
  const loading = MasterData.listShift?.loading;
  const paginationData = MasterData?.listShift?.paginated_data;

  const navigate = useNavigate();
  const masterDataAction = new MasterDataAction();
  const location = useLocation();

  const [listShift, setListShift] = useState<IResListShift[]>([]);

  function fetchData(param: string) {
    dispatch(masterDataAction.getListShift(param)).then();
  }

  useEffect(() => {
    setListShift(MasterData?.listShift?.data || []);
  }, [MasterData.listShift]);

  useEffect(() => {
    fetchData(location.search);
  }, [location.search]);

  function onChangePagination(e: defaultPaginationType) {
    navigate(ROUTES.SHIFT_PAGE(e));
  }

  return {
    listShift,
    onChangePagination,
    loading,
    paginationData,
  };
}
