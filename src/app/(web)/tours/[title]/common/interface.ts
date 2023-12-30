import { IAvatar } from '@/app/(web)/profile/common/interface';
import { ICity, IImage } from '../../common/interface';

export interface ITourDetail {
  id: number;
  title: string;
  city: ICity;
  image: IImage;
  tourDetail: ITourDetail;
  userReviews: IUserReviews[];
}

export interface ITourDetail {
  id: number;
  startDate: string;
  endDate: string;
  ageLimit: number;
  peopleLimit: number;
  content: string;
  price: number;
  departureLocation: string;
  returnLocation: string;
  departureTime: string;
  returnTime: string;
  map: string;
}

export interface IUserReviews {
  id: number;
  tourReviewName: string;
  reviewContent: string;
  UserReviewDetail: {
    id: number;
    accommodation: number;
    destination: number;
    meals: number;
    transport: number;
    valueForMoney: number;
    overall: number;
  };
  user: {
    id: number;
    type: string;
    customer: {
      id: number;
      phoneNumber: string;
      email: null;
      name: string;
      birthDate: string;
      createdAt: string;
      gender: string;
      userId: number;
      address: string;
      avatar: IAvatar;
    };
  };
}

// Inter face book tour form
export interface IBookTourForm {
  tourId: number;
  numberOfPeople: number;
}

export interface ISubmitFormBookTour {
  name: string;
  email: string;
  phoneNumber: string;
  numberOfPeople: number;
}

export interface IParamsBookTour {
  page?: number;
  limit?: number;
}

export interface IBookTour {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  status: string;
  tour: {
    id: number;
    title: string;
    image: {
      id: 3;
      key: string;
      type: string;
      uploaderId: 10;
      url: string;
    };
    city: ICity;
    tourDetail: {
      id: number;
      startDate: string;
      endDate: string;
      ageLimit: number;
      peopleLimit: number;
      content: string;
      price: number;
      departureLocation: string;
      departureTime: string;
      returnTime: string;
      map: string;
      returnLocation: string;
    };
  };
}

export interface IResBookTour {
  items: IBookTour[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}
