// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Select, SelectProps, MenuItem } from '@mui/material';
import React from 'react';

// ----------------------------------------------------------------------

type IProps = {
  name: string;
  defaultValue?: number;
  options: { id: number; name: string }[];
};

type Props = IProps & SelectProps;

export default function RHFSelectItem({ name, defaultValue, options, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Select
          {...field}
          fullWidth
          error={!!error}
          {...other}
          sx={{ zIndex: 0, padding: '2px 14px' }}
          defaultValue={options.find((item) => item.id === defaultValue)}
        >
          {options.map((item) => (
            <MenuItem value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      )}
    />
  );
}
