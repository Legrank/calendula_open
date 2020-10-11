import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'

import  {history}  from './rootReducer'
import rootReducer, { RootState } from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
  //middleware:[routerMiddleware(history)]
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(routerMiddleware(history)),
})


export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store