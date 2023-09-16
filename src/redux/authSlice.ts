import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  signedin: boolean,
  user: string | null
}

const initialState: AuthState = {
  signedin: localStorage.getItem('user') ? true : false,
  user: localStorage.getItem('user')
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<string>) => {
      state.signedin = true
      state.user = action.payload
      localStorage.setItem('user', action.payload);
    },
    signout: (state) => {
      state.signedin = false
      state.user = null
      localStorage.removeItem('user');
    },
  },
})

export const { signin, signout } = authSlice.actions

export default authSlice.reducer