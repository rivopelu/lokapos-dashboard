import { PageContainer } from '../../components/PageContainer.tsx';
import { MainCard } from '../../components/MainLogo.tsx';
import { useSettingPage } from './useSettingPage.ts';
import { IconButton, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { BusinessSettingsTabPage } from './BusinessSettingsTabPage.tsx';

export function SettingPage() {
  const page = useSettingPage();

  function checkComponent() {
    switch (page.activeIndex) {
      case 1:
        return <BusinessSettingsTabPage />;
      default:
        return <div>DEFAULT</div>;
    }
  }

  return (
    <div className={'mt-8'}>
      <PageContainer size={'md'}>
        <div className={'flex gap-5'}>
          <MainCard>
            {page.dataSidebar.map((item, i) => {
              const Icon = item.icon;
              return (
                <MenuItem key={i} onClick={() => page.setActiveIndex(i)}>
                  <ListItemIcon>
                    <IconButton color={page.activeIndex === i ? 'primary' : undefined}>
                      <Icon />
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText
                    className={`uppercase font-semibold px-8 ${page.activeIndex === i ? 'text-primary-main' : ' '}`}
                  >
                    {item.title}
                  </ListItemText>
                </MenuItem>
              );
            })}
          </MainCard>
          <MainCard className={'flex-1'}>{checkComponent()}</MainCard>
        </div>
      </PageContainer>
    </div>
  );
}
