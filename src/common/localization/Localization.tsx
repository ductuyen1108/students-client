'use client';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ReactNode } from 'react';
import { vi } from 'date-fns/esm/locale';

const Localization = ({ children }: { children: ReactNode }) => {
  return (
    <LocalizationProvider adapterLocale={vi} dateAdapter={AdapterDateFns}>
      {children}
    </LocalizationProvider>
  );
};

export default Localization;
