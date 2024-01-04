export interface IProfile {
  id: number;
  accountName: string;
  email: string;
  name: string;
  birthDate: string;
  createdAt: string;
  gender: string;
  userId: number;
  address: string;
  holyName: string;
  lastName: string;
  age: number;
  family: IFamilyItem[];
  class: {
    id: number;
    className: string;
    branchName: string;
  };
  avatar: IAvatar;
}

export interface IFamilyItem {
  id?: number;
  phoneNumber: string;
  name: string;
  birthDate: string;
  holyName: string;
  lastName: string;
  role: string;
  email: string;
}

export interface IAvatar {
  id: number;
  key: string;
  type: string;
  size: number;
  url: string;
  uploaderId: number;
}

export interface IDataFormEditProfile {
  holyName: string;
  lastName: string;
  name: string;
  avatarId: number;
  email?: string;
  birthDate: string;
  gender: string;
  address: string;
  classId: number;
  provinceId: number;
  wardId: number;
  districtId: number;
  family: IFamilyItem[];
}

export interface ISubmitEditProfile {
  holyName: string;
  lastName: string;
  email: string;
  name: string;
  birthDate: string;
  gender: string;
  address: string;
  class: { id: number; name: string };
  fatherName: string;
  fatherBirthDate: string;
  fatherEmail: string;
  fatherHolyName: string;
  fatherLastName: string;
  fatherPhoneNumber: string;
  roleFather: 'DAD';
  motherName: string;
  motherBirthDate: string;
  motherEmail: string;
  motherHolyName: string;
  motherLastName: string;
  motherPhoneNumber: string;
  roleMother: 'MOM';
  provinceId: {
    code: number;
  };
  districtId: {
    code: number;
  };
  wardId: {
    code: number;
  };
}

export interface IChangePassword {
  password: string;
  newPassword: string;
}

export interface ISubmitChangePassword {
  password: string;
  newPassword: string;
  confirmNewPassword?: string;
}

// Address
export interface IParam {
  id: string;
}

export interface IProvince {
  name: string;
  slug: string;
  type: string;
  nameWithType: string;
  code: string;
}

export interface IDistrict {
  id: string;
  name: string;
  type: string;
  slug: string;
  nameWithType: string;
  path: string;
  pathWithType: string;
  code: string;
  parent_code: string;
}

export interface IWard {
  id: string;
  name: string;
  type: string;
  slug: string;
  nameWithType: string;
  path: string;
  pathWithType: string;
  code: string;
  parent_code: string;
}

export interface StateProps {
  showOldPassword: boolean;
  showNewPassword: boolean;
}
