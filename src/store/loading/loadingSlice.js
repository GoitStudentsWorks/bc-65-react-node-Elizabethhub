import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  currentThunk,
  logoutThunk,
  updateAvatarThunk,
  updateUserThunk,
  forgotThunk,
  updatePasswordThunk,
} from '../auth/thunks.js';

const loadingSlice = createSlice({
  name: 'loader',
  initialState: {
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          currentThunk.pending,
          logoutThunk.pending,
          updateAvatarThunk.pending,
          updateUserThunk.pending,
          forgotThunk.pending,
          updatePasswordThunk.pending
        ),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          currentThunk.rejected,
          logoutThunk.rejected,
          updateAvatarThunk.rejected,
          updateUserThunk.rejected,
          forgotThunk.rejected,
          updatePasswordThunk.rejected
        ),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          currentThunk.fulfilled,
          logoutThunk.fulfilled,
          updateAvatarThunk.fulfilled,
          updateUserThunk.fulfilled,
          forgotThunk.fulfilled,
          updatePasswordThunk.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const loadingReducer = loadingSlice.reducer;
