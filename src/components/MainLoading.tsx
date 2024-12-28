import { IAccountSlice } from '../redux/reducers/account.reducers.ts';
import { useAppSelector } from '../redux/store.ts';

export function MainLoading() {
  const Account: IAccountSlice = useAppSelector((state) => state.Account);
  if (Account?.getMe?.loading) {
    return (
      <div className={'flex items-center justify-center h-screen w-screen bg-white fixed top-0 left-0 z-50'}>
        <h1>LOADING</h1>
      </div>
    );
  } else {
    return <></>;
  }
}
