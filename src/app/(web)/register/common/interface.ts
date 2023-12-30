export interface IFormRegister {
  phoneNumber: string;
  password: string;
  name: string;
  confirmPassword?: string;
}

export interface IDataSubmitRegister {
  name: string;
  password: string;
  phoneNumber: string;
}

export type IRegisterCallback = {
  onSuccess: VoidFunction;
  onError: VoidFunction;
};
