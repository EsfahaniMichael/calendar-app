import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import dayReducer from '../features/daySelected';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    currentday: dayReducer,
    
  },
})
