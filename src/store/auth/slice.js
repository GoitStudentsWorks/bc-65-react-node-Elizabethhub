import { createSlice } from '@reduxjs/toolkit';
import {
  currentThunk,
  logoutThunk,
  signInThunk,
  signUpThunk,
  updateAvatarThunk,
} from './thunks';

const authSlice = createSlice({
  name: 'Auth',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    token: '',
  },
  reducers: {
    changeDayNorma: (state, { payload }) => {
      state.user.dailyNorma = payload;
    },
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
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(currentThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(currentThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null;
        state.token = '';
        state.isLoading = false;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(updateAvatarThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAvatarThunk.fulfilled, (state, { payload }) => {
        state.user = payload?.user;
        state.isLoading = false;
      })
      .addCase(updateAvatarThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { changeDayNorma } = authSlice.actions;
