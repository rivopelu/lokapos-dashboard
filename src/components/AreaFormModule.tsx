import { Fragment, useEffect, useState } from 'react';
import { AreaAction } from '../redux/actions/area.actions';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { IAreaSlice } from '../redux/reducers/area.reducer';
import { InputAutocomplete } from './InputAutocomplete';
import { t } from 'i18next';
import { IAreaData, ILabelValue } from '../interfaces/feature-type-interface';

export function AreaFormModule() {
  const Area: IAreaSlice = useAppSelector((state) => state.Area);

  const [result, setResult] = useState<IAreaData>({
    provinceId: undefined,
    cityId: undefined,
    districtId: undefined,
    subDistrictId: undefined,
  });

  const [listProvince, setListProvince] = useState<ILabelValue<string>[]>([]);
  const [listCity, setListCity] = useState<ILabelValue<string>[]>([]);

  const dispatch = useAppDispatch();

  const areaAction = new AreaAction();

  useEffect(() => {
    dispatch(areaAction.getProvince());
  }, []);

  function onChangeProvince(e?: number) {
    setResult({ ...result, provinceId: e });
    if (e) {
      dispatch(areaAction.getCity(e));
    }
  }

  function onChangeCity(e?: number) {
    setResult({ ...result, cityId: e });
    if (e) {
      // dispatch(areaAction.getCity(e));
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

  return (
    <Fragment>
      <InputAutocomplete
        value={result?.provinceId ? result.provinceId.toString() : undefined}
        onChange={(e) => onChangeProvince(e ? (e as number) : undefined)}
        options={listProvince}
        placeholder={t('select_province')}
        label={t('province')}
      />
      <InputAutocomplete
        value={result?.cityId ? result.cityId.toString() : undefined}
        onChange={(e) => onChangeCity(e ? (e as number) : undefined)}
        options={listCity}
        placeholder={t('select_city')}
        label={t('city')}
      />
    </Fragment>
  );
}
