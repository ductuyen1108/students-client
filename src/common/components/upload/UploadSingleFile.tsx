import { useDropzone } from 'react-dropzone';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// type
import { UploadProps } from './type';
//
import Image from '../Image';
import RejectionFiles from './RejectionFiles';
import BlockContent from './BlockContent';

// ----------------------------------------------------------------------

const DropZoneStyle = styled('div')(({ theme }) => ({
  outline: 'none',
  overflow: 'hidden',
  position: 'relative',
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create('padding'),
  backgroundColor: theme.palette.background.default,
  border: `1px dashed ${theme.palette.grey[500]}`,
  '&:hover': { opacity: 0.72, cursor: 'pointer' },
}));

// ----------------------------------------------------------------------

type Prop = {
  isContainImg?: boolean;
  placeholder?: string;
};

type Props = Prop & UploadProps;

export default function UploadSingleFile({
  error = false,
  file,
  helperText,
  sx,
  isContainImg,
  placeholder,
  ...other
}: Props) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple: false,
    ...other,
  });

  return (
    <Box sx={{ width: '100%', ...sx }}>
      <DropZoneStyle
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: 'error.main',
            borderColor: 'error.light',
            bgcolor: 'error.lighter',
          }),
          ...(file && {
            padding: '12% 0',
          }),
        }}
      >
        <input {...getInputProps()} />

        <BlockContent hasFile={!!file} placeholder={placeholder} />

        {file && (
          <Image
            alt="file preview"
            src={typeof file === 'string' ? file : file.preview}
            sx={{
              top: 8,
              left: 8,
              borderRadius: 1,
              position: 'absolute',
              width: 'calc(100% - 16px)',
              height: 'calc(100% - 16px)',
            }}
            isContainImg={isContainImg}
          />
        )}
      </DropZoneStyle>

      {fileRejections.length > 0 && <RejectionFiles fileRejections={fileRejections} />}

      {helperText && helperText}
    </Box>
  );
}