'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Stack, Typography } from '@mui/material';
import { useGetProfile } from '../common/hooks/useGetProfile';
import { DescPage } from '@/common/config/text';
import { GRAY_700 } from '@/common/constants/colors';
import { convertDate } from '@/common/utils/convertData';

export default function TabContent() {
  const [value, setValue] = React.useState('1');
  const { profileData } = useGetProfile();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const fatherInfor = profileData?.family?.filter((item) => item.role === 'DAD') ?? [];
  const motherInfor = profileData?.family?.filter((item) => item.role === 'MOM') ?? [];

  console.log('fatherInfor', fatherInfor);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Thông tin bố" value="1" sx={{ textTransform: 'none' }} />
            <Tab label="Thông tin mẹ" value="2" sx={{ textTransform: 'none' }} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Stack spacing={2}>
            <InforItem title="Họ và tên" content={fatherInfor[0]?.name} />
            <InforItem title="Ngày sinh" content={convertDate({ data: fatherInfor[0]?.birthDate })} />
            <InforItem title="Tên thánh" content={fatherInfor[0]?.holyName} />
            <InforItem title="Số điện thoại" content={fatherInfor[0]?.phoneNumber} />
            <InforItem title="Email" content={fatherInfor[0]?.email ? fatherInfor[0]?.email : 'Chưa cập nhật'} />
          </Stack>
        </TabPanel>
        <TabPanel value="2">
          <Stack spacing={3}>
            <Stack spacing={2}>
              <InforItem title="Họ và tên" content={motherInfor[0]?.name} />
              <InforItem title="Ngày sinh" content={convertDate({ data: motherInfor[0]?.birthDate })} />
              <InforItem title="Tên thánh" content={motherInfor[0]?.holyName} />
              <InforItem title="Số điện thoại" content={motherInfor[0]?.phoneNumber} />
              <InforItem title="Email" content={motherInfor[0]?.email ? motherInfor[0]?.email : 'Chưa cập nhật'} />
            </Stack>
          </Stack>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

const InforItem = ({ title, content }: { title: string; content?: string }) => {
  return (
    <Stack direction={'row'} spacing={3} alignItems={'center'}>
      <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#333' }}>{title}:</Typography>
      <DescPage text={content || ''} color={GRAY_700} />
    </Stack>
  );
};
