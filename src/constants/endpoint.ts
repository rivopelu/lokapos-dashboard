export const ENDPOINT = {
  SIGN_IN: () => `/auth/v1/sign-in`,
  SIGN_UP: () => `/auth/v1/sign-up`,
  GET_ME: () => `/account/v1/get-me`,
  LIST_SUBSCRIPTION: () => `/subscription/v1/list/active`,
  LIST_MERCHANT: () => `/merchant/v1/list`,
  CREATE_SUBSCRIPTION_ORDER: () => `/subscription/v1/order-subscription`,
  GET_ORDER_SUBSCRIPTION: () => `/subscription/v1/order-list`,
  GET_LIST_PROVINCE: () => `/area/v1/province`,
  GET_LIST_CITY: (id: number) => `/area/v1/city/${id}`,
  GET_LIST_DISTRICT: (id: number) => `/area/v1/district/${id}`,
  GET_LIST_SUB_DISTRICT: (id: number) => `/area/v1/sub-district/${id}`,
};
