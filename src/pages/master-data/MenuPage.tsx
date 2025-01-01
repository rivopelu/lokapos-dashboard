import { t } from 'i18next';
import { PageContainer } from '../../components/PageContainer';
import { PageHeader } from '../../components/PageHeader';
import { Button } from '@mui/material';
import { MdAdd } from 'react-icons/md';
import { ITableColumnData, MainTable } from '../../components/MainTable';
import { IResListMenu } from '../../models/response/IResListMenu';
import { useMenuPage } from './useMenuPage';

export function MenuPage() {
  const page = useMenuPage();

  const tableColumn: ITableColumnData[] = [
    {
      key: 'name',
      headerTitle: t('menu_name'),
      layouts: (e: IResListMenu) => {
        return <div>{e.name}</div>;
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
