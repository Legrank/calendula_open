import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'

import { RootState } from 'app/rootReducer'
import { Event } from './Event'
import { IEventsGroup } from './eventSlice'

interface IModalShow {
  [key: string]: boolean //Название окна : показываем?
}

export function EventList() {
  const voidEvent: IEventsGroup = {
    groupId: 3,
    title: '',
    timezone: '',
    duration: 0,
    startDate: new Date().toJSON(),
    manager: '',
    managerId: 0,
    events: [],
  }

  const [modalShow, setModalShow] = useState<IModalShow>({})
  const groups = useSelector((state: RootState) => state.events.groups)
  if (!groups) return <p>Загрузка</p>
  const eventElements: JSX.Element[] = []
  if (!groups.groupList) return <p>Загрузка</p>
  groups.groupList.forEach((item, i) => {
    const event = (
      <div key={item}>
        <Event
          show={modalShow[i]}
          onHide={() => setModalShow({ [i]: false })}
          groupEvent={groups[item]}
          groupId={item}
          createEvent={false}
        ></Event>
        <Button
          className="m-2 w-100"
          variant="dark"
          data-id={i}
          onClick={() => {
            setModalShow({ [i]: true })
          }}
        >
          {groups[item].title}
        </Button>
      </div>
    )
    eventElements.push(event)
  })
  return (
    <div>
      <Event
        show={modalShow.newItem}
        onHide={() => setModalShow({ newItem: false })}
        groupEvent={voidEvent}
        groupId={groups.groupList.length + 1}
        createEvent={true}
      ></Event>
      <Button
        className="m-2 w-100"
        variant="success"
        onClick={() => setModalShow({ newItem: true })}
      >
        Добавить событие
      </Button>
      {eventElements}
    </div>
  )
}
