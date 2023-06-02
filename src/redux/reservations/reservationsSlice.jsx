import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// async thunk for fetching from API
export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async (userId) => {
    const response = await fetch(
      `https://book-a-table.onrender.com/api/v1/reservations?user_id=${userId}`,
    );
    const data = await response.json();
    return data;
  },
);

// async thunk for making post request
export const postReservation = createAsyncThunk(
  'reservations/postReservation',
  async (reservationsData) => {
    const response = await fetch('https://book-a-table.onrender.com/api/v1/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservationsData),
    });
    const data = await response.json();
    return data;
  },
);

// async thunk for deleting a reservation
export const cancelReservation = createAsyncThunk(
  'reservations/cancelReservation',
  async (reservationId) => {
    const response = await fetch(
      `https://book-a-table.onrender.com/api/v1/reservations/${reservationId}`,
      {
        method: 'DELETE',
      },
    );
    const id = await response.json();
    return id;
  },
);

const initialState = [];

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      const newState = action.payload;
      return newState;
    });
    builder.addCase(postReservation.fulfilled, (state, action) => {
      const newState = [...state, action.payload];
      return newState;
    });
    builder.addCase(cancelReservation.fulfilled, (state, action) => {
      const newState = state.filter(
        (reservation) => reservation.id !== action.payload,
      );
      return newState;
    });
  },
});

export const reservationsReducer = reservationsSlice.reducer;

export default reservationsSlice.reducer;
