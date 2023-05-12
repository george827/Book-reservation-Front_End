import { configureStore } from '@reduxjs/toolkit';
import { restaurantTablesReducer } from './tables/restaurantTablesSlice';

const store = configureStore({
  reducer: {
    restaurantTables: restaurantTablesReducer,
  },
});

export default store;
