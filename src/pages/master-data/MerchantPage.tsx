import { t } from 'i18next';
import { CardBody, MainCard } from '../../components/MainLogo';
import { PageContainer } from '../../components/PageContainer';
import { PageHeader } from '../../components/PageHeader';
import { useMerchantPage } from './useMerchantpage';
import { Button } from '@mui/material';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export function MerchantPage() {
  const page = useMerchantPage();
  return (
    <PageContainer className="mt-10">
      <div className="grid gap-6">
        <div className="flex justify-between">
          <PageHeader title={t('merchant')} description={t('merchant_page_description')} />
          <div>
            <Link to={ROUTES.NEW_MERCHANT()}>
              <Button endIcon={<MdAdd />} variant="contained">
                {t('add_new_merchant')}
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {page.listMerchant.map((item, i) => (
            <MainCard key={i}>
              <CardBody>
                <div>{item.name}</div>
              </CardBody>
            </MainCard>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
