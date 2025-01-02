import { t } from 'i18next';
import { PageContainer } from '../../components/PageContainer';
import { PageHeader } from '../../components/PageHeader';
import { Button } from '@mui/material';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export function AccountPage() {
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
    </PageContainer>
  );
}
