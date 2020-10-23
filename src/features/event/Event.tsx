import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { parseJSON, format, set, addDays } from 'date-fns'
import { ru } from 'date-fns/locale'
import { DatePicker, DateChangeCallBack } from 'react-nice-dates'

import { IEventsGroup } from './eventSlice'
import { updateEventSuccess, createEventSuccess } from './eventSlice'

interface IProps {
  groupEvent: IEventsGroup
  groupId: number
  createEvent: boolean
  show: boolean
  onHide(): void
}

interface IWeekDay {
  [key: string]: boolean
}

const tempWeekDay: IWeekDay = {
  weekDay1: false,
  weekDay2: false,
  weekDay3: false,
  weekDay4: false,
  weekDay5: false,
  weekDay6: false,
  weekDay0: false,
}

export function Event(props: IProps) {
  const { title, manager, duration, startDate } = props.groupEvent
  const timeEvent = startDate ? format(parseJSON(startDate), 'HH:mm') : ''
  const dispatch = useDispatch()
  const [nameEvent, setNameEvent] = useState(title)
  const [startEvent, setStartEvent] = useState(parseJSON(startDate))
  const [startTime, setStartTime] = useState(timeEvent)
  const [durationEvent, setDurationEvent] = useState(duration)
  const [eventManagerEvent, setEventManagertEvent] = useState(manager)
  const [weekDay, setWeekDay] = useState(tempWeekDay)
  const [repeatability, setRepeatability] = useState(false)

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    const value = target.checked
    const { name } = target

    setWeekDay((f) => ({ ...f, [name]: value }))
  }

  const setEventGroup = () => {
    const [hours, minutes] = startTime.split(':')
    var resultData = set(startEvent, {
      hours: Number(hours),
      minutes: Number(minutes),
    })
    function generateWeekDay(start: number) {
      const resWeekDay = []
      for (let i = 0; i < 7; i++) {
        if (start > 6) start = 0
        resWeekDay.push(start)
        start++
      }
      return resWeekDay
    }
    function generateEvents() {
      const resEvents: Array<Array<{ id: number; date: string }>> = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ]
      generateWeekDay(startEvent.getDay()).forEach((numDay, i) => {
        const id = 'weekDay' + numDay
        if (!weekDay[id]) return []
        const date = addDays(resultData, i)
        let dateEvent = date
        for (let j = 0; j < 10; j++) {
          dateEvent = addDays(dateEvent, 7)
          resEvents[numDay].push({ id: 11, date: dateEvent.toJSON() })
        }
      })
      return resEvents
    }

    if (!props.createEvent) {
      dispatch(
        updateEventSuccess({
          startDate: resultData.toJSON(),
          manager: eventManagerEvent,
          title: nameEvent,
          duration: durationEvent,
          groupId: props.groupId,
          timezone: 'Europe/Moscow',
          managerId: 1,
          events: generateEvents(),
        })
      )
    } else {
      dispatch(
        createEventSuccess({
          startDate: resultData.toJSON(),
          manager: eventManagerEvent,
          title: nameEvent,
          duration: durationEvent,
          groupId: props.groupId,
          timezone: 'Europe/Moscow',
          managerId: 1,
          events: generateEvents(),
        })
      )
    }
    onHide()
  }

  const onHide = () => {
    props.onHide()
    setRepeatability(false)
  }

  if (repeatability)
    return (
      <Modal
        show={props.show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Button className="close" onClick={onHide}>
            <span aria-hidden="true">×</span>
          </Button>
          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="weekDay1"
              name="weekDay1"
              checked={weekDay.weekDay1}
              onChange={(e) => handler(e)}
            />
            <label className="form-check-label" htmlFor="weekDay1">
              Пнд.
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="weekDay2"
              name="weekDay2"
              checked={weekDay.weekDay2}
              onChange={(e) => handler(e)}
            />
            <label className="form-check-label" htmlFor="weekDay2">
              Втр.
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="weekDay3"
              name="weekDay3"
              checked={weekDay.weekDay3}
              onChange={(e) => handler(e)}
            />
            <label className="form-check-label" htmlFor="weekDay3">
              Среда
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="weekDay4"
              name="weekDay4"
              checked={weekDay.weekDay4}
              onChange={(e) => handler(e)}
            />
            <label className="form-check-label" htmlFor="weekDay4">
              Четверг
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="weekDay5"
              name="weekDay5"
              checked={weekDay.weekDay5}
              onChange={(e) => handler(e)}
            />
            <label className="form-check-label" htmlFor="weekDay5">
              Пятница
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="weekDay6"
              name="weekDay6"
              checked={weekDay.weekDay6}
              onChange={(e) => handler(e)}
            />
            <label className="form-check-label" htmlFor="weekDay6">
              Суббота
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="weekDay0"
              name="weekDay0"
              checked={weekDay.weekDay0}
              onChange={(e) => handler(e)}
            />
            <label className="form-check-label" htmlFor="weekDay0">
              Воскресенье
            </label>
          </div>
          <Button variant="success" onClick={() => setRepeatability(false)}>
            Сохранить
          </Button>
        </Modal.Body>
      </Modal>
    )

  return (
    <Modal
      show={props.show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Button className="close" onClick={onHide}>
          <span aria-hidden="true">×</span>
        </Button>
        <form>
          <div className="form-group">
            <label htmlFor="titel">Название события</label>
            <input
              type="text"
              placeholder="Введите название"
              className="form-control"
              id="titel"
              value={nameEvent}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNameEvent(e.target.value)
              }
            />
          </div>
          <label>Дата начала</label>
          <DatePicker
            date={startEvent}
            onDateChange={setStartEvent as DateChangeCallBack}
            locale={ru}
          >
            {({ inputProps, focused }) => (
              <input
                className={'input' + (focused ? ' -focused' : '')}
                {...inputProps}
              />
            )}
          </DatePicker>
          <div className="form-group">
            <label htmlFor="start">Время начала</label>
            <input
              type="text"
              placeholder="Время начала"
              className="form-control"
              id="start"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStartTime(e.target.value)
              }
              value={startTime}
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Продолжительность</label>
            <input
              type="text"
              placeholder="Продолжительность"
              className="form-control"
              id="duration"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDurationEvent(Number(e.target.value))
              }
              value={durationEvent}
            />
          </div>
          <Button
            variant="secondary"
            className="w-100"
            onClick={() => setRepeatability(true)}
          >
            Повторяемость
          </Button>
          <div className="form-group">
            <label htmlFor="Manager">Ответственный</label>
            <input
              type="text"
              placeholder="Ответственныйе"
              className="form-control"
              id="Manager"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEventManagertEvent(e.target.value)
              }
              value={eventManagerEvent}
            />
          </div>
          <Button onClick={() => setEventGroup()} variant="success">
            Сохранить
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  )
}
