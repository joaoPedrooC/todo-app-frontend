import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../../interfaces/user";

type userState = UserInterface | {}

const initialState: userState = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInterface>) => {
      state = { ...state, action }
    },
    update: (_state, _action: PayloadAction<Partial<UserInterface>>) => {},
    deleteUser: (_state) => {},
    getUser: (_state, _action: PayloadAction<UserInterface>) => {}
  }
})

export const { login, update, getUser, deleteUser } = userSlice.actions
export default userSlice.reducer