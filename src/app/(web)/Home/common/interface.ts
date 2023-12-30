import { ICity } from '../../tours/common/interface';

export interface ITourItem {
  id: number;
  title: string;
  image: IImage;
  city: ICity;
  tourDetail: ITourDetail;
  userReviews: IUserReviewsItem[];
  averageRating: IAverageRating;
}

export interface IAverageRating {
  accommodation: number;
  destination: number;
  meals: number;
  transport: number;
  valueForMoney: number;
  overall: number;
  totalAvg: number;
}

export interface IImage {
  id: number;
  key: string;
  type: string;
  uploaderId: number;
  url: string;
  size: number;
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
  departureTime: string;
  returnTime: string;
  map: string;
  returnLocation: string;
}

export interface IUserReviewsItem {
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
      avatar: string;
    };
  };
}

export interface IResTour {
  items: ITourItem[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IParamsTour {
  startPrice?: number;
  endPrice?: number;
  startDate?: string;
  cityName?: string;
  page?: number;
  limit?: number;
}

export interface InitialNewsState {
  dataFilter: IDataFilterTour;
}

export interface IDataFilterTour {
  startPrice?: number;
  endPrice?: number;
  startDate?: string;
  cityName?: string;
}

export interface ISubmitFilterTour {
  startPrice?: number;
  startDate?: string;
  endPrice?: number;
  cityName?: string;
}
