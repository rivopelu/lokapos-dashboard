import { PAYMENT_METHOD_TYPE_ENUM } from '../../enums/payemnt-method-type-enum';

export interface IResDetailSubscriptionOrder {
  payment_method: PAYMENT_METHOD_TYPE_ENUM;
  payment_code: string;
  order_id: string;
  total_transaction: number;
  status: string;
  payment_subscription_expire: number;
}
