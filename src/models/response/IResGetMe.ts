import { IResBusinessDetail } from './IResBusinessDetail';

export interface IResGetMe {
  first_name: string;
  last_name: string;
  is_verified_email: boolean;
  full_name: string;
  email: string;
  id: string;
  business?: IResBusinessDetail;
}
