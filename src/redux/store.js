import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})