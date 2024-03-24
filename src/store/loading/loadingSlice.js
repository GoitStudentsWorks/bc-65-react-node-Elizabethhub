import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  currentThunk,
  logoutThunk,
  updateAvatarThunk,
  updateUserThunk,
  forgotThunk,
  updatePasswordThunk,
} from '../auth/thunks.js';
import {
  addWaterThunk,
  deleteWaterThunk,
  editDailyNormaThunk,
  editWaterThunk,
  // fetchAllWaterThunk,
  fetchTodayWaterThunk,
} from '../water/operations.js';

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
          updatePasswordThunk.pending,
          addWaterThunk.pending,
          editWaterThunk.pending,
          deleteWaterThunk.pending,
          // fetchAllWaterThunk.pending,
          editDailyNormaThunk.pending,
          fetchTodayWaterThunk.pending
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
          updatePasswordThunk.rejected,
          addWaterThunk.rejected,
          editWaterThunk.rejected,
          deleteWaterThunk.rejected,
          // fetchAllWaterThunk.rejected,
          editDailyNormaThunk.rejected,
          fetchTodayWaterThunk.rejected
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
          updatePasswordThunk.fulfilled,
          addWaterThunk.fulfilled,
          editWaterThunk.fulfilled,
          deleteWaterThunk.fulfilled,
          // fetchAllWaterThunk.fulfilled,
          editDailyNormaThunk.fulfilled,
          fetchTodayWaterThunk.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const loadingReducer = loadingSlice.reducer;
