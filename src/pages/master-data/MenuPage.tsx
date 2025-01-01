import { t } from 'i18next';
import { PageContainer } from '../../components/PageContainer';
import { PageHeader } from '../../components/PageHeader';
import { Button } from '@mui/material';
import { MdAdd } from 'react-icons/md';
import { ITableColumnData, MainTable } from '../../components/MainTable';
import { IResListMenu } from '../../models/response/IResListMenu';
import { useMenuPage } from './useMenuPage';
import { NumberFormatterHelper } from '../../helper/number-format-helper';
import DateHelper from '../../helper/date-helper';

export function MenuPage() {
  const page = useMenuPage();

  const numberFormat = new NumberFormatterHelper();
  const dateHelper = new DateHelper();

  const tableColumn: ITableColumnData[] = [
    {
      key: 'name',
      headerTitle: t('menu_name'),
      layouts: (e: IResListMenu) => {
        return <div>{e.name}</div>;
      },
    },
    {
      key: 'price',
      headerTitle: t('price'),
      layouts: (e: IResListMenu) => {
        return <div>{e?.price ? numberFormat.toRupiah(e.price) : '-'}</div>;
      },
    },
    {
      key: 'created_date',
      headerTitle: t('created_date'),
      layouts: (e: IResListMenu) => {
        return (
          <div>
            {e?.created_date ? dateHelper.toFormatDate(new Date(e.created_date), 'dd LLLL, yyyy - HH:mm') : '-'}
          </div>
        );
      },
    },
  ];

  return (
    <PageContainer className="my-10 grid gap-8">
      <div className="flex justify-between">
        <PageHeader title={t('menu')} description={t('menu_page_description')} />
        <div>
          <Button endIcon={<MdAdd />} variant="outlined">
            {t('create_new_serving_menu')}
          </Button>
        </div>
      </div>
      <MainTable loading={page.loading} data={page.listMenu} columns={tableColumn} />
    </PageContainer>
  );
}
