import LoadingButton from '@mui/lab/LoadingButton';
import { Divider } from '@mui/material';
import { t } from 'i18next';
import { AreaFormModule } from '../../components/AreaFormModule';
import { InputText } from '../../components/InputText';
import { InputTextarea } from '../../components/InputTextArea';
import { CardBody, MainCard } from '../../components/MainLogo';
import { PageContainer } from '../../components/PageContainer';
import { PageHeader } from '../../components/PageHeader';
import { useNewMerchantPage } from './useNewMerchantPage';

export function NewMerchantPage() {
  const page = useNewMerchantPage();
  const formik = page.formik;

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
            <InputText
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.name && formik.errors.name}
              value={formik.values.name}
              required
              label={t('merchant_name')}
              placeholder={t('insert_merchant_name')}
            />
            <div className="grid grid-cols-2 gap-6">
              <AreaFormModule formik={formik} />
            </div>
            <InputTextarea
              className="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.address && formik.errors.address}
              label={t('address')}
              placeholder={t('insert_address')}
              name="address"
            />
            <LoadingButton
              loading={page.loading}
              disabled={page.checkDisableButton()}
              onClick={() => formik.handleSubmit()}
              variant="contained"
            >
              {t('submit')}
            </LoadingButton>
          </CardBody>
        </MainCard>
      </PageContainer>
    </div>
  );
}
