'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: "'Lexend', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Lexend', sans-serif",
          textTransform: 'unset',
          minWidth: '0px',
          minHeight: '0px',
        },
      },
    },
  },
});

export default function ThemeMui({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
