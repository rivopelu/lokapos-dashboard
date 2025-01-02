import { t } from 'i18next';
import { PageContainer } from '../../components/PageContainer';
import { PageHeader } from '../../components/PageHeader';
import { Avatar, Button } from '@mui/material';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { ITableColumnData, MainTable } from '../../components/MainTable';
import { IResListAccount } from '../../models/response/IResListAccount';
import { useAccountPage } from './useAccountPage';
import DateHelper from '../../helper/date-helper';

export function AccountPage() {
  const page = useAccountPage();
  const dateHelper = new DateHelper();

  const tableColumn: ITableColumnData[] = [
    {
      key: 'name',
      headerTitle: t('name'),
      layouts: (e: IResListAccount) => (
        <div className="flex items-center gap-4 ">
          <Avatar src={e.avatar} />
          <div>{e.full_name}</div>
        </div>
      ),
    },
    {
      key: 'email',
      headerTitle: t('email'),
      value: 'email',
    },
    {
      key: 'created_date',
      headerTitle: t('created_date'),
      layouts: (e: IResListAccount) => (
        <div>{e.created_date ? dateHelper.toFormatDate(new Date(e.created_date), 'dd LLLL, yyyy - HH:mm') : ''}</div>
      ),
    },
    {
      key: 'role',
      headerTitle: t('role'),
      value: 'role',
    },
  ];

  return (
    <PageContainer className="my-8 grid gap-6">
      <div className="flex items-center justify-between">
        <PageHeader title={t('account')} description={t('account_page_description')} />
        <Link to={ROUTES.NEW_ACCOUNT()}>
          <Button variant="contained" endIcon={<MdAdd />}>
            {t('add_new_account')}
          </Button>
        </Link>
      </div>
      <MainTable data={page.dataList} columns={tableColumn} />
    </PageContainer>
  );
}
