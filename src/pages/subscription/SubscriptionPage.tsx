import { t } from 'i18next';
import { ITableColumnData, MainTable } from '../../components/MainTable';
import { PageContainer } from '../../components/PageContainer';
import { PageHeader } from '../../components/PageHeader';
import { useSubscriptionPage } from './useSubscriptionPage';
import { NumberFormatterHelper } from '../../helper/number-format-helper';
import { IResListOrderSubscription } from '../../models/response/IResListOrderSubscription';
import DateHelper from '../../helper/date-helper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export function SubscriptionPage() {
  const numberFormat = new NumberFormatterHelper();
  const dateHelper = new DateHelper();

  const page = useSubscriptionPage();

  const tableColumn: ITableColumnData[] = [
    {
      key: 'name',
      headerTitle: t('package_name'),
      value: 'package_name',
    },
    {
      key: 'total_transaction',
      headerTitle: t('total_transaction'),
      layouts: (e: IResListOrderSubscription) => <div>{numberFormat.toRupiah(e.total_transaction)}</div>,
    },
    {
      key: 'created_date',
      headerTitle: t('created_date'),
      layouts: (e: IResListOrderSubscription) => (
        <div>{dateHelper.toFormatDate(new Date(e.created_date), 'dd LLLL, yyyy - HH:mm')}</div>
      ),
    },
    {
      key: 'duration',
      headerTitle: t('duration'),
      layouts: (e: IResListOrderSubscription) => <div>{`${e.duration} day`}</div>,
    },
    {
      key: 'status',
      headerTitle: t('status'),
      layouts: (e: IResListOrderSubscription) => {
        switch (e.status) {
          case 'SUCCESS':
            return <div className="text-green-600 font-semibold">{e.status}</div>;
          case 'PENDING':
            return <div className="text-yellow-600 font-semibold">{e.status}</div>;
          case 'CANCELLED':
            return <div className="text-red-600 font-semibold">{e.status}</div>;
        }
      },
    },
    {
      key: 'action',
      headerTitle: t('action'),
      layouts: (e: IResListOrderSubscription) => {
        if (e.status === 'PENDING') {
          return (
            <Link to={ROUTES.CONFIRMATION_PAYMENT(e.id)}>
              <Button>{t('pay_now')}</Button>
            </Link>
          );
        } else {
          return <></>;
        }
      },
    },
  ];

  return (
    <div className="mt-10">
      <PageContainer className="grid gap-8">
        <PageHeader title={t('subscription')} />
        <MainTable loading={page?.loading} columns={tableColumn} data={page.listData} />
      </PageContainer>
    </div>
  );
}
