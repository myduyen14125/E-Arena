import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import CoursesApi from '../api/couser'
import { payloadCreator } from '../utils/helper'

export const getCourses = createAsyncThunk(
  'course',
  payloadCreator(CoursesApi.getCourses)
)


const handleFulfilled = (state, action) => {
  console.log(action)
  console.log('test')
  state.course = action.payload
  console.log(state.course)

}

const course = createSlice({
  name: 'course',
  initialState: {
    course: []
  },

  extraReducers: {
    [getCourses.fulfilled]: handleFulfilled,
  }
})

const courseReducer = course.reducer
export default courseReducer