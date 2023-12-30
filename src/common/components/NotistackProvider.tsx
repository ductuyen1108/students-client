'use client';

import { SnackbarProvider, closeSnackbar } from 'notistack';
import React, { ReactNode } from 'react';
import { GlobalStyles, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CustomSnackbar } from './CustomSnackbar';

function SnackbarStyles() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        '#root': {
          '& .SnackbarContent-root': {
            width: 304,
            padding: theme.spacing(1),
            margin: theme.spacing(0.25, 0),
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.grey,
            backgroundColor: theme.palette.grey[900],
            '&.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantWarning, &.SnackbarItem-variantInfo':
              {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
              },
          },
        },
      }}
    />
  );
}

type Props = {
  children: ReactNode;
};

export default function NotistackProvider({ children }: Props) {
  return (
    <>
      <SnackbarStyles />

      <Stack
        dense
        maxSnack={1}
        preventDuplicate
        autoHideDuration={5000}
        variant="success"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        Components={{
          default: CustomSnackbar,
          error: CustomSnackbar,
          success: CustomSnackbar,
          warning: CustomSnackbar,
        }}
        component={SnackbarProvider}
      >
        {children}
      </Stack>
    </>
  );
}
