import { PageContainer } from '../components/PageContainer';
import { SubscriptionCard } from '../components/SubscriptionCard';
import { useHomePage } from './useHomePage';

export function HomePage() {
  const page = useHomePage();
  return (
    <PageContainer>
      <div className="mt-8">
        <div className="grid grid-cols-4 gap-4">
          {page.dataSubscription.map((item, i) => (
            <SubscriptionCard data={item} key={i} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
