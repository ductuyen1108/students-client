export interface IFormLogin {
  accountName: string;
  password: string;
}

export interface IDataLogin {
  accountName: string;
  password: string;
}

export interface IResLogin {
  accessToken: string;
  refreshToken: string;
}

export type ILoginCallback = {
  onSuccess: Function;
  onError: Function;
};
