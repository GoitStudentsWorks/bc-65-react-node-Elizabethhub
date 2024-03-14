import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'Auth',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    // builder.addCase();
    // builder.addCase();
    // builder.addCase();
    // builder.addCase();
    // builder.addCase();
  },
});

export const authReducer = authSlice.reducer;
