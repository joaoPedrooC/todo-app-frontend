import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../../interfaces/user";

type userState = UserInterface | {}

const initialState: userState = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInterface>) => {
      state = action.payload
    },
    update: (state, action: PayloadAction<Partial<UserInterface>>) => {},
    deleteUser: (state) => {},
    getUser: (state, action: PayloadAction<UserInterface>) => {}
  }
})

export const { login, update, getUser, deleteUser } = userSlice.actions
export default userSlice.reducer