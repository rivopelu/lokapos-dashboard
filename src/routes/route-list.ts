import { jsx } from '@emotion/react';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum';
import { SignInPage } from '../pages/SIgnInPage';
import { ROUTES } from './routes';
import Element = jsx.JSX.Element;
import { HomePage } from '../pages/HomePage';
import { SignUpPage } from '../pages/auth/SignUp';

interface IRouteList {
  elements: () => Element;
  route: string;
  type: PAGE_TYPE_ENUM;
}

export const routeList: IRouteList[] = [
  {
    elements: HomePage,
    route: ROUTES.HOME(),
    type: PAGE_TYPE_ENUM.FULL_PAGE,
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
];
