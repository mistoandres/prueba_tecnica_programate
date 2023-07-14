import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from '../app/slice'

export default configureStore({
  reducer: {
    states: sliceReducer
  },
})