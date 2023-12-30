import Iconify from '@/common/components/iconify/Iconify';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Stack, Typography } from '@mui/material';
import { useGetProfile } from '../common/hooks/useGetProfile';
import { convertDate, convertGender } from '@/common/utils/convertData';
import { useCallback, useState } from 'react';
import { FormProvider, RHFTextField } from '@/common/components/hook-form';
import { useForm } from 'react-hook-form';
import { useGetDistrictByProvinceId, useGetProvinces, useGetWardByDistrictId } from '../common/hooks/useGetAddress';
import RHFSelectPagination from '@/common/components/hook-form/RHFSelectPagination';
import RHFDatePicker from '@/common/components/hook-form/RHFDatePicker';
import { IDataFormEditProfile, ISubmitEditProfile } from '../common/interface';
import useDeepEffect from '@/common/hooks/useDeepEffect';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import { useEditProfile } from '../common/hooks/useEditProfile';
import ModalChangePassword from './ModalChangePassword';

const SideBar = () => {
  const { profileData, isLoadingData } = useGetProfile();
  const [open, setOpen] = useState(false);
  const { useDeepCompareEffect } = useDeepEffect();
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const { mutate: mutateEdit } = useEditProfile({
    onSuccess: () => {
      showSuccessSnackbar('Chỉnh sửa thông tin cá nhân thành công');
    },
    onError: () => {
      showErrorSnackbar('Chỉnh sửa thông tin cá nhân thất bại');
    },
  });
  const methods = useForm<ISubmitEditProfile>({
    defaultValues: {
      address: profileData?.address,
      birthDate: profileData?.birthDate,
      class: profileData?.class,
      districtId: undefined,
      provinceId: undefined,
      wardId: undefined,
      holyName: profileData?.holyName,
      name: profileData?.name,
      gender: profileData?.gender,
      lastName: profileData?.lastName,
    },
  });
  const { handleSubmit, reset, watch } = methods;

  const { dataProvinces } = useGetProvinces();
  const { dataDistrict } = useGetDistrictByProvinceId(watch<any>('provinceId')?.code);
  const { dataWard } = useGetWardByDistrictId(watch<any>('districtId')?.code);

  const onSubmit = (data: ISubmitEditProfile) => {
    const dataEdit: IDataFormEditProfile = {
      address: data.address,
      avatarId: profileData?.avatar?.id || 0,
      birthDate: data.birthDate,
      districtId: data.districtId?.code,
      provinceId: data.provinceId?.code,
      email: data.email,
      name: data.name,
      wardId: data.wardId?.code,
      classId: data.class.id,
      family: [
        {
          name: data.fatherName,
          birthDate: data.fatherBirthDate,
          email: data.fatherEmail,
          holyName: data.fatherHolyName,
          lastName: data.fatherLastName,
          phoneNumber: data.fatherPhoneNumber,
          role: data.roleFather,
        },
        {
          name: data.motherName,
          birthDate: data.motherBirthDate,
          email: data.motherEmail,
          holyName: data.motherHolyName,
          lastName: data.motherLastName,
          phoneNumber: data.motherPhoneNumber,
          role: data.roleMother,
        },
      ],
      gender: data.gender,
      holyName: data.holyName,
      lastName: data.lastName,
    };
    mutateEdit(dataEdit);
  };

  useDeepCompareEffect(() => {
    if (profileData) {
      const dataVN = {
        address: profileData?.address,
        birthDate: profileData?.birthDate,
        email: profileData?.email,
        name: profileData?.name,
      };
      reset(dataVN);
    }
  }, [profileData]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper
      elevation={3}
      sx={{
        width: { sm: '30%', xs: '100%' },
        borderRadius: '10px',
        position: 'sticky',
        top: 5,
        height: 'fit-content',
      }}
    >
      <Stack spacing={2} padding={3}>
        <Typography sx={{ fontSize: { sm: '24px', xs: '18px' }, fontWeight: 600, color: '#212B36' }}>
          Giới thiệu
        </Typography>
        <InforItem icon="ic:baseline-location-on" content={profileData?.address || 'chưa cập nhật'} title="Sống tại" />
        <InforItem
          icon="fe:birthday-cake"
          content={convertDate({ data: profileData?.birthDate || '' })}
          title="Ngày sinh"
        />
        <InforItem icon="ic:outline-email" content={profileData?.email || 'chưa cập nhật'} title="Email" />
        <Button variant="contained" sx={{ borderRadius: '10px' }} onClick={handleClickOpen}>
          Chỉnh sửa thông tin cá nhân
        </Button>
        <ModalChangePassword />
        <Dialog open={open} onClose={handleClose}>
          <Stack spacing={2} p={3}>
            <DialogTitle textAlign={'center'}>{'Chỉnh sửa thông tin cá nhân'}</DialogTitle>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack direction={'row'} spacing={3}>
                <Stack spacing={2}>
                  <RHFTextField name="name" label="Họ và tên" />
                  <RHFTextField name="email" label="Email" />
                  <RHFDatePicker name="birthDate" label={'Ngày sinh'} size="small" />
                  <RHFTextField name="address" label="Địa chỉ cụ thể" />
                  <RHFSelectPagination
                    name="provinceId"
                    options={dataProvinces || []}
                    labelProp="name"
                    label={'Tỉnh / Thành phố'}
                    disableClear
                    size="small"
                  />
                  <RHFSelectPagination
                    name="districtId"
                    options={dataDistrict || []}
                    labelProp="name"
                    label={'Quận / Huyện'}
                    disableClear
                    size="small"
                  />
                  <RHFSelectPagination
                    name="wardId"
                    options={dataWard || []}
                    labelProp="name"
                    label={'Phường/ Xã'}
                    disableClear
                    size="small"
                  />
                </Stack>
                <Stack spacing={2}>
                  <RHFTextField name="fatherName" label="Tên bố" />
                  <RHFTextField name="fatherLastName" label="Họ và tên đệm bố" />
                  <RHFDatePicker name="fatherBirthDate" label={'Ngày sinh bố'} size="small" />
                  <RHFTextField name="fatherHolyName" label="Tên thánh bố" />
                  <RHFTextField name="fatherPhoneNumber" label="Số điện thoại bố" />
                  <RHFTextField name="fatherEmail" label="Email bố" />
                </Stack>
                <Stack spacing={2}>
                  <RHFTextField name="motherName" label="Tên mẹ" />
                  <RHFTextField name="motherLastName" label="Họ và tên đệm mẹ" />
                  <RHFDatePicker name="motherBirthDate" label={'Ngày sinh mẹ'} size="small" />
                  <RHFTextField name="motherHolyName" label="Tên thánh mẹ" />
                  <RHFTextField name="motherPhoneNumber" label="Số điện thoại mẹ" />
                  <RHFTextField name="motherEmail" label="Email mẹ" />
                </Stack>
              </Stack>
              <DialogActions>
                <Button variant="outlined" onClick={handleClose}>
                  Hủy
                </Button>
                <Button type="submit" variant="contained" onClick={handleClose} autoFocus>
                  Xác nhận
                </Button>
              </DialogActions>
            </FormProvider>
          </Stack>
        </Dialog>
      </Stack>
    </Paper>
  );
};

const InforItem = ({ icon, content, title }: { icon: string; content: string; title: string }) => {
  return (
    <Stack alignItems={'center'} spacing={2} direction={'row'}>
      <Iconify icon={icon} sx={{ width: '24px', height: '24px' }} />
      <Typography>
        {title} <strong>{content}</strong>
      </Typography>
    </Stack>
  );
};

export default SideBar;
