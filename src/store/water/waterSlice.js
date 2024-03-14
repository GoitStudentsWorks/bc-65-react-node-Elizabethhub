import { createSlice } from '@reduxjs/toolkit';

const waterSlice = createSlice({
  name: 'waterSlice',
  initialState: {
    modal: {
      modalIsOpen: false,
      modalAddForm: false,
    },
    isLoading: false,
  },
  reducers: {
    changeModalClose: (state, { payload }) => {
      state.modal.modalIsOpen = payload;
      state.modal.modalAddForm = payload;
    //   state.modal.modalEditForm = payload;
    },
    changeModalAddForm: (state, { payload }) => {
      state.modal.modalIsOpen = payload;
      state.modal.modalAddForm = payload;
    },
    extraReducers: (builder) => {
      // builder.addCase();
    },
  },
});

export const waterReducer = waterSlice.reducer;
export const { changeModalAddForm, changeModalClose } = waterSlice.actions;
