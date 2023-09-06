import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Student, students} from "./data/students_data"

const initialState: Student[] = students

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {

  },
})

export const { } = studentsSlice.actions

export default studentsSlice.reducer