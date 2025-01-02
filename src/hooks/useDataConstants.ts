import { t } from 'i18next';
import { MdGroup, MdHome, MdInventory, MdPayment } from 'react-icons/md';
import { ROUTES } from '../routes/routes';
import { ILabelValue } from '../interfaces/feature-type-interface';
import { ACCOUNT_ROLE_ENUM } from '../enums/account-role-enum';

export function useDataConstants() {
  const tax = 11;
  const emailVerificationOtpExpireTimeInMinute = 3;
  const sidebarDataList = [
    {
      title: t('home'),
      path: ROUTES.HOME(),
      icon: MdHome,
    },
    {
      title: t('master_data'),
      path: ROUTES.MASTER_DATA(),
      icon: MdInventory,
    },
    {
      title: t('subscription'),
      path: ROUTES.SUBSCRIPTION_PAGE(),
      icon: MdPayment,
    },
    {
      title: t('account'),
      path: ROUTES.ACCOUNT_PAGE(),
      icon: MdGroup,
    },
  ];

  const listTableMasterDataPage = [
    {
      title: t('merchant'),
      route: ROUTES.MERCHANT(),
      description: t('merchant_page_description'),
    },
    {
      title: t('menu'),
      route: ROUTES.MENU_PAGE(),
      description: t('menu_page_description'),
    },
  ];

  const dataRole: ILabelValue<ACCOUNT_ROLE_ENUM>[] = [
    {
      label: 'Admin',
      value: ACCOUNT_ROLE_ENUM.ADMIN,
    },
    {
      label: 'Staff',
      value: ACCOUNT_ROLE_ENUM.STAFF,
    },
  ];

  return { sidebarDataList, tax, listTableMasterDataPage, emailVerificationOtpExpireTimeInMinute, dataRole };
}
