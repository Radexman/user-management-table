import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type FilterTypes } from '../../types/filter.type';
import type { RootState } from '../../app/store';

interface FilterState {
  filter: string;
  filterType: FilterTypes;
}

const initialState: FilterState = {
  filter: '',
  filterType: 'name',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    setFilterType(state, action: PayloadAction<FilterTypes>) {
      state.filterType = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter.filter;
export const selectFilterType = (state: RootState) => state.filter.filterType;
export const { setFilter, setFilterType } = filterSlice.actions;

export default filterSlice.reducer;
