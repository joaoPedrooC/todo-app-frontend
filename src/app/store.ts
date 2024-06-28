import { ThunkAction, UnknownAction, configureStore } from "@reduxjs/toolkit";

import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>