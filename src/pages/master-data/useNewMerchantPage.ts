import { useFormik } from 'formik';
import { t } from 'i18next';
import { useState } from 'react';
import { ENDPOINT } from '../../constants/endpoint';
import { IReqNewMerchant } from '../../models/request/IReqNewMerchant';
import ErrorService from '../../services/error.service';
import { HttpService } from '../../services/http.service';
import { UiServices } from '../../services/ui.service';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export function useNewMerchantPage() {
  const httpService = new HttpService();
  const errorService = new ErrorService();
  const uiService = new UiServices();

  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const initValue: IReqNewMerchant = {
    name: '',
    address: '',
    province_id: undefined,
    city_id: undefined,
    district_id: undefined,
    sub_district_id: undefined,
  };

  const formik = useFormik({
    initialValues: initValue,
    onSubmit: (value) => {
      onSubmit(value);
    },
  });

  function onSubmit(data: IReqNewMerchant) {
    setLoading(true);
    httpService
      .POST(ENDPOINT.CREATE_NEW_MERCHANT(), data)
      .then(() => {
        navigate(ROUTES.MERCHANT());
        uiService.handleSnackbarSuccess(t('merchant_success_created'));
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        errorService.fetchApiError(e);
      });
  }

  function checkDisableButton() {
    const values = formik.values;
    return !(
      values.name &&
      values.address &&
      values.province_id &&
      values.city_id &&
      values.district_id &&
      values.sub_district_id
    );
  }

  return { formik, checkDisableButton, loading };
}
