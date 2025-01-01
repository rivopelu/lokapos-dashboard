import { useFormik } from 'formik';
import { t } from 'i18next';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { ILabelValue } from '../../interfaces/feature-type-interface';
import { IReqCreateNewMenu } from '../../models/request/IReqCreateNewMenu';
import { MasterDataAction } from '../../redux/actions/master-data.action';
import { IMasterDataSlice } from '../../redux/reducers/master-data.reducers';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import ErrorService from '../../services/error.service';
import { HttpService } from '../../services/http.service';
import { ENDPOINT } from '../../constants/endpoint';
import { UiServices } from '../../services/ui.service';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export function useCreateNewMenuPage() {
  const [checked, setChecked] = useState<boolean>(false);
  const [listCategories, setListCategories] = useState<ILabelValue<string>[]>([]);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  const MasterData: IMasterDataSlice = useAppSelector((state) => state.MasterData);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const masterDataAction = new MasterDataAction();
  const httpService = new HttpService();
  const errorService = new ErrorService();
  const uiService = new UiServices();

  const initValue: IReqCreateNewMenu = {
    category_id: '',
    description: '',
    image_url: '',
    name: '',
    price: 0,
  };

  const validationSchema = yup.object().shape({
    category_id: yup.string().required(t('validation.required', { name: t('category_id') })),

    description: yup
      .string()
      .required(t('validation.required', { name: t('description') }))
      .max(255, t('validation.max_length', { name: t('description'), length: 255 })),

    image_url: yup
      .string()
      .url(t('validation.invalid_url', { name: t('image_url') }))
      .required(t('validation.required', { name: t('image_url') })),

    name: yup
      .string()
      .required(t('validation.required', { name: t('menu_name') }))
      .min(3, t('validation.min_length', { name: t('menu_name'), length: 3 }))
      .max(50, t('validation.max_length', { name: t('menu_name'), length: 50 })),

    price: yup
      .number()
      .required(t('validation.required', { name: t('price') }))
      .min(0, t('validation.min_value', { name: t('price'), value: 0 }))
      .typeError(t('validation.must_be_number', { name: t('price') })),
  });

  const formik = useFormik({
    initialValues: initValue,
    validationSchema: validationSchema,
    onSubmit: (e) => {
      onSubmit(e);
    },
  });

  function onSubmit(data: IReqCreateNewMenu) {
    if (checked) {
      setLoadingSubmit(true);
      httpService
        .POST(ENDPOINT.CREATE_NEW_MENU(), data)
        .then(() => {
          setLoadingSubmit(false);
          uiService.handleSnackbarSuccess(t('menu_success_created'));
          navigate(ROUTES.MENU_PAGE());
        })
        .catch((e) => {
          errorService.fetchApiError(e);
        });
    }
  }

  function checkValidButton() {
    return !(checked && formik.isValid);
  }

  useEffect(() => {
    dispatch(masterDataAction.getListCategories());
  }, []);

  useEffect(() => {
    if (MasterData?.listCategories?.data) {
      setListCategories(
        MasterData.listCategories.data.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        }),
      );
    }
  }, [MasterData?.listCategories?.data]);

  return { formik, checked, setChecked, checkValidButton, listCategories, loadingSubmit };
}
