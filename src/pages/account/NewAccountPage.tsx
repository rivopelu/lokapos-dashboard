import { t } from 'i18next';
import { PageContainer } from '../../components/PageContainer';
import { PageHeader } from '../../components/PageHeader';
import { CardBody, MainCard } from '../../components/MainLogo';
import { InputText } from '../../components/InputText';
import { Button } from '@mui/material';

export function NewAccountPage() {
  return (
    <div>
      <PageContainer className="my-10 grid gap-8">
        <PageHeader title={t('new_account')} />
        <MainCard>
          <CardBody className="grid gap-6">
            <InputText label={t('first_name')} placeholder={t('insert_first_name')} required />
            <InputText label={t('last_name')} placeholder={t('insert_last_name')} required />
            <InputText label={t('email')} placeholder={t('insert_email')} required />
            <Button variant="contained">{t('submit')}</Button>
          </CardBody>
        </MainCard>
      </PageContainer>
    </div>
  );
}
