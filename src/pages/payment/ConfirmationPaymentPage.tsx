import { CardBody, MainCard } from '../../components/MainLogo';
import { useConfirmationPaymentPage } from './useConfirmationPaymentPage';

export function ConfirmationPaymentPage() {
  const page = useConfirmationPaymentPage();
  return (
    <div className="flex items-center justify-center">
      <MainCard>
        <CardBody>
          <h1>HELLO WORLD</h1>
          <p>{page?.data?.status}</p>
          <p>{page?.data?.payment_code}</p>
        </CardBody>
      </MainCard>
    </div>
  );
}
