import { t } from 'i18next';
import { STYLE_VARIABLE } from '../constants/style-variable';
import { IconButton } from '@mui/material';
import { MdClose } from 'react-icons/md';

export function TopAlert() {
  return (
    <div style={{ height: STYLE_VARIABLE.SIZE.TOP_ALERT_HEIGHT }} className="relative ">
      <div
        className="bg-green-700 px-5 flex text-white items-center justify-between  fixed w-full top-0"
        style={{ height: STYLE_VARIABLE.SIZE.TOP_ALERT_HEIGHT }}
      >
        <div className="">
          <div>
            {t('email_not_verified_alert')}{' '}
            <span className="border-b cursor-pointer hover:text-slate-300">{t('verify_now')}</span>
          </div>
        </div>
        <IconButton color="inherit">
          <MdClose />
        </IconButton>
      </div>
    </div>
  );
}
