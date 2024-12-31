import { t } from 'i18next';
import { STYLE_VARIABLE } from '../constants/style-variable';
import { IconButton } from '@mui/material';
import { MdClose } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { IAccountSlice } from '../redux/reducers/account.reducers';
import { TOP_ALERT_ENUM } from '../enums/top-alert-enum';
import { AccountActions } from '../redux/actions/account.actions';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes';

export function TopAlert() {
  const Account: IAccountSlice = useAppSelector((state) => state.Account);

  const dispatch = useAppDispatch();
  const accountAction = new AccountActions();

  function onClose() {
    dispatch(accountAction.setTopAlert(undefined));
  }

  switch (Account?.topAlertShow) {
    case TOP_ALERT_ENUM.VERIFIED_EMAIL:
      return (
        <div style={{ height: STYLE_VARIABLE.SIZE.TOP_ALERT_HEIGHT }} className="relative ">
          <div
            className="bg-green-700 px-5 flex text-white items-center justify-between  fixed w-full top-0"
            style={{ height: STYLE_VARIABLE.SIZE.TOP_ALERT_HEIGHT }}
          >
            <div className="">
              <div>
                {t('email_not_verified_alert')}{' '}
                <Link to={ROUTES.VERIFY_EMAIL()} className="border-b cursor-pointer hover:text-slate-300">
                  {t('verify_now')}
                </Link>
              </div>
            </div>
            <IconButton color="inherit" onClick={onClose}>
              <MdClose />
            </IconButton>
          </div>
        </div>
      );
    default:
      return <></>;
  }
}
