import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modalcontrol",
  initialState: {
    value: { modal: false },
  },
  reducers: {
    dayModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { dayModal } = modalSlice.actions;

export default modalSlice.reducer;
