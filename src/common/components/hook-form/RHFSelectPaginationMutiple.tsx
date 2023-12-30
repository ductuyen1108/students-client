// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import {
  TextField,
  TextFieldProps,
  Autocomplete,
  Box,
  Typography,
  Stack,
  Chip,
} from '@mui/material';
import { useState } from 'react';
import ListBox from '../ListBoxComponent';

// ----------------------------------------------------------------------

type IProps = {
  name: string;
  options: Array<any>;
  labelProp: string;
  listBoxScroll?: any;
  loadingScroll?: boolean;
  size?: 'small' | 'medium';
  isLoading?: boolean;
};

type Props = IProps & TextFieldProps;

export default function RHFSelectPaginationMultiple({
  name,
  options,
  labelProp,
  listBoxScroll,
  loadingScroll,
  isLoading,
  size,
  ...other
}: Props) {
  const [listValue, setListValue] = useState<Array<any>>([]);
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ fieldState: { error }, field: { ref, ...field } }) => {
        if (field.value !== undefined) setListValue(field.value);
        console.log(field)
        return (
          <Autocomplete
            {...field}
            multiple
            disableCloseOnSelect
            options={options}
            size={size}
            getOptionLabel={(option) => (option && option[labelProp]) || ''}
            value={listValue}
            onChange={(event, values) => {
              field.onChange(values);
              setListValue(values);
            }}
            fullWidth
            ListboxComponent={ListBox}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            loading={isLoading ? isLoading : loadingScroll}
            renderInput={(params) => {
              return (
                <Stack direction={'column'} spacing={2} height={'100%'}>
                  <TextField
                    {...params}
                    error={!!error}
                    helperText={error?.message}
                    size={size}
                    {...other}
                  />
                </Stack>
              );
            }}
            renderOption={(props, option) => {
              return (
                <li {...props}>
                  <Stack
                    width={'100%'}
                    direction="row"
                    spacing={2}
                    alignItems={'center'}
                    sx={{
                      '&:hover': {
                        borderRadius: '8px',
                        background: '#FFF9DE',
                      },
                    }}
                  >
                    <Box display={'flex'} ml={3} flexDirection={'column'}>
                      <Typography color={'text.secondary'}>
                        {option[labelProp]}
                      </Typography>
                    </Box>
                  </Stack>
                </li>
              );
            }}
            ListboxProps={{
              onScroll: listBoxScroll,
            }}
          />
        );
      }}
    />
  );
}
