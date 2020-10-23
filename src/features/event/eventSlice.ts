import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getDay, parseJSON } from 'date-fns'

import { IEvent, getEvents } from 'api/CalendulaAPI'
import { AppThunk } from 'app/store'

interface IEventsState {
  groups: IEventsGroups
  loading: boolean
  error: string | null
}

export interface IEventsGroup {
  groupId: number
  title: string
  timezone: string
  duration: number
  manager: string
  managerId: number
  startDate: string
  events: Array<
    Array<{
      id: number
      date: string
    }>
  >
}

export interface IEventsGroups {
  groupList: number[]
  [key: number]: IEventsGroup
}

const initialState: IEventsState = {
  groups: { groupList: [] } as IEventsGroups,
  loading: false,
  error: null,
}

const events = createSlice({
  name: 'events',
  initialState,
  reducers: {
    start(state) {
      state.loading = true
      state.error = null
    },
    getEventsSuccess(state, action: PayloadAction<IEvent[]>) {
      action.payload.forEach((item) => {
        const weekDay = getDay(parseJSON(item.date))
        if (!state.groups[item.group_id]) {
          state.groups.groupList.push(item.group_id)
          state.groups[item.group_id] = {
            groupId: item.group_id,
            title: item.title,
            timezone: item.timezone,
            duration: item.duration,
            manager: item.manager,
            managerId: item.manager_id,
            startDate: item.date,
            events: [[], [], [], [], [], [], []],
          }
        }
        state.groups[item.group_id]!.events[weekDay].push({
          date: item.date,
          id: item.id,
        })
      })
      state.loading = false
      state.error = null
    },
    updateEventSuccess(state, action: PayloadAction<IEventsGroup>) {
      const { groupId } = action.payload
      state.groups[groupId] = action.payload
      state.loading = false
      state.error = null
    },
    createEventSuccess(state, action: PayloadAction<IEventsGroup>) {
      const { groupId } = action.payload
      state.groups.groupList.push(groupId)
      state.groups[groupId] = action.payload
      state.loading = false
      state.error = null
    },
    failure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  start,
  getEventsSuccess,
  updateEventSuccess,
  failure,
  createEventSuccess,
} = events.actions
export default events.reducer

export const fetchEvents = (): AppThunk => async (dispatch) => {
  try {
    dispatch(start())
    const events = await getEvents()
    dispatch(getEventsSuccess(events))
  } catch (err) {
    dispatch(failure(err))
  }
}
