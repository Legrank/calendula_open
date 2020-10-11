import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'

import catalogReducer from 'features/catalog/catalogSlice'
import accauntReducer from 'features/login/accountSlice'
import lkReducer from 'features/lk/lkSlice'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
    router: connectRouter(history),
    catalog: catalogReducer,
    accaunt: accauntReducer,
    lk: lkReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer