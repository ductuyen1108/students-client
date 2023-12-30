'use client';

import '../styles/stylesNav.css';
import { useEffect, useState, memo } from 'react';
import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { navigation } from '../contant';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useGetCurrent } from '../hooks/useGetCurrent';
import Iconify from '@/common/components/iconify/Iconify';
import useDeepEffect from '@/common/hooks/useDeepEffect';
import ModalLogin from './ModalLogin';
import { useDispatch } from '@/common/redux/store';
import { setAccessToken, setLogin, setRefreshToken } from '@/app/(web)/login/common/auth.slice';

const NavMenu = () => {
  const currentScrollPos = typeof window !== 'undefined' ? window.pageYOffset : 0;
  const pathName = usePathname();
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { useDeepCompareEffect } = useDeepEffect();

  useDeepCompareEffect(() => {
    const activeNav = navigation.find((navItem) => navItem.path === pathName);
    if (activeNav) {
      setActiveNavItem(activeNav.text);
    } else {
      setActiveNavItem(null);
    }
  }, [pathName, navigation]);

  const dispatch = useDispatch();
  const { push } = useRouter();

  const handleLogout = () => {
    dispatch(setLogin(false));
    dispatch(setAccessToken(''));
    dispatch(setRefreshToken(''));
    push('/login');
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
      {navigation.map((navItem) => (
        <Link
          key={navItem.path}
          href={navItem.path}
          className={
            currentScrollPos > 0
              ? pathName === navItem.path || activeNavItem === navItem.text
                ? 'nav-active'
                : 'nav-before'
              : pathName === navItem.path || activeNavItem === navItem.text
              ? 'nav-active'
              : 'nav'
          }
          onClick={() => setActiveNavItem(navItem.text)}
        >
          {navItem.text}
        </Link>
      ))}
      <Button variant="outlined" sx={{ borderRadius: '24px' }} onClick={handleLogout}>
        Đăng xuất
      </Button>
    </Box>
  );
};

export default memo(NavMenu);
