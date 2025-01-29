export interface IResListShift {
  id: string;
  start_date: number;
  end_date: number;
  is_active: boolean;
  merchant_name : string;
  account : IResListAccountShift[]
}

export interface IResListAccountShift {
  name: string;
  avatar: string;
  id: string;
  email: string;
}
