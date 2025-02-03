import { HttpService } from '../../services/http.service.ts';
import ErrorService from '../../services/error.service.ts';
import { useEffect, useState } from 'react';
import { ENDPOINT } from '../../constants/endpoint.ts';
import { BaseResponse } from '../../models/response/IResModel.ts';

export function useWalletPage() {
  const [walletBalance, setWalletBalance] = useState<number>(0);
  const [selectedPayment, setSelectedPayment] = useState<string | undefined>(undefined);
  const [openModalTopUp, setOpenModalTopUp] = useState<boolean>(false);

  const httpService = new HttpService();
  const errorService = new ErrorService();

  useEffect(() => {
    console.log(selectedPayment)
  }, [selectedPayment]);

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

  function onClickTopUp(){
    setOpenModalTopUp(true);
  }

  function  onCloseModalTopUp(){
    setOpenModalTopUp(false);
  }

  return {
    walletBalance,
    setSelectedPayment,
    selectedPayment,
    onClickTopUp,
    onCloseModalTopUp,
    openModalTopUp
  };
}
