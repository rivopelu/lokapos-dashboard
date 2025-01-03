import { PAYMENT_METHOD_TYPE_ENUM } from '../enums/payemnt-method-type-enum';

export interface IListPaymentMethod {
  name: string;
  key: PAYMENT_METHOD_TYPE_ENUM;
  image: string;
}
