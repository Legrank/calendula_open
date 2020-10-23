import React, { useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

interface IProps {
  id: number
  name: string
  show: boolean
  onHide(): void
}

export function Managers({ id, name, onHide, show }: IProps) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Button className="close" onClick={onHide}>
          <span aria-hidden="true">×</span>
        </Button>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            checked
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Default radio
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Second default radio
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios3"
            value="option3"
            disabled
          />
          <label className="form-check-label" htmlFor="exampleRadios3">
            Disabled radio
          </label>
        </div>
        <Button variant="success" onClick={() => 111}>
          Сохранить
        </Button>
      </Modal.Body>
    </Modal>
  )
}
