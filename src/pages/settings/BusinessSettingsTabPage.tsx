import { InputText } from '../../components/InputText.tsx';
import { t } from 'i18next';
import { AreaFormModule } from '../../components/AreaFormModule.tsx';
import { useBusinessSettingsTabPage } from './useBusinessSettingsTabPage.ts';
import { InputTextarea } from '../../components/InputTextArea.tsx';
import LoadingButton from '@mui/lab/LoadingButton';
import { Divider } from '@mui/material';
import { CardBody } from '../../components/MainLogo.tsx';
import { UploadBox } from '../../components/UploadBoxArea.tsx';

export function BusinessSettingsTabPage() {
  const page = useBusinessSettingsTabPage();
  const formik = page.formik;
  return (
    <div className={'grid '}>
      <CardBody>
        <h3 className={'text-2xl font-semibold'}>{t('business_setting')}</h3>
      </CardBody>
      <Divider />

      <CardBody className={'grid gap-6'}>
        <UploadBox
          folder={'business-logo'}
          values={formik.values.logo}
          onChange={(e) => formik.setFieldValue('logo', e)}
          label={t('business_logo')}
          required
        />
        <InputText
          required
          label={t('business_name')}
          placeholder={t('insert_business_name')}
          name={'name'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.touched.name && formik.errors.name}
          value={formik.values.name}
        />
        {formik.values.province_id &&
          formik.values.city_id &&
          formik.values.district_id &&
          formik.values.sub_district_id && <AreaFormModule formik={page.formik} />}
        <InputTextarea
          label={t('address')}
          placeholder={t('insert_business_address')}
          name={'address'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.touched.address && formik.errors.address}
          value={formik.values.address}
        />
        <LoadingButton onClick={() => formik.handleSubmit()} loading={page.loadingSubmit} variant={'contained'}>{t('submit')}</LoadingButton>
      </CardBody>
    </div>
  );
}
