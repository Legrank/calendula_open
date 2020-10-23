import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ru } from 'date-fns/locale'
import { Calendar } from 'react-nice-dates'

import './lk.css'

//import { RootState } from 'app/rootReducer'
import { fetchEvents } from '../event/eventSlice'
import { EventList } from 'features/event/EventList'

type TDate = Date | null

export function Lk() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEvents())
  }, [dispatch])
  //const user = useSelector((state: RootState) => state.accaunt.user)

  return (
    <div className="row">
      <div className="col-9">
        <Calendar locale={ru} />
      </div>
      <div className="col">
        <EventList></EventList>
      </div>
    </div>
  )
}
