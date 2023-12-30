import { useSnackbar, SnackbarProviderProps } from 'notistack';

export enum MessageType {
  ERROR = 'error',
  SUCCESS = 'success',
}

export interface IShowMessage {
  type: MessageType;
  message: string;
}

export default function useShowSnackbar() {
  const { enqueueSnackbar } = useSnackbar();
  const bottomNotiStack: SnackbarProviderProps = {
    anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
  };
  function showSuccessSnackbar(message: string, config?: IShowMessage, isBottom?: boolean) {
    enqueueSnackbar(message, {
      variant: MessageType.SUCCESS,
      ...(isBottom && bottomNotiStack),
      ...config,
    });
  }
  function showErrorSnackbar(message: string, config?: IShowMessage, isBottom?: boolean) {
    enqueueSnackbar(message, {
      variant: MessageType.ERROR,
      ...(isBottom && bottomNotiStack),
      ...config,
    });
  }
  return { showSuccessSnackbar, showErrorSnackbar };
}
