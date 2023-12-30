export interface ISubmitDataPayment {
  orderId: string;
  orderInfo: string;
  userName: string;
  userPhoneNumber: string;
  userEmail: string;
  totalPeople: number;
}

export interface IDataPayment {
  paymentMethod: string;
  amount: number;
  orderId: string;
  orderInfo: string;
  requestType: string;
  extraData: string;
  items: IItemPayment[];
  userInfo: IUserInfoPayment;
  autoCapture: boolean;
  lang: string;
}

export interface IItemPayment {
  id: string;
  name: string;
  currency: string;
  quantity: number;
  totalAmount: number;
  purchaseAmount: number;
}

export interface IUserInfoPayment {
  name: string;
  phoneNumber: string;
  email: string;
}

export interface IResPayment {
  partnerCode: string;
  orderId: string;
  requestId: string;
  amount: number;
  responseTime: number;
  message: string;
  resultCode: number;
  payUrl: string;
  deeplink: string;
  qrCodeUrl: string;
}

export interface IPaymentCallback {
  onSuccess: Function;
  onError: Function;
}

export interface IInitialPaymentState {
  dataPayment: ISubmitDataPayment;
}
