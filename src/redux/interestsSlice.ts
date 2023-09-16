import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { interests} from "./data/interests_data"

export interface InterestsState {
    interests: string[],
    selectedInterests: string[] | null
  }
  
  const initialState: InterestsState = {
    interests: interests, 
    selectedInterests: null
  }

export const interestsSlice = createSlice({
  name: 'interests',
  initialState,
  reducers: {
    saveInterests: (state, action: PayloadAction<string[]>) => {
        state.selectedInterests = action.payload
      },
  },
})

export const { saveInterests } = interestsSlice.actions

export default interestsSlice.reducer