import { t } from 'i18next';
import { InputText } from '../../components/InputText';
import { CardBody, MainCard } from '../../components/MainLogo';
import { InputTextarea } from '../../components/InputTextArea';
import { AreaFormModule } from '../../components/AreaFormModule';
import LoadingButton from '@mui/lab/LoadingButton';
import { Divider } from '@mui/material';
import { UploadBox } from '../../components/UploadBoxArea';
import { useBusinessRegisterPage } from './useBusinessRegisterPage';

export function BusinessRegisterPage() {
  const page = useBusinessRegisterPage();
  const formik = page.formik;

  return (
    <div className="flex h-full w-full  flex-1 justify-center items-center">
      <div className="max-w-2xl w-full">
        <MainCard>
          <CardBody>
            <p className="text-2xl">{t('register_your_business')}</p>
          </CardBody>
          <Divider />
          <CardBody>
            <div className="grid gap-6">
              <UploadBox
                values={formik.values.logo}
                onChange={(e) => formik.setFieldValue('logo', e)}
                label={t('business_logo')}
                required
              />
              <InputText
                label={t('business_name')}
                placeholder={t('insert_business_name')}
                required
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errorMessage={formik.touched.name && formik.errors.name}
              />
              <AreaFormModule formik={formik} />
              <InputTextarea
                label={t('address')}
                placeholder={t('insert_address')}
                required
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errorMessage={formik.touched.address && formik.errors.address}
              />

              <LoadingButton
                disabled={page.checkDisableButton()}
                loading={page.loadingSubmit}
                onClick={() => formik.handleSubmit()}
                variant="contained"
              >
                {t('submit')}
              </LoadingButton>
            </div>
          </CardBody>
        </MainCard>
      </div>
    </div>
  );
}
