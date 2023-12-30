import Container from '@/common/config/container';
import { TitlePage } from '@/common/config/text';
import { Box, IconButton, Stack, Tooltip, styled } from '@mui/material';
import { IProfile } from '../common/interface';
import useDeepEffect from '@/common/hooks/useDeepEffect';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import { useEditAvatarProfile } from '../common/hooks/useEditAvatarProfile';
import { useForm } from 'react-hook-form';
import Iconify from '@/common/components/iconify/Iconify';
import { ChangeEvent, useCallback, useState } from 'react';
import { usePresignImg } from '@/common/hooks/usePresignImg';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface Props {
  profileInfo?: IProfile;
}

const UserInforHeader = ({ profileInfo }: Props) => {
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const { handleUpload, isUploading } = usePresignImg();
  const { mutate: mutateEdit } = useEditAvatarProfile({
    onSuccess: () => {
      showSuccessSnackbar('Thay ảnh đại diện thành công');
    },
    onError: () => {
      showErrorSnackbar('Thay ảnh đại diện thất bại');
    },
  });
  const handleEditAvatar = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      try {
        const uploadedFile = await handleUpload(file);

        console.log('Uploaded file:', uploadedFile);
        mutateEdit({ imageId: uploadedFile.id });
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };
  return (
    <Stack sx={{ position: 'relative' }}>
      <Box
        component={'img'}
        src="/images/walpaper.jpg"
        alt="wall-paper"
        sx={{ objectFit: 'cover' }}
        width={'100%'}
        height={'auto'}
      />
      <Container sx={{ position: 'absolute', bottom: -115, left: { sm: 110, xs: 0 } }}>
        <Stack direction={'row'} spacing={3} alignItems={'center'}>
          <Box position={'relative'}>
            <Box
              component={'img'}
              src={profileInfo?.avatar?.url || '/images/avatar-user.png'}
              alt="wall-paper"
              sx={{
                objectFit: 'cover',
                border: '2px solid #fff',
                borderRadius: '50%',
                boxShadow: '0px 3.1px 12.4px 0px rgba(0, 0, 0, 0.25)',
                flexShrink: 0,
              }}
              width={'168px'}
              height={'168px'}
            />
            <Tooltip title="Chỉnh sửa avatar">
              <IconButton
                component={'label'}
                sx={{
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #83EAF1 10%, #63A4FF 100%)',
                  position: 'absolute',
                  bottom: 10,
                  right: 9,
                }}
              >
                <Iconify icon={'solar:pen-bold'} />
                <VisuallyHiddenInput type="file" accept="image/png" onChange={handleEditAvatar} />
              </IconButton>
            </Tooltip>
          </Box>
          <TitlePage text={profileInfo?.name || 'User update'} color="#212B36" />
        </Stack>
      </Container>
    </Stack>
  );
};

export default UserInforHeader;
