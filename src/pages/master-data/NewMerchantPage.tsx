import { t } from 'i18next';
import { CardBody, MainCard } from '../../components/MainLogo';
import { PageContainer } from '../../components/PageContainer';
import { PageHeader } from '../../components/PageHeader';
import { Button, Divider } from '@mui/material';
import { InputText } from '../../components/InputText';
import { AreaFormModule } from '../../components/AreaFormModule';
import { InputTextarea } from '../../components/InputTextArea';

export function NewMerchantPage() {
  return (
    <div className="mt-10">
      <PageContainer className="grid gap-8">
        <div>
          <PageHeader title={t('new_merchant')} />
        </div>
        <MainCard>
          <CardBody>
            <h1>{t('new_merchant')}</h1>
          </CardBody>
          <Divider />
          <CardBody className="grid gap-4">
            <InputText required label={t('merchant_name')} placeholder={t('insert_merchant_name')} />
            <div className="grid grid-cols-2 gap-6">
              <AreaFormModule />
            </div>
            <InputTextarea label={t('address')} placeholder={t('insert_address')} name="address" />

            <Button variant="contained">{t('submit')}</Button>
          </CardBody>
        </MainCard>
      </PageContainer>
    </div>
  );
}
