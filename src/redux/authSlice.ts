import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  signedin: boolean
}

const initialState: AuthState = {
  signedin: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state) => {
      state.signedin = true
      console.log(state.signedin)
    },
    signout: (state) => {
      state.signedin = false
    },
  },
})

export const { signin, signout } = authSlice.actions

export default authSlice.reducer