import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    brands: [],
    categories: [],
    sort: 'default',
  },
  reducers: {
    selectBrand(state, action) {
      state.brands.push(action.payload);
    },
    deselectBrand(state, action) {
      state.brands = state.brands.filter((value) => value !== action.payload);
    },
    selectCategory(state, action) {
      state.categories.push(action.payload);
    },
    deselectCategory(state, action) {
      state.categories = state.categories.filter(
        (value) => value !== action.payload
      );
    },
    chooseSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
