import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/common/redux/store';
import { IParamsLession, InitialLessionStudentState } from '../common/interface';

const initialLessionState: InitialLessionStudentState = {
  dataSearch: {
    classId: undefined,
  },
  value: 0,
};

export const listLessionReducer = createSlice({
  name: 'listLession',
  initialState: initialLessionState,
  reducers: {
    setDataFilter(state, action: PayloadAction<IParamsLession>) {
      state.dataSearch = action.payload;
    },
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { setDataFilter, setValue } = listLessionReducer.actions;

export const dataFilter = (state: RootState) => state.lession.dataSearch;
export const numberValue = (state: RootState) => state.lession.value;

export default listLessionReducer.reducer;
