export interface ILabelValue<T> {
  label: string;
  value: T | string;
  icon?: any;
}

export type AlignType = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export interface IAreaData {
  provinceId?: number;
  cityId?: number;
  districtId?: number;
  subDistrictId?: number;
}


export interface defaultPaginationType {
  page: number
  size: number
  type?: string
  sub_type?: string
  query?: string
}