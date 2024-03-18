export const modalIsOpen = (state) => state.waterSlice.modal?.modalIsOpen;
export const modalDeleteOpen = (state) =>
  state.waterSlice.modal?.modalDeleteOpen;
export const modalIsAdd = (state) => state.waterSlice.modal?.modalAddForm;
export const modalIsEdit = (state) => state.waterSlice.modal?.modalEditForm;
export const isModalDayNorm = (state) => state.waterSlice.modal?.isModalDayNorm;
export const modalDayNorma = (state) => state.waterSlice.modal?.modalDayNorma;
export const modalIsDelete = (state) => state.waterSlice.modal?.modalDeleteForm;

export const showDaysGenStats = (state) => state.waterSlice.daysGenStats;
export const dayNorma = (state) => state.waterSlice.dayNorma;
