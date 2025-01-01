import { Avatar } from '@mui/material';
import { CardBody, MainCard } from '../../components/MainLogo';
import { PageContainer } from '../../components/PageContainer';
import { useProfilePage } from './useProfilePage';

export function ProfilePage() {
  const page = useProfilePage();
  const profile = page.profileData;

  return (
    <PageContainer>
      <div className="w-full max-w-2xl mx-auto  mt-14">
        <MainCard>
          <CardBody>
            <div className="grid gap-5">
              <h1>{profile?.full_name}</h1>
              <div>
                <Avatar sx={{ height: 100, width: 100 }} src={profile?.avatar} />
              </div>
            </div>
          </CardBody>
        </MainCard>
      </div>
    </PageContainer>
  );
}
