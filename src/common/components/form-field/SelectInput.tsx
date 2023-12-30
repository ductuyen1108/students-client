'use client';

import './styles.css';
import { useState } from 'react';
import { MenuItem, Grid, InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DescPage } from '@/common/config/text';

const SelectInput = () => {
  const [type, setType] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };
  return (
    <Grid item container alignItems="center" rowSpacing={1}>
      <Grid item md={4} sm={4} xs={12}>
        <DescPage text="Chọn dịch vụ xe" color="#333333" />
      </Grid>
      <Grid item md={8} sm={8} xs={12}>
        <Select
          value={type}
          placeholder="Chọn loại dịch vụ xe"
          onChange={handleChange}
          sx={{ width: '100%', borderRadius: '24px', backgroundColor: '#ecf0f1', border: 'none' }}
        >
          <MenuItem value={10}>Thuê xe du lịch 4 chỗ</MenuItem>
          <MenuItem value={20}>Thuê xe du lịch 7 chỗ</MenuItem>
          <MenuItem value={30}>Thuê xe du lịch 16 chỗ</MenuItem>
          <MenuItem value={40}>Thuê xe du lịch 24 chỗ</MenuItem>
          <MenuItem value={50}>Thuê xe du lịch 29 chỗ</MenuItem>
          <MenuItem value={60}>Thuê xe du lịch 35 chỗ</MenuItem>
          <MenuItem value={70}>Thuê xe du lịch 45 chỗ</MenuItem>
          <MenuItem value={80}>Thuê xe Limousine</MenuItem>
          <MenuItem value={90}>Thuê xe hoe, xe đám cưới</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
};

export default SelectInput;
