import { createSlice } from '@reduxjs/toolkit';
import {
  currentThunk,
  forgotThunk,
  logoutThunk,
  signInThunk,
  signUpThunk,
  updateAvatarThunk,
  updatePasswordThunk,
  updateUserThunk,
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
        state.user.avatarURL = payload.avatarURL;
        state.isLoading = false;
      })
      .addCase(updateAvatarThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(updateUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(updateUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(forgotThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(forgotThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(updatePasswordThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePasswordThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updatePasswordThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { changeDayNorma } = authSlice.actions;
