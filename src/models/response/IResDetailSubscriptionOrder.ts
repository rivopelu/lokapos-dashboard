export interface IResDetailSubscriptionOrder {
  payment_method: string;
  payment_code: string;
  order_id: string;
  total_transaction: number;
  status: string;
  payment_subscription_expire: number;
}
