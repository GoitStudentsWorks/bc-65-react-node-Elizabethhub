import { createSlice } from '@reduxjs/toolkit';
import { signInThunk, signUpThunk } from './thunks';

const authSlice = createSlice({
  name: 'Auth',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    token: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(signUpThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(signInThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload?.token;
        state.isLoading = false;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
