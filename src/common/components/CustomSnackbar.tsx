import React, { forwardRef } from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import { CustomContentProps, SnackbarContent, closeSnackbar } from 'notistack';
import Image from './Image';
import { ICONS_ALERT } from '../static';
import Iconify from './iconify/Iconify';

export const CustomSnackbar = forwardRef<HTMLDivElement, CustomContentProps>(({ id, ...props }, ref) => {
  return (
    <SnackbarContent
      ref={ref}
      style={{
        width: '100%',
      }}
    >
      <Stack
        direction={'row'}
        spacing={1.5}
        sx={{
          width: '100%',
          borderRadius: '8px',
          p: '12px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 8px 16px 0px #919EAB29',
        }}
        alignItems={'center'}
      >
        <Stack>
          <Box
            component="span"
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              borderRadius: '12px',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: props?.variant === 'error' ? '#FF484229' : '#66ff4229',
            }}
          >
            <Image
              src={
                (props?.variant === 'error' && '/images/icon-alert/icon_error.svg') ||
                (props?.variant === 'info' && '/images/icon-alert/icon_error.svg') ||
                (props?.variant === 'success' && '/images/icon-alert/icon_success.svg') ||
                (props?.variant === 'warning' && '/images/icon-alert/icon_warning.svg') ||
                ''
              }
            />
          </Box>
        </Stack>
        <Stack sx={{ width: '80%' }}>
          <Typography variant="body2">{props?.message}</Typography>
        </Stack>
        <IconButton onClick={() => closeSnackbar(id)}>
          <Iconify icon={'jam:close'} height={16} width={16} />
        </IconButton>
      </Stack>
    </SnackbarContent>
  );
});
