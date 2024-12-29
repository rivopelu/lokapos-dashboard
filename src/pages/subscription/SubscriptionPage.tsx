import { t } from 'i18next';
import { ITableColumnData, MainTable } from '../../components/MainTable';
import { PageContainer } from '../../components/PageContainer';
import { PageHeader } from '../../components/PageHeader';
import { useSubscriptionPage } from './useSubscriptionPage';
import { NumberFormatterHelper } from '../../helper/number-format-helper';
import { IResListOrderSubscription } from '../../models/response/IResListOrderSubscription';
import DateHelper from '../../helper/date-helper';

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
      key: 'status',
      headerTitle: t('status'),
      layouts: (e: IResListOrderSubscription) => <div className="text-yellow-600 font-semibold">{e.status}</div>,
    },
  ];

  return (
    <div className="mt-10">
      <PageContainer className="grid gap-8">
        <PageHeader title={t('subscription')} />
        <MainTable columns={tableColumn} data={page.listData} />
      </PageContainer>
    </div>
  );
}
