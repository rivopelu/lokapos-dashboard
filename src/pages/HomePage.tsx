import { PageContainer } from '../components/PageContainer';
import { SubscriptionCard } from '../components/SubscriptionCard';
import DateHelper from '../helper/date-helper';
import { useHomePage } from './useHomePage';

export function HomePage() {
  const page = useHomePage();
  const dateHelper = new DateHelper();
  return (
    <div className="relative">
      <PageContainer className="grid gap-6">
        <div className="grid grid-cols-4 gap-4 relative z-10 mt-10">
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
