import React from 'react';
import { Box, Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { icons } from './constant';
import { TitlePage } from '@/common/config/text';

type Props = {
  onConfirm: VoidFunction;
  isOpen: boolean;
};

export default function ModalShareMeida({ onConfirm, isOpen }: Props) {
  return (
    <Dialog open={isOpen} onClose={onConfirm}>
      <Box
        sx={{
          background: '#fff',
          borderRadius: '24px',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
          <IconButton
            sx={{
              background: '#FF4A52',
              color: '#fff',
              ':hover': {
                background: '#FF4A52',
                transform: 'translateY(-3px)',
                transitionDuration: '0.6s',
                boxShadow: '0 0px 15px rgba(0,0,0,.25)',
              },
            }}
            onClick={() => {
              onConfirm();
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <TitlePage text="Chia sẻ ngay trên mạng xã hội của bạn nhé!" color="#000" />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {icons.map((icon) => (
            <IconButton
              key={icon.id}
              sx={{
                background: icon.bgColor,
                ':hover': {
                  background: icon.bgColor,
                  transform: 'translateY(-3px)',
                  transitionDuration: '0.6s ease',
                  boxShadow: '0 0px 15px rgba(0,0,0,.25)',
                },
                color: '#fff',
              }}
            >
              {<icon.icon />}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Dialog>
  );
}
