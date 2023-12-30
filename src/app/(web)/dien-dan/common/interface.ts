import { CustomFile } from '@/common/components/upload';

export interface IPost {
  id: number;
  content: string;
  description: string;
  title: string;
  createdAt: string;
  image: IImage;
  user: {
    id: number;
    type: string;
    customer: {
      id: number;
      phoneNumber: string;
      email: string;
      name: string;
      birthDate: string;
      createdAt: string;
      gender: string;
      userId: number;
      address: string;
      avatar: {
        id: number;
        key: string;
        type: string;
        uploaderId: number;
        url: string;
      };
    };
  };
}

export interface IImage {
  id: number;
  key: string;
  type: string;
  size: number;
  url: string;
  uploaderId: number;
}

export interface IResPost {
  items: IPost[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IParamsPost {
  title?: string;
  content?: string;
  userId?: number;
  page?: number;
  limit?: number;
}

// Create
export interface IDataFormCreatePost {
  content: string;
  title: string;
  description: string;
  imageId: number;
}

export interface ISubmitDataPost {
  content: string;
  title: string;
  description: string;
  image: CustomFile | any;
}

export interface IDataEditPost {
  id: number;
  content: string;
  title: string;
  description: string;
  imageId: number;
}

export interface IParamsDeletePost {
  ids: number[];
}
