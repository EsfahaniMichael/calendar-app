import { createSlice } from '@reduxjs/toolkit'


export const daySlice = createSlice({
    name:"currentday",
    initialState: {value:{day:69, year:2069, modal: false}},
    reducers:{
        changeDay: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { changeDay } = daySlice.actions;

export default daySlice.reducer;