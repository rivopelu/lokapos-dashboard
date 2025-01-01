import { jsx } from '@emotion/react';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum';
import { SignInPage } from '../pages/auth/SIgnInPage';
import { ROUTES } from './routes';
import Element = jsx.JSX.Element;
import { HomePage } from '../pages/HomePage';
import { SignUpPage } from '../pages/auth/SignUp';
import { MasterDataPage } from '../pages/MasterDataPage';
import { MerchantPage } from '../pages/master-data/MerchantPage';
import { SubscriptionPage } from '../pages/subscription/SubscriptionPage';
import { NewMerchantPage } from '../pages/master-data/NewMerchantPage';
import { VerifyEmailPage } from '../pages/auth/VerifyEmailPage';
import { BusinessRegisterPage } from '../pages/master-data/BusinessRegisterPage';

interface IRouteList {
  elements: () => Element;
  route: string;
  type: PAGE_TYPE_ENUM;
}

export const routeList: IRouteList[] = [
  {
    elements: HomePage,
    route: ROUTES.HOME(),
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
  {
    elements: SignInPage,
    route: ROUTES.SIGN_IN(),
    type: PAGE_TYPE_ENUM.FULL_PAGE,
  },
  {
    elements: SignUpPage,
    route: ROUTES.SIGN_UP(),
    type: PAGE_TYPE_ENUM.FULL_PAGE,
  },
  {
    elements: MasterDataPage,
    route: ROUTES.MASTER_DATA(),
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
  {
    elements: MerchantPage,
    route: ROUTES.MERCHANT(),
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
  {
    elements: SubscriptionPage,
    route: ROUTES.SUBSCRIPTION_PAGE(),
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
  {
    elements: NewMerchantPage,
    route: ROUTES.NEW_MERCHANT(),
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
  {
    elements: VerifyEmailPage,
    route: ROUTES.VERIFY_EMAIL(),
    type: PAGE_TYPE_ENUM.FULL_PAGE,
  },
  {
    elements: BusinessRegisterPage,
    route: ROUTES.REGISTER_BUSINESS(),
    type: PAGE_TYPE_ENUM.SECONDARY,
  },
];
