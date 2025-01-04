import { t } from 'i18next';
import { MdGroup, MdHome, MdInventory, MdPayment } from 'react-icons/md';
import { ASSETS } from '../constants/assets';
import { ACCOUNT_ROLE_ENUM } from '../enums/account-role-enum';
import { ILabelValue } from '../interfaces/feature-type-interface';
import { ROUTES } from '../routes/routes';
import { IListPaymentMethod } from '../models/IListPaymentMethod';
import { PAYMENT_METHOD_TYPE_ENUM } from '../enums/payemnt-method-type-enum';

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

  const bankPaymentMethodData: IListPaymentMethod[] = [
    {
      name: 'BCA',
      key: PAYMENT_METHOD_TYPE_ENUM.BANK_TRANSFER_BCA,
      image: ASSETS.BANK.BCA,
    },
    {
      name: 'BRI',
      key: PAYMENT_METHOD_TYPE_ENUM.BANK_TRANSFER_BRI,
      image: ASSETS.BANK.BRI,
    },
    {
      name: 'BNI',
      key: PAYMENT_METHOD_TYPE_ENUM.BANK_TRANSFER_BNI,
      image: ASSETS.BANK.BNI,
    },
    // {
    //   name: 'Mandiri',
    //   key: PAYMENT_METHOD_TYPE_ENUM.BANK_TRANSFER_MANDIRI,
    //   image: ASSETS.BANK.MANDIRI,
    // },
    // {
    //   name: 'Permata',
    //   key: PAYMENT_METHOD_TYPE_ENUM.BANK_TRANSFER_PERMATA,
    //   image: ASSETS.BANK.PERMATA,
    // },
    // {
    //   name: 'CIMB',
    //   key: PAYMENT_METHOD_TYPE_ENUM.BANK_TRANSFER_CIMB,
    //   image: ASSETS.BANK.CIMB,
    // },
  ];

  return {
    sidebarDataList,
    tax,
    listTableMasterDataPage,
    emailVerificationOtpExpireTimeInMinute,
    dataRole,
    bankPaymentMethodData,
  };
}
