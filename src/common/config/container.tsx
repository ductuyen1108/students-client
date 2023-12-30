import { ReactNode } from 'react';
import { Box, BoxProps, SxProps } from '@mui/material';

type Prop = {
  children: ReactNode;
};

type Props = Prop & BoxProps;

const Container = ({ children, ...other }: Props) => {
  return (
    <Box {...other} maxWidth={'1300px'} width={'100%'} px={'20px'} boxSizing={'border-box'} mx={'auto'}>
      {children}
    </Box>
  );
};

export default Container;
