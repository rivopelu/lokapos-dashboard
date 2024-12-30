import { IResBusinessDetail } from './IResBusinessDetail';

export interface IResGetMe {
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  id: string;
  business?: IResBusinessDetail;
}
