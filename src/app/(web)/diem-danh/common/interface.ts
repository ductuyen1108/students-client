export interface IClassByAttendance {
  id: number;
  className: string;
  branchName: string;
}

export interface IResLession {
  items: ILessionItem[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface ILessionItem {
  id: number;
  title: string;
  content: string;
  startTime: string;
  endTime: string;
  class: {
    id: number;
    className: string;
    branchName: string;
  };
  attended: boolean;
}

export interface IParamsLession {
  classId?: number;
  page?: number;
  limit?: number;
}

export interface InitialLessionStudentState {
  dataSearch: IParamsLession;
  value: number;
}

export interface ILessionStudentSubmitFilter {
  classId?: {
    id: number;
    name: string;
  };
}

export interface IPropTableRow {
  row: ILessionItem;
  selected: boolean;
  onSelectRow: (checked: boolean) => void;
  onDeleteRow: VoidFunction;
  onEditRow: VoidFunction;
  onDetailRow: VoidFunction;
}
