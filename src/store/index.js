import { configureStore } from '@reduxjs/toolkit'

import mainReducer from './Reducer'

const appReducer = mainReducer

const reducers = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined
  }
  return appReducer(state, action)
}

const store = configureStore({
  reducer: reducers
})


export default store;