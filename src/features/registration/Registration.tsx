import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

import {fetchRegister} from '../login/accountSlice'


export interface IRegistrationProps {
  show: boolean
  onHide():void
  registrationStep:number
  //setRegistrationStep(steep:number):void
  regStep(step:number):void
}

export function Registration(props:IRegistrationProps) {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pas, setPas] = useState('')
    const [rePas, setRePas] = useState('')

    if (props.registrationStep === 1) {
        return (
        <Modal
      show = {props.show}
      onHide= {props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body >
      <Button className='close' onClick={props.onHide}>
      <span aria-hidden="true">×</span>
      </Button>
      <Form className='d-flex flex-column align-items-center'>
        <h1>Регистрация</h1>
        <Form.Group className='w-75'>
          <Form.Control type="text" placeholder="Имя" value={name} onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className='w-75'>
          <Form.Control type="email" placeholder="E-mail" value={email} onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
                * - обязательно для заполнения
            </Form.Text>
        </Form.Group>
        <Form.Group>
          <Button onClick={() => props.regStep(2)} variant='success'>Дальше</Button>
        </Form.Group>
        </Form>
        </Modal.Body>
        </Modal>
    );
    }
    if (props.registrationStep === 2){
        return(
            <Modal
            show = {props.show}
            onHide= {props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body >
      <Button className='close' onClick={props.onHide}>
      <span aria-hidden="true">×</span>
      </Button>
      <Form className='d-flex flex-column align-items-center'>
        <h1>Регистрация</h1>
        <Form.Group className='w-75'>
          <Form.Control type="password" placeholder="Пароль" value={pas} onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setPas(e.target.value)}/>
        </Form.Group>
        <Form.Group className='w-75'>
          <Form.Control type="password" placeholder="Пароль ещё раз" value={rePas} onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setRePas(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Button onClick={() => {
              dispatch(fetchRegister({
                  name,
                  email,
                  pas,
                  repas: rePas
              }))
              props.onHide()
              dispatch(push('/lk'))
              }} variant='success'>Регистрация</Button>
        </Form.Group>
        </Form>
        </Modal.Body>
        </Modal>
        )
    }
    return null
    
}
