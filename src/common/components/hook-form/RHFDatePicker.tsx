import Localization from '@/common/localization/Localization';
import { Box, TextField, TextFieldProps, Stack } from '@mui/material';
import { DesktopDatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import { Controller, useFormContext } from 'react-hook-form';

interface IProps {
  name: string;
  label?: string;
  inputFormat?: string;
  onSetValueCustomize?: Function;
  defaultValue?: Date;
  views?: Array<'year' | 'month' | 'day'>;
  isDesktop?: boolean;
}

type Props = IProps & TextFieldProps;

export default function RHFDatePicker({
  name,
  label,
  inputFormat = 'dd/MM/yyyy',
  onSetValueCustomize,
  defaultValue,
  views,
  isDesktop,
  ...other
}: Props) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? defaultValue : null}
      render={({ fieldState: { error }, field }) => (
        <Stack position="relative" width="100%">
          <Localization>
            <DesktopDatePicker
              {...field}
              label={label}
              inputFormat={inputFormat}
              views={views}
              onChange={(value: Date | null) => {
                field.onChange(value);
                onSetValueCustomize?.(value, name);
              }}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  helperText={error && error.message}
                  error={!!error}
                  {...other}
                  sx={{ '& .MuiInputBase-input': { padding: '10px 14px !important' } }}
                />
              )}
            />
          </Localization>
        </Stack>
      )}
    />
  );
}
