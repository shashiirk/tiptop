import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filterSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authReducer,
  },
});

export default store;
