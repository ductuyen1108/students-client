import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IDataFilterTour, InitialNewsState } from './interface';
import { defaultFilterTour } from './constant';
import { RootState } from '@/common/redux/store';

const initialState: InitialNewsState = {
  dataFilter: defaultFilterTour,
};

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    setDataFilter: (state, action: PayloadAction<IDataFilterTour>) => {
      state.dataFilter = action.payload;
    },
  },
});

export const { setDataFilter } = tourSlice.actions;

export const dataFilter = (state: RootState) => state.tour.dataFilter;

export default tourSlice.reducer;
