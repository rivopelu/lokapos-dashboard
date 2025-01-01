export const ROUTES = {
  HOME: () => `/`,
  VERIFY_EMAIL: () => `/verify-email`,
  SIGN_IN: () => `/auth/sign-in`,
  SIGN_UP: () => `/auth/sign-up`,
  MASTER_DATA: () => `/master-data`,
  MERCHANT: () => `/master-data/merchant`,
  SUBSCRIPTION_PAGE: () => `/subscription`,
  NEW_MERCHANT: () => `/master-data/merchant/new`,
  REGISTER_BUSINESS: () => `/business-register`,
  PROFILE: () => `/profile`,
  PAYMENT_METHOD: (orderId: string | null) => `/payment/method${orderId ? 'packageId=' + orderId : ''}`,
  MENU_PAGE: () => `/master-data/menu`,
};
