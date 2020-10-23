import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'

import accauntReducer from 'features/login/accountSlice'
import eventsReducer from 'features/event/eventSlice'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
    router: connectRouter(history),
    accaunt: accauntReducer,
    events: eventsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer