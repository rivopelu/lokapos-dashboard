import { PAYMENT_METHOD_TYPE_ENUM } from '../../enums/payemnt-method-type-enum';

export interface IReqPaymentMethod {
  package_id: string;
  method: PAYMENT_METHOD_TYPE_ENUM;
}
