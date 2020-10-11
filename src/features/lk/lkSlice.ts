import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ILk, getLk } from 'api/lilacAPI'
import { AppThunk } from 'app/store'

interface ILkState {
    lk:Array<ILk>
    loading: boolean
    error: string | null
}

const initialState: ILkState = {
    lk: [],
    loading: false,
    error: null
  }

const lk = createSlice({
    name: 'lk',
    initialState,
    reducers: {
      getLkStart(state) {
        state.loading = true
        state.error = null
      },
      getLkSuccess(state, action: PayloadAction<ILk[]>) {
        state.lk = action.payload
        state.loading = false
        state.error = null
      },
      getLkFailure(state, action: PayloadAction<string>) {
        state.loading = false
        state.error = action.payload
      }
    }
  })


  export const {
    getLkStart,
    getLkSuccess,
    getLkFailure
  } = lk.actions
  export default lk.reducer
  
  export const fetchLk = (): AppThunk => async dispatch => {
    try {
      dispatch(getLkStart())
      const lk = await getLk()
      dispatch(getLkSuccess(lk))
    } catch (err) {
      dispatch(getLkFailure(err))
    }
  }
