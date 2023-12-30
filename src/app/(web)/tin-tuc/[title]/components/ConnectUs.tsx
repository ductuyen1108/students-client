import { Box, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import { icons } from '../constants';

const ConnectUs = () => {
  return (
    <Box sx={{ background: '#fff', border: '1px solid #dce0e0', borderRadius: '5px', padding: '24px' }}>
      <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>Kết nối với chúng tôi</Typography>
      <Box
        sx={{
          pt: '15px',
          borderTop: '1px solid #dce0e0',
          mt: '5px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {icons.map((icon) => (
          <Link key={icon.id} href={icon.path} target="blank">
            <IconButton
              sx={{
                background: icon.bgColor,
                ':hover': {
                  background: icon.bgColor,
                  transform: 'translateY(-3px)',
                  transitionDuration: '0.2s',
                  boxShadow: '0 0px 15px rgba(0,0,0,.25)',
                },
                color: '#fff',
              }}
            >
              {<icon.icon />}
            </IconButton>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default ConnectUs;
