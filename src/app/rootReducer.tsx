import { combineReducers } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice';

const rootReducer = combineReducers({
    counterReducer: counterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer