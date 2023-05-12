import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRestaurantTablesData = createAsyncThunk(
  'restaurantTables/fetchRestaurantTablesData',
  async () => {
    const response = await fetch(
      'http://127.0.0.1:3001/api/v1/restaurant_tables',
    );
    const data = await response.json();
    return data;
  },
);

const initialState = {
  loading: false,
  tablesData: [],
  error: '',
};

export const restaurantTablesSlice = createSlice({
  name: 'restaurantTables',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurantTablesData.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(fetchRestaurantTablesData.fulfilled, (state, action) => {
      const newState = {
        ...state,
        loading: false,
        tablesData: action.payload,
      };
      return newState;
    });
    builder.addCase(fetchRestaurantTablesData.rejected, (state) => {
      const newState = { ...state, loading: false, error: '404 Not Found' };
      return newState;
    });
  },
});

export const restaurantTablesReducer = restaurantTablesSlice.reducer;

export default restaurantTablesSlice.reducer;
