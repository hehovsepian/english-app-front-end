import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Course, courses} from "./data/courses_data"

const initialState: Course[] = courses

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {

  },
})

export const { } = coursesSlice.actions

export default coursesSlice.reducer