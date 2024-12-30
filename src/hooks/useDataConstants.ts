import { t } from 'i18next';
import { MdHome, MdInventory, MdPayment } from 'react-icons/md';
import { ROUTES } from '../routes/routes';

export function useDataConstants() {
  const tax = 11;
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
  ];

  const listTableMasterDataPage = [
    {
      title: t('merchant'),
      route: ROUTES.MERCHANT(),
      description: t('merchant_page_description'),
    },
  ];

  return { sidebarDataList, tax, listTableMasterDataPage };
}
