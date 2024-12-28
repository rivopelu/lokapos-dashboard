import { PageContainer } from '../components/PageContainer';
import { SubscriptionCard } from '../components/SubscriptionCard';
import { useHomePage } from './useHomePage';

export function HomePage() {
  const page = useHomePage();
  return (
    <div className="relative">
      <PageContainer>
        <div className="grid grid-cols-4 gap-4 relative z-10 mt-10">
          {page.dataSubscription.map((item, i) => (
            <SubscriptionCard data={item} key={i} />
          ))}
        </div>
      </PageContainer>
      <div className="w-full top-0 bg-primary-main h-[60%] absolute"></div>
    </div>
  );
}
