import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from '~models/user'

interface IState {
  user: User
}

const initialState: IState = {
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload
    },
  },
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
