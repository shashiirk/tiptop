import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filterSlice';
import authReducer from './authSlice';
import wishlistReducer from './wishlistSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export default store;
