import { IAvatar } from '@/app/(web)/profile/common/interface';

export interface ICurrent {
  id: number;
  phoneNumber: string;
  email: string;
  name: string;
  birthDate: string;
  createdAt: string;
  gender: string;
  userId: number;
  tierPoint: number;
  address: string;
  avatar: IAvatar;
}
