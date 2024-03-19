import { createSlice } from '@reduxjs/toolkit';
import { fetchAllWaterThunk } from './operations';
import { currentThunk, signInThunk } from '../auth/thunks';

const waterSlice = createSlice({
  name: 'waterSlice',
  initialState: {
    modal: {
      modalIsOpen: false,
      modalDeleteOpen: false,
      modalAddForm: false,
      modalEditForm: false,
      isModalDayNorm: false,
      modalDayNorma: false,
      modalDeleteForm: false,
    },
    daysGenStats: false,
    dayNorma: null,
    isLoading: false,
    waterTodayList: [],
  },
  reducers: {
    changeModalClose: (state, { payload }) => {
      state.modal.modalIsOpen = payload;
      state.modal.modalAddForm = payload;
      state.modal.modalEditForm = payload;
      state.modal.isModalDayNorm = payload;
      state.modal.modalDayNorma = payload;
      state.modal.modalDeleteForm = payload;
      state.modal.modalDeleteOpen = payload;
    },
    changeModalAddForm: (state, { payload }) => {
      state.modal.modalIsOpen = payload;
      state.modal.modalAddForm = payload;
    },
    changeModalEditForm: (state, { payload }) => {
      state.modal.modalIsOpen = payload;
      state.modal.modalEditForm = payload;
    },
    changeModalDeleteForm: (state, { payload }) => {
      state.modal.modalDeleteOpen = payload;
      state.modal.modalDeleteForm = payload;
    },
    changeModalDailyNorma: (state, { payload }) => {
      state.modal.isModalDayNorm = payload;
      state.modal.modalDayNorma = payload;
    },
    changeShowDaysStats: (state, { payload }) => {
      state.daysGenStats = payload;
    },
    changeDayNorma: (state, { payload }) => {
      state.dayNorma = payload;
    },
    changeTodayList: (state, { payload }) => {
      state.waterTodayList.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllWaterThunk.fulfilled, (state, { payload }) => {
        state.waterTodayList.push(...payload);
      })
      .addCase(fetchAllWaterThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.dayNorma = payload.user.dailyNorma;
      })
      .addCase(currentThunk.fulfilled, (state, { payload }) => {
        state.dayNorma = payload.dailyNorma;
      });
  },
});
export const waterReducer = waterSlice.reducer;
export const {
  changeModalAddForm,
  changeModalClose,
  changeModalEditForm,
  changeModalDailyNorma,
  changeModalDeleteForm,
  changeShowDaysStats,
  changeDayNorma,
  changeTodayList,
} = waterSlice.actions;
