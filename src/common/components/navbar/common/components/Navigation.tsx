'use client';

import Container from '@/common/config/container';
import { GRADIENT_COLOR } from '@/common/constants/colors';
import { Box, Typography } from '@mui/material';
import NavMenu from './NavMenu';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import Headroom from 'react-headroom';
import { useState } from 'react';
import Image from 'next/image';

const Navigation = () => {
  const [scroll, setScroll] = useState(0);
  const changeHeader = () => {
    setScroll(window.scrollY);
  };
  window.addEventListener('scroll', changeHeader);
  console.log('scroll', scroll);
  return (
    <Headroom style={{ zIndex: 100 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: scroll > 70 ? '1px solid #dce0e0' : 'unset',
          boxShadow: scroll > 70 ? '0 1px 10px rgba(0,0,0,.1)' : 'unset',
          transition: 'background-color 0.3s ease',
          height: '70px',
          py: '10px',
          background: scroll > 70 ? '#fff' : 'transparent',
          position: 'fixed',
          width: '100%',
          top: 0,
          left: 0,
        }}
      >
        <Container>
          <Box
            sx={{
              display: { ld: 'flex', md: 'flex', sm: 'none', xs: 'none' },
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Image src={'/images/logo.ver1.png'} alt="logo" width={120} height={40} />
            </Link>
            <NavMenu />
          </Box>
          <MobileMenu />
        </Container>
      </Box>
    </Headroom>
  );
};

export default Navigation;
