// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

// ----------------------------------------------------------------------

type IProps = {
  name: string;
};

type Props = IProps & TextFieldProps;

export default function RHFTextField({ name, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <TextField
          {...field}
          inputRef={ref}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error?.message}
          sx={{
            zIndex: 0,
            '& .MuiInputBase-input': { padding: '10px 14px' },
            '& .MuiFormLabel-root.MuiInputLabel-root': { top: '-5px', fontSize: '14px' },
            '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': { top: 0 },
          }}
          {...other}
        />
      )}
    />
  );
}
