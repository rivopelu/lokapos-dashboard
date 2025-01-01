import { Button, Checkbox, Divider, FormControlLabel } from '@mui/material';
import { t } from 'i18next';
import { InputRupiah } from '../../components/InputRupiah';
import { InputText } from '../../components/InputText';
import { InputTextarea } from '../../components/InputTextArea';
import { CardBody, MainCard } from '../../components/MainLogo';
import { PageContainer } from '../../components/PageContainer';
import { PageHeader } from '../../components/PageHeader';
import { UploadBox } from '../../components/UploadBoxArea';
import { useCreateNewMenuPage } from './useCreateNewMenuPage';
import { InputSelect } from '../../components/InputSelect';
import LoadingButton from '@mui/lab/LoadingButton';

export function CreateNewMenuPage() {
  const page = useCreateNewMenuPage();
  const formik = page.formik;

  return (
    <PageContainer className="my-10 grid gap-8">
      <PageHeader title={t('new_serving_menu')} />
      <MainCard>
        <CardBody>
          <h1 className="italic">{t('insert_your_menu_information')}</h1>
        </CardBody>
        <Divider />
        <CardBody className="grid gap-8">
          <UploadBox
            ratio={16 / 9}
            label={t('menu_image')}
            required
            onChange={(e) => formik.setFieldValue('image_url', e)}
            values={formik.values.image_url}
          />
          <InputText
            name="name"
            label={t('menu_name')}
            placeholder={t('insert_menu_name')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            required
            errorMessage={formik.touched.name && formik.errors.name}
          />
          <InputSelect
            options={page.listCategories}
            name="category_id"
            value={formik.values.category_id}
            errorMessage={formik.touched.category_id && formik.errors.category_id}
            label={t('category')}
            placeholder={t('select_menu_category')}
            onChange={(e) => formik.setFieldValue('category_id', e)}
          />
          <InputRupiah
            name="price"
            value={formik.values.price}
            label={t('price')}
            placeholder={t('insert_price')}
            onChange={(e) => formik.setFieldValue('price', e.target.value)}
            onBlur={formik.handleBlur}
            errorMessage={formik.touched.price && formik.errors.price}
          />

          <InputTextarea
            name="description"
            label={t('menu_description')}
            placeholder={t('insert_menu_description')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            errorMessage={formik.touched.description && formik.errors.description}
          />

          <FormControlLabel
            defaultChecked={false}
            checked={page.checked}
            onChange={(_, e) => page.setChecked(e)}
            control={<Checkbox />}
            label={t('show-make-sure-data-alert')}
          />
          <LoadingButton
            loading={page.loadingSubmit}
            disabled={page.checkValidButton()}
            variant="contained"
            onClick={() => formik.handleSubmit()}
          >
            {t('submit')}
          </LoadingButton>
        </CardBody>
      </MainCard>
    </PageContainer>
  );
}
