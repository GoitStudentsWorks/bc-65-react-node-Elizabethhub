export const modalIsOpen = (state) => state.waterSlice.modal?.modalIsOpen;
export const modalDeleteOpen = (state) =>
  state.waterSlice.modal?.modalDeleteOpen;
export const modalIsAdd = (state) => state.waterSlice.modal?.modalAddForm;
export const modalIsEdit = (state) => state.waterSlice.modal?.modalEditForm;
export const isModalDayNorm = (state) => state.waterSlice.modal?.isModalDayNorm;
export const modalDayNorma = (state) => state.waterSlice.modal?.modalDayNorma;
export const modalId = (state) => state.waterSlice.modal?.modalId;

export const showDaysGenStats = (state) => state.waterSlice.daysGenStats;

export const selectorWaterToday = (state) => state.waterSlice.waterTodayList;

export const selectorWaterInfo = (state) =>
  state.waterSlice.waterPercentageToday;
