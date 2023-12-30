// @mui
import { Box, Stack, Typography } from '@mui/material';
// assets
import UploadIllustration from '../../assets/illustration_upload';

// ----------------------------------------------------------------------

type Props = {
  hasFile: boolean;
  placeholder?: string;
};

export default function BlockContent({ hasFile, placeholder }: Props) {
  return (
    <Stack
      spacing={1}
      alignItems="center"
      justifyContent="center"
      direction={{ xs: 'column', md: 'column' }}
      sx={{ width: 1, textAlign: { xs: 'center' } }}
    >
      {hasFile ? (
        <Box sx={{ minHeight: '160px' }} />
      ) : (
        <>
          <UploadIllustration sx={{ width: 220 }} />
          <Box sx={{ p: 3 }}>
            <Typography gutterBottom variant="h6" textAlign={'center'}>
              {placeholder || 'Kéo thả hoặc chọn hình ảnh cho bài viết của bạn ở đây'}
            </Typography>
          </Box>
        </>
      )}
    </Stack>
  );
}
