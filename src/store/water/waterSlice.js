import { createSlice } from '@reduxjs/toolkit';

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
    dayNorma: 1.5,
    isLoading: false,
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
    // extraReducers: (builder) => {
    //   // builder.addCase();
    // },
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
} = waterSlice.actions;
