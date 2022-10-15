import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import articleReducer from './articleSlice'




export const store = configureStore({
  reducer: userReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['user/signIn'],
        ignoredPaths: ['user'],
  
      },
    }),
})
