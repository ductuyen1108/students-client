'use client';

import { Box, Button, Stack, Typography } from '@mui/material';
import parse from 'html-react-parser';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { PRIMARY_MAIN } from '@/common/constants/colors';
import ModalShareMeida from '@/common/components/modal/ModalShareMedia';
import { useState } from 'react';

const NewsDetails = ({ content }: { content: string }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Box>
      <Stack className="news-content">{parse(content)}</Stack>
      <Box mt="20px">
        <Typography sx={{ fontSize: '20px', fontWeight: 500, color: PRIMARY_MAIN }}>
          Chia sẻ nếu bạn thấy bài viết này hay nhé!
        </Typography>
        <Button
          variant="outlined"
          startIcon={<MailOutlineIcon />}
          sx={{ px: '30px', mt: '15px' }}
          onClick={() => setOpenModal(true)}
        >
          Chia sẻ
        </Button>
      </Box>
      <ModalShareMeida isOpen={openModal} onConfirm={() => setOpenModal(false)} />
    </Box>
  );
};

export default NewsDetails;
