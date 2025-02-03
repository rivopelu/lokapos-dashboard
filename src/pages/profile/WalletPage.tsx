import { PageContainer } from '../../components/PageContainer.tsx';
import { NumberFormatterHelper } from '../../helper/number-format-helper.ts';
import { t } from 'i18next';
import { useWalletPage } from './useWalletPage.ts';
import { Button, CardActionArea } from '@mui/material';
import { PopupModal } from '../../components/PopupModal.tsx';
import { InputRupiah } from '../../components/InputRupiah.tsx';
import { CardBody, MainCard } from '../../components/MainLogo.tsx';
import { useDataConstants } from '../../hooks/useDataConstants.ts';

export function WalletPage() {
  const numberFormatHelper = new NumberFormatterHelper();
  const page = useWalletPage();

  function modalTopUpComponent() {
    return (
      <div className={'grid gap-6'}>
        <h1 className={'text-2xl capitalize'}>{t('top_up')}</h1>
        <div>
          <InputRupiah placeholder={t("insert_top_up_amount")} label={t("amount")} />
        </div>
        <div>
          <div className={'mb-2 text-slate-500'}>{t('select_bank')}</div>
          <div className={'grid grid-cols-3 gap-3'}>
            {useDataConstants().bankPaymentMethodData.map((item, i) => (
              <CardActionArea key={i} onClick={() => page.setSelectedPayment(item.name)}>
                <MainCard
                  className={`px-10 border duration-500 ${page.selectedPayment === item.name ? 'border-primary-main bg-primary-main'  : ''}`}
                >
                  <CardBody>
                    <div className="flex items-center gap-4 justify-center">
                      <img src={item.image} alt={item.name} className="h-10" />
                    </div>
                  </CardBody>
                </MainCard>
              </CardActionArea>
            ))}
          </div>
        </div>
        <Button variant={'contained'}>{t('top_up')}</Button>
      </div>
    );
  }

  return (
    <PageContainer size={'xs'} className={'mt-8'}>
      <PopupModal  component={modalTopUpComponent()} open={page.openModalTopUp} onClose={page.onCloseModalTopUp} />
      <div className={'grid gap-8 print:bg-red-500'}>
        <div className={'bg-white p-8 border rounded-lg'}>
          <div className={'grid gap-6'}>
            <div>
              <h1 className={'text-slate-500'}>{t('your_balance')}</h1>
              <div className={' text-4xl'}>{numberFormatHelper.toRupiah(page.walletBalance)}</div>
            </div>
            <div className={'grid grid-cols-2 gap-4'}>
              <Button onClick={page.onClickTopUp} variant={'outlined'}>{t('top_up')}</Button>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
