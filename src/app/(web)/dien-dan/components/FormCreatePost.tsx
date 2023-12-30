'use client';

import { FormProvider, RHFTextField } from '@/common/components/hook-form';
import { RHFUploadSingleFile } from '@/common/components/hook-form/RHFUpload';
import { GRAY_800 } from '@/common/constants/colors';
import { fData } from '@/common/utils/formatNumber';
import { Paper, Stack, Typography } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCreatePost } from '../common/hooks/useCreatePost';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import { IDataFormCreatePost, ISubmitDataPost } from '../common/interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCreatePost } from '../common/schema';
import { usePresignImg } from '@/common/hooks/usePresignImg';
import { LoadingButton } from '@mui/lab';

const FormCreatePost = () => {
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const { mutate: mutateCreate } = useCreatePost({
    onSuccess: () => {
      showSuccessSnackbar('Thêm mới bài viết thành công');
    },
    onError: () => {
      showErrorSnackbar('Thêm mới bài viết thất bại');
    },
  });

  const { handleUpload } = usePresignImg();

  const methods = useForm<ISubmitDataPost>({
    resolver: yupResolver(schemaCreatePost),
  });
  const {
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors, dirtyFields },
  } = methods;
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        setValue(
          'image',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        );
      }
    },
    [setValue],
  );
  const onSubmit = async (data: ISubmitDataPost) => {
    const file = await handleUpload(data?.image as File);
    const dataCreate: IDataFormCreatePost = {
      title: data.title,
      content: data.content,
      description: data.description,
      imageId: file.id,
    };
    mutateCreate(dataCreate);
  };

  useEffect(() => {
    if (watch('image')) {
      clearErrors('image');
    }
  }, [watch('image')]);

  return (
    <Paper
      elevation={1}
      sx={{
        borderRadiusL: '15px',
        padding: 3,
        width: { sm: '35%', xs: '100%' },
        height: 'fit-content',
        position: 'sticky',
        top: 0,
      }}
    >
      <Typography sx={{ fontSize: '18px', color: GRAY_800, fontWeight: 500, mb: '16px' }}>
        Đăng bài viết lên diễn đàn tại đây
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1.5}>
          <RHFTextField name="title" multiline minRows={2} maxRows={2} label="Tiêu đề" />
          <RHFTextField name="description" label="Mô tả ngắn" />
          <RHFTextField name="content" multiline minRows={3} maxRows={6} label="Nội dung" />
          <RHFUploadSingleFile
            name="image"
            maxSize={3145728}
            onDrop={handleDrop}
            accept={{ 'image/*': [] }}
            isContainImg
            helperText={
              <>
                <Typography
                  variant="caption"
                  sx={{
                    mt: 2,
                    mx: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.secondary',
                  }}
                >
                  Cho phép *.png
                  <br />
                  Dung lượng lớn nhất: {fData(3145728)}
                </Typography>
              </>
            }
          />
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={2} mt={2}>
          <LoadingButton type="submit" variant="contained" fullWidth>
            Tạo mới
          </LoadingButton>
          <LoadingButton variant="outlined" fullWidth>
            Hủy bỏ
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Paper>
  );
};

export default FormCreatePost;
