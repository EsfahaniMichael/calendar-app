import { createSlice } from '@reduxjs/toolkit'


export const daySlice = createSlice({
    name:"currentday",
    initialState: {value:{day:0, year:0, modal: false, daysInMonth: 0,}},
    reducers:{
        changeDay: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { changeDay } = daySlice.actions;

export default daySlice.reducer;