import { createSlice } from '@reduxjs/toolkit';
import { fetchAllWaterThunk } from './operations';

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
      modalId: '',
    },
    daysGenStats: false,
    isLoading: false,
    waterTodayList: [],
    waterPercentageToday: 0,
  },
  reducers: {
    changeModalClose: (state, { payload }) => {
      state.modal.modalIsOpen = payload;
      state.modal.modalAddForm = payload;
      state.modal.modalEditForm = payload;
      state.modal.isModalDayNorm = payload;
      state.modal.modalDayNorma = payload;
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
    },
    changeModalDailyNorma: (state, { payload }) => {
      state.modal.isModalDayNorm = payload;
      state.modal.modalDayNorma = payload;
    },
    changeShowDaysStats: (state, { payload }) => {
      state.daysGenStats = payload;
    },
    changeTodayList: (state, { payload }) => {
      state.waterTodayList.push(payload);
    },
    changeModalId: (state, { payload }) => {
      state.modal.modalId = payload;
    },
    updateWaterPercentage: (state, { payload }) => {
      state.waterPercentageToday = payload;
    },
    deleteWater: (state, action) => {
      state.waterTodayList = state.waterTodayList.filter(
        (waterItem) => waterItem._id !== action.payload
      );
    },
    editWater: (state, action) => {
      const index = state.waterTodayList.findIndex(
        (el) => el._id === action.payload.id
      );
      if (index !== -1) {
        state.waterTodayList[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllWaterThunk.fulfilled, (state, { payload }) => {
        state.waterTodayList = payload;
      })
      .addCase(fetchAllWaterThunk.rejected, (state, { payload }) => {
        state.error = payload;
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
  changeTodayList,
  changeModalId,
  updateWaterPercentage,
  deleteWater,
  editWater,
} = waterSlice.actions;
