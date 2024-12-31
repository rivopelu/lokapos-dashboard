import { t } from 'i18next';
import { CustomAlert } from '../components/CustomsAlert';
import { PageContainer } from '../components/PageContainer';
import { SubscriptionCard } from '../components/SubscriptionCard';
import DateHelper from '../helper/date-helper';
import { useHomePage } from './useHomePage';
import { MdInfo } from 'react-icons/md';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes';

export function HomePage() {
  const page = useHomePage();
  const dateHelper = new DateHelper();
  return (
    <div className="relative">
      <PageContainer className="grid gap-6 mt-10">
        {!page.business && (
          <div className="z-10">
            <CustomAlert
              description={t('business_not_registered_description')}
              icon={MdInfo}
              rightContent={
                <Link to={ROUTES.REGISTER_BUSINESS()}>
                  <Button color="warning">{t('register_here')}</Button>
                </Link>
              }
              title={t('your_business_not_registered')}
            />
          </div>
        )}
        <div className="grid grid-cols-4 gap-4 relative z-10 ">
          {page.dataSubscription.map((item, i) => (
            <SubscriptionCard data={item} key={i} />
          ))}
        </div>

        {page.business && (
          <div>
            <h1>{page.business?.business_full_address}</h1>
            <p>
              {page.business?.expire_date
                ? dateHelper.toFormatDate(new Date(page.business.expire_date), 'dd LLLL, yyyy - HH:mm')
                : ''}
            </p>
          </div>
        )}
      </PageContainer>
      <div className="w-full top-0 bg-primary-main h-[60%] absolute"></div>
    </div>
  );
}
