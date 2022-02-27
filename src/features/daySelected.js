import { createSlice } from "@reduxjs/toolkit";

const year = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getDate();
const getDaysInMonth = function (month, year) {
  return new Date(year, month + 1, 0).getDate();
};
const daysArray = [...Array(getDaysInMonth(month, year)).keys()].map(
  (x) => x + 1
);

export const daySlice = createSlice({
  name: "currentday",
  initialState: {
    value: { day: day, year: year, daysInMonth: daysArray.length},
  },
  reducers: {
    changeDay: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeDay } = daySlice.actions;

export default daySlice.reducer;
