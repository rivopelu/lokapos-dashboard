import { PageContainer } from '../../components/PageContainer.tsx';
import { NumberFormatterHelper } from '../../helper/number-format-helper.ts';
import { t } from 'i18next';
import { useWalletPage } from './useWalletPage.ts';
import { Button } from '@mui/material';

export function WalletPage() {
  const numberFormatHelper = new NumberFormatterHelper();
  const page = useWalletPage();

  return (
    <PageContainer size={'xs'} className={'mt-8'}>
      <div className={'grid gap-8'}>
        <div className={"bg-white p-8"}>
          <div className={'gap-2 grid'}>
            <h1 className={'text-slate-500'}>{t('your_balance')}</h1>
            <div className={' text-4xl'}>{numberFormatHelper.toRupiah(page.walletBalance)}</div>
          </div>
        </div>
        <Button>{t("top_up")}</Button>
      </div>
    </PageContainer>
  );
}
