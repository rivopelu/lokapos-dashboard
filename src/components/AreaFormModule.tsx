import { t } from 'i18next';
import { Fragment, useEffect, useState } from 'react';
import { IAreaData, ILabelValue } from '../interfaces/feature-type-interface';
import { AreaAction } from '../redux/actions/area.actions';
import { IAreaSlice } from '../redux/reducers/area.reducer';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { InputSelect } from './InputSelect';

export function AreaFormModule(props: IProps) {
  const Area: IAreaSlice = useAppSelector((state) => state.Area);
  const formik = props.formik;

  const [result, setResult] = useState<IAreaData>({
    provinceId: undefined,
    cityId: undefined,
    districtId: undefined,
    subDistrictId: undefined,
  });

  const [listProvince, setListProvince] = useState<ILabelValue<string>[]>([]);
  const [listCity, setListCity] = useState<ILabelValue<string>[]>([]);
  const [listDistrict, setListDistrict] = useState<ILabelValue<string>[]>([]);
  const [listSubDistrict, setListSubDistrict] = useState<ILabelValue<string>[]>([]);

  const dispatch = useAppDispatch();

  const areaAction = new AreaAction();

  useEffect(() => {
    dispatch(areaAction.getProvince());
  }, []);

  function onChangeProvince(e?: number) {
    setResult({ provinceId: e, cityId: undefined, districtId: undefined, subDistrictId: undefined });
    if (e) {
      dispatch(areaAction.getCity(e));
    }
    if (formik) {
      formik.setFieldValue('province_id', e);
    }
  }

  function onChangeCity(e?: number) {
    setResult({ cityId: e, districtId: undefined, subDistrictId: undefined, provinceId: result.provinceId });
    if (e) {
      dispatch(areaAction.getDistrict(e));
    }
    if (formik) {
      formik.setFieldValue('city_id', e);
    }
  }

  function onChangeDistrict(e?: number) {
    setResult({ ...result, districtId: e, subDistrictId: undefined });
    if (e) {
      dispatch(areaAction.getSubDistrict(e));
    }
    if (formik) {
      formik.setFieldValue('district_id', e);
    }
  }

  function onChangeSubDistrict(e?: number) {
    setResult({ ...result, subDistrictId: e });
    if (formik) {
      formik.setFieldValue('sub_district_id', e);
    }
  }

  useEffect(() => {
    if (Area?.listProvince?.data) {
      setListProvince(
        Area.listProvince.data.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        }),
      );
    }
  }, [Area.listProvince]);

  useEffect(() => {
    if (Area?.listCity?.data) {
      setListCity(
        Area.listCity.data.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        }),
      );
    }
  }, [Area.listCity]);

  useEffect(() => {
    if (Area?.listDistrict?.data) {
      setListDistrict(
        Area.listDistrict.data.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        }),
      );
    }
  }, [Area.listDistrict]);

  useEffect(() => {
    if (Area?.listSubDistrict?.data) {
      setListSubDistrict(
        Area.listSubDistrict.data.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        }),
      );
    }
  }, [Area.listSubDistrict]);

  return (
    <Fragment>
      <InputSelect
        value={result?.provinceId ? result.provinceId.toString() : undefined}
        onChange={(e) => onChangeProvince(e ? (e as number) : undefined)}
        options={listProvince}
        placeholder={t('select_province')}
        label={t('province')}
      />
      <InputSelect
        value={result?.cityId ? result.cityId.toString() : undefined}
        onChange={(e) => onChangeCity(e ? (e as number) : undefined)}
        options={listCity}
        placeholder={t('select_city')}
        label={t('city')}
      />
      <InputSelect
        value={result?.districtId ? result.districtId.toString() : undefined}
        onChange={(e) => onChangeDistrict(e ? (e as number) : undefined)}
        options={listDistrict}
        placeholder={t('select_district')}
        label={t('district')}
      />

      <InputSelect
        value={result?.subDistrictId ? result.subDistrictId.toString() : undefined}
        onChange={(e) => onChangeSubDistrict(e ? (e as number) : undefined)}
        options={listSubDistrict}
        placeholder={t('select_sub_district')}
        label={t('sub_district')}
      />
    </Fragment>
  );
}

interface IProps {
  formik?: any;
}
