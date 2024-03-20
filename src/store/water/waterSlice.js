import { createSlice } from '@reduxjs/toolkit';
import { deleteWaterThunk, fetchAllWaterThunk } from './operations';
import { toast } from 'react-toastify';

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
      modalId: '',
    },
    daysGenStats: false,
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
    changeTodayList: (state, { payload }) => {
      state.waterTodayList.push(payload);
    },
    changeModalId: (state, { payload }) => {
      state.modal.modalId = payload;
    },
    deleteWater: (state, action) => {
      state.waterTodayList = state.waterTodayList.filter(
        (waterItem) => waterItem.id !== action.payload
      );
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
      .addCase(deleteWaterThunk.fulfilled, (state, { payload }) => {
        state.waterTodayList = state.waterTodayList.filter(
          (waterItem) => waterItem._id !== payload.id
        );
        toast.success('Water note was successfully deleted');
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
  deleteWater,
} = waterSlice.actions;
