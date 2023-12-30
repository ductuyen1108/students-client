import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/common/redux/store';
import { IParamsScore, InitialScoreStudentState } from '../common/interface';

const initialScoreStudentState: InitialScoreStudentState = {
  dataSearch: {
    classId: undefined,
  },
  value: 0,
};

export const listScoreStudentReducer = createSlice({
  name: 'listScoreStudent',
  initialState: initialScoreStudentState,
  reducers: {
    setDataFilter(state, action: PayloadAction<IParamsScore>) {
      state.dataSearch = action.payload;
    },
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { setDataFilter, setValue } = listScoreStudentReducer.actions;

export const dataFilter = (state: RootState) => state.scoreStudent.dataSearch;
export const numberValue = (state: RootState) => state.scoreStudent.value;

export default listScoreStudentReducer.reducer;
