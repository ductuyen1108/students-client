'use client';

import { Box, Button, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ArticleIcon from '@mui/icons-material/Article';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { navigation } from '../contant';
import { GRADIENT_COLOR, GRAY_700, PRIMARY_LIGHT } from '@/common/constants/colors';
import { useRouter } from 'next/navigation';

const icons = [
  { id: 1, icon: <HomeIcon /> },
  { id: 2, icon: <InfoIcon /> },
  { id: 3, icon: <HomeRepairServiceIcon /> },
  { id: 4, icon: <ArticleIcon /> },
  { id: 5, icon: <ContactPageIcon /> },
];

const MobileMenu = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const { push } = useRouter();
  return (
    <>
      <Box
        sx={{
          display: { md: 'none', sm: 'flex', xs: 'flex' },
          justifyContent: 'space-between',
          alignItems: 'center',
          my: '23px',
        }}
      >
        <Typography
          sx={{
            fontSize: '25px',
            fontWeight: 700,
            backgroundImage: GRADIENT_COLOR,
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            gap: '10px',
          }}
        >
          DT-Travel
        </Typography>
        <MenuIcon
          sx={{
            cursor: 'pointer',
            color: 'black',
          }}
          onClick={() => setOpenMobileMenu(true)}
        />
      </Box>
      <Drawer anchor="left" open={openMobileMenu} onClose={() => setOpenMobileMenu(false)}>
        <Box
          sx={{
            position: 'relative',
            width: 250,
            backgroundColor: '#ecf0f1',
            height: '100%',
            py: 3,
            px: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
          }}
          role="presentation"
          onClick={() => setOpenMobileMenu(false)}
          onKeyDown={() => setOpenMobileMenu(false)}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '25px',
                  fontWeight: 700,
                  backgroundImage: GRADIENT_COLOR,
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: '10px',
                }}
              >
                DT-Travel
              </Typography>
            </Box>
          </Box>
          <List sx={{ width: '100%' }}>
            {navigation.map((item) => (
              <ListItemButton key={item.text} onClick={() => push(item.path)} sx={{ mb: '10px' }}>
                <ListItemIcon sx={{ minWidth: '40px', color: GRAY_700 }}>{<item.icon />}</ListItemIcon>
                <ListItemText sx={{ color: GRAY_700 }}>{item.text}</ListItemText>
              </ListItemButton>
            ))}
          </List>
          <Typography
            sx={{
              color: PRIMARY_LIGHT,
              fontWeight: '500',
              cursor: 'pointer',
              position: 'absolute',
              bottom: '14px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            &#169; Duc Tuyen
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileMenu;
