import { configureStore } from '@reduxjs/toolkit'
import nameSlice from './slices/name.slice'
import name from './slices/name.slice'

export default configureStore({
  reducer: {
    name: nameSlice
    
	}
})