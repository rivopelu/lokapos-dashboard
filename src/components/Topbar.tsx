import { Avatar, Button, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { MdLogout, MdPerson, MdSettings } from 'react-icons/md';
import { t } from 'i18next';
import { STYLE_VARIABLE } from '../constants/style-variable';
import { PageContainer } from './PageContainer';
import { BrandLogo } from './BrandLogo';
import { IAccountSlice } from '../redux/reducers/account.reducers.ts';
import { useAppSelector } from '../redux/store.ts';
import AuthServices from '../services/auth.service.ts';

export function TopBar() {
  const [activeMenu, setActiveMenu] = useState<HTMLElement | null>(null);
  const Account: IAccountSlice = useAppSelector((state) => state.Account);
  const profile = Account.getMe?.data;

  const authService = new AuthServices();

  function handleClose() {
    setActiveMenu(null);
  }

  function menuList() {
    return (
      <Menu
        id="basic-menu"
        anchorEl={activeMenu}
        open={Boolean(activeMenu)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to={ROUTES.MASTER_DATA()} className="flex items-center">
            <ListItemIcon>
              <MdPerson />
            </ListItemIcon>
            <ListItemText className="capitalize">{t('profile')}</ListItemText>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={ROUTES.MASTER_DATA()} className="flex items-center">
            <ListItemIcon>
              <MdSettings />
            </ListItemIcon>
            <ListItemText className="capitalize">{t('setting')}</ListItemText>
          </Link>
        </MenuItem>
        <MenuItem onClick={() => authService.Logout()}>
          <ListItemIcon>
            <MdLogout />
          </ListItemIcon>
          <ListItemText className="capitalize">{t('logout')}</ListItemText>
        </MenuItem>
      </Menu>
    );
  }
  return (
    <nav
      className={'  border-b bg-white w-screen fixed flex'}
      style={{ height: STYLE_VARIABLE.SIZE.TOP_BAR_HEIGHT, zIndex: 49 }}
    >
      <PageContainer className={'h-full w-full'}>
        <div className={'grid grid-cols-3 h-full '}>
          <div className={'h-full flex items-center -translate-x-5'}>
            <BrandLogo />
          </div>
          <div className={'flex items-center justify-center'}></div>
          <div className={'flex items-center justify-end gap-8'}>
            <Button>
              <div className="flex gap-4 items-center " onClick={(e) => setActiveMenu(e.currentTarget)}>
                <div>{profile?.first_name}</div>
                <Avatar />
              </div>
            </Button>
            {menuList()}
          </div>
        </div>
      </PageContainer>
    </nav>
  );
}
