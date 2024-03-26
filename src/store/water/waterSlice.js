import { createSlice } from '@reduxjs/toolkit';
import {
  // fetchAllWaterThunk,
  fetchMonthWaterThunk,
  editDailyNormaThunk,
  fetchTodayWaterThunk,
  addWaterThunk,
  editWaterThunk,
  deleteWaterThunk,
} from './operations';
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
      modalId: '',
    },
    daysGenStats: false,
    isLoading: false,
    waterTodayList: [],
    waterPercentageToday: 0,
    monthWaterData: [],
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
      .addCase(fetchTodayWaterThunk.fulfilled, (state, { payload }) => {
        state.waterTodayList = payload.waterVolumes;
        state.waterPercentageToday = payload.waterVolumePercentage;
      })
      .addCase(fetchMonthWaterThunk.fulfilled, (state, { payload }) => {
        state.monthWaterData = payload;
      })
      .addCase(fetchMonthWaterThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(editDailyNormaThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(fetchTodayWaterThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(addWaterThunk.fulfilled, (state, { payload }) => {
        state.waterTodayList.push(payload);
        state.isLoading = false;
        toast.success('Water note was successfully added');
      })
      .addCase(addWaterThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addWaterThunk.rejected, (state, action) => {
        toast.error(`Failed to add water: ${action.payload}`);
        state.isLoading = false;
      })
      .addCase(editWaterThunk.fulfilled, (state, { payload }) => {
        const index = state.waterTodayList.findIndex(
          (water) => water._id === payload.id
        );
        if (index !== -1) {
          state.waterTodayList[index] = payload;
        } else {
          state.waterTodayList.push(payload);
        }
        state.isLoading = false;
        toast.success('Water note was successfully edited');
      })
      .addCase(editWaterThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editWaterThunk.rejected, (state, action) => {
        toast.error(`Failed to edit water: ${action.payload}`);
        state.isLoading = false;
      })
      .addCase(deleteWaterThunk.fulfilled, (state, { payload }) => {
        state.waterTodayList = state.waterTodayList.filter(
          (water) => water._id !== payload
        );
        state.isLoading = false;
        toast.success('Water note was successfully deleted!');
      })
      .addCase(deleteWaterThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteWaterThunk.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(`Failed to delete water: ${action.payload}`);
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
  editWater,
} = waterSlice.actions;
