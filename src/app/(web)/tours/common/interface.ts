export interface ICity {
  id: number;
  cityName: string;
  createdAt: string;
  updatedAt: string;
  image: IImage;
}

export interface IImage {
  id: number;
  key: string;
  type: string;
  uploaderId: number;
  url: string;
  size: number;
}

export interface IResCity {
  items: ICity[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IParamsCity {
  cityName?: string;
  page?: number;
  limit?: number;
}

// user reviews
export interface IDataReview {
  tourId: number;
  reviewContent: string;
  userReviewDetail: {
    accommodation: number;
    destination: number;
    meals: number;
    transport: number;
    valueForMoney: number;
    overall: number;
  };
}

export interface ICallback {
  onSuccess: Function;
  onError: Function;
}

export interface ISubmitReview {
  reviewContent: string;
  accommodation: number;
  destination: number;
  meals: number;
  transport: number;
  valueForMoney: number;
  overall: number;
}
