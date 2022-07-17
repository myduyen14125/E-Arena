import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app.slice'
import courseReducer from './slices/course.slice'

const rootReducer = {
  course: courseReducer,
  app: appReducer,
}
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false })
  ]
})
export default store