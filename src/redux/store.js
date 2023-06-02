import { configureStore } from '@reduxjs/toolkit';
import { restaurantTablesReducer } from './tables/restaurantTablesSlice';
import { reservationsReducer } from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    restaurantTables: restaurantTablesReducer,
    reservations: reservationsReducer,
  },
});

export default store;
