import axios, { AxiosStatic } from 'axios';
// import { Thumbnail } from "../interfaces/common.interfaces";
import { API_PRESIGN_URL } from '../constants/api.constants';
import axiosClient from '../utils/axios';
import Snackbar from './Snackbar';

export async function presignUrl(file: any, axiosInstant?: AxiosStatic) {
  if (file) {
    const imgType = file?.name?.split('.').pop() || 'png' || 'xlsx';
    const imgName = file?.name;
    try {
      const presignHeaderInfo: any = await axiosClient.post(API_PRESIGN_URL, {
        type: imgType,
        /* fileName: imgName, */
      });
      console.log(presignHeaderInfo);
      const urlPostImng = presignHeaderInfo?.presignedUrl;
      const headerFileds = presignHeaderInfo?.presigned?.fields || {};
      const id = presignHeaderInfo?.file?.id;
      await axios.put(urlPostImng, file, {
        headers: {
          'Content-Type': 'png',
        },
      });
      const fileUrl = presignHeaderInfo?.file?.url;
      return { ...presignHeaderInfo?.file, url: fileUrl, id };
    } catch (error) {
      console.log(error);
      Snackbar.error('File không đúng định dạng png');
      return Promise.reject({});
    }
  }
  return Promise.resolve({});
}
