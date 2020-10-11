import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IUser, getUser, registerNewUser, IDataRegister } from 'api/lilacAPI'
import { AppThunk } from 'app/store'

interface IUserState {
  user: IUser
}

interface IDataLogin {
  email: string
  pas: string
}

const testUser: IUser= {
  name: 'Петя',
  email: 'test@mail.com',
  phone: '+7 967 367 1267',
  job: false,
  token: 'token'
}
// eslint-disable-next-line
const testComp: IUser= {
  name: 'Петя industrial',
  email: 'testComp@mail.com',
  phone: '+7 967 367 1267',
  job: true,
  token: 'token'
}

const initialState: IUserState = {
    user: {
      name: '',
      email: '',
      token: false,
      phone: '',
      job: false
    }
  }

const catalog = createSlice({
    name: 'account',
    initialState,
    reducers: {
      getUserStart(state) {
      },
      getUserSuccess(state) {
        state.user = testUser
      },
      getUserFailure(state, action: PayloadAction<string>) {
        
      },
      getRegisterStart(state) {
      },
      getRegisterSuccess(state, action: PayloadAction<IUser>) {
        state.user = action.payload
      },
      getRegisterFailure(state, action: PayloadAction<string>) {
        
      },
      getLogout(state) {
        state.user.token = false
      },
    }
  })


  export const {
    getUserStart,
    getUserSuccess,
    getUserFailure,
    getRegisterStart,
    getRegisterSuccess,
    getRegisterFailure,
    getLogout
  } = catalog.actions
  export default catalog.reducer
  
  export const fetchUser = ({email, pas }: IDataLogin): AppThunk => async dispatch => {
    try {
      dispatch(getUserStart())
      const user = await getUser()
      user.email = email
      dispatch(getUserSuccess())
    } catch (err) {
      dispatch(getUserFailure(err))
    }
  }

  export const fetchRegister = (data: IDataRegister): AppThunk => async dispatch => {
    try {
      dispatch(getRegisterStart())
      const user = await registerNewUser(data)
      dispatch(getRegisterSuccess(user))
    } catch (err) {
      dispatch(getRegisterFailure(err))
    }
  }
