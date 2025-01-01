import { IResGetMe } from '../../models/response/IResGetMe';
import { IAccountSlice } from '../../redux/reducers/account.reducers';
import { useAppSelector } from '../../redux/store';

export function useProfilePage() {
  const Account: IAccountSlice = useAppSelector((state) => state.Account);

  const profileData: IResGetMe | undefined = Account?.getMe?.data;

  return { profileData };
}
