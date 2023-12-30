export interface IClassByScore {
  id: number;
  className: string;
  branchName: string;
}

export interface IResScore {
  items: IScoreItem[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IScoreItem {
  id: number;
  midScore: number;
  finalScore: number;
  class: {
    id: number;
    className: string;
    branchName: string;
  };
  student: {
    id: number;
    accountName: string;
    email: null;
    name: string;
    birthDate: string;
    createdAt: string;
    gender: string;
    userId: number;
    address: string;
    holyName: string;
    lastName: string;
    age: number;
    status: string;
    avatar: null;
    user: null;
    class: null;
  };
}

export interface IParamsScore {
  classId?: number;
  page?: number;
  limit?: number;
}

export interface InitialScoreStudentState {
  dataSearch: IParamsScore;
  value: number;
}

export interface IScoreStudentSubmitFilter {
  classId?: {
    id: number;
    name: string;
  };
}

export interface IPropTableRow {
  row: IScoreItem;
  selected: boolean;
  onSelectRow: (checked: boolean) => void;
  onDeleteRow: VoidFunction;
  onEditRow: VoidFunction;
  onDetailRow: VoidFunction;
}
