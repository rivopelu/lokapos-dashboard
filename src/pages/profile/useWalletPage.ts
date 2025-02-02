import { HttpService } from '../../services/http.service.ts';
import ErrorService from '../../services/error.service.ts';
import { useEffect, useState } from 'react';
import { ENDPOINT } from '../../constants/endpoint.ts';
import { BaseResponse } from '../../models/response/IResModel.ts';

export function useWalletPage() {
  const [walletBalance, setWalletBalance] = useState<number>(0);

  const httpService = new HttpService();
  const errorService = new ErrorService();

  useEffect(() => {
    httpService
      .GET(ENDPOINT.WALLET_BALANCE())
      .then((e: BaseResponse<number>) => {
        setWalletBalance(e.data.response_data);
      })
      .catch((e) => {
        errorService.fetchApiError(e);
      });
  }, []);

  return {
    walletBalance
  };
}
