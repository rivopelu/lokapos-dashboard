import LoadingButton from '@mui/lab/LoadingButton';
import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { t } from 'i18next';
import { InputText } from '../../components/InputText';
import { CardBody, MainCard } from '../../components/MainLogo';
import { PageContainer } from '../../components/PageContainer';
import { PageHeader } from '../../components/PageHeader';
import { useDataConstants } from '../../hooks/useDataConstants';
import { useNewAccountPage } from './useNewAccountPage';

export function NewAccountPage() {
  const page = useNewAccountPage();
  const formik = page.formik;

  return (
    <div>
      <PageContainer className="my-10 grid gap-8">
        <PageHeader title={t('new_account')} />
        <MainCard>
          <CardBody className="grid gap-6">
            <InputText
              label={t('first_name')}
              placeholder={t('insert_first_name')}
              required
              name="first_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
              errorMessage={formik.touched.first_name && formik.errors.first_name}
            />
            <InputText
              label={t('last_name')}
              placeholder={t('insert_last_name')}
              required
              name="last_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
              errorMessage={formik.touched.last_name && formik.errors.last_name}
            />

            <InputText
              label={t('email')}
              placeholder={t('insert_email')}
              required
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              errorMessage={formik.touched.email && formik.errors.email}
            />
            <FormControl>
              <FormLabel required id="demo-radio-buttons-group-label">
                {t('role')}
              </FormLabel>
              <RadioGroup
                value={formik.values.role}
                onChange={(_, e) => formik.setFieldValue('role', e)}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                {useDataConstants().dataRole.map((item, i) => (
                  <FormControlLabel
                    key={i}
                    className="border"
                    value={item.value}
                    control={<Radio />}
                    label={item.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <FormControlLabel
              defaultChecked={false}
              checked={page.checked}
              onChange={(_, e) => page.setChecked(e)}
              control={<Checkbox />}
              label={t('show-make-sure-data-alert')}
            />
            <LoadingButton
              loading={page.loadingSubmit}
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
