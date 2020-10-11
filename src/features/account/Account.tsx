import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {  Link  } from 'react-router-dom'
import { push } from 'connected-react-router'

import {Login} from 'features/login/Login'
import {Registration} from 'features/registration/Registration'
import { RootState } from 'app/rootReducer'
import {getLogout} from '../login/accountSlice'

export function Account() {
    const dispatch = useDispatch()
    const [registrationShow, setRegistrationShow] = useState(false)
    const [registrationStep, setRegistrationStep] = useState(1)
    const [modalShow, setModalShow] = useState(false)
    const regStep = (step:number) => setRegistrationStep(step)

    const checLogin = useSelector(
        (state: RootState) => state.accaunt.user.token
    )
    const name = useSelector(
        (state: RootState) => state.accaunt.user.name
    )

    if (checLogin) {
        return (
            <>
            <Link className='nav-link text-light' to={`/lk`}>Здравствуйте, <span className='text-success'>{name}</span></Link>
            <Button variant="dark" onClick={() => {
                dispatch(getLogout())
                dispatch(push('/'))
                }}>Выход</Button>
            </>
        )
    }
    return (
        <>
        <Button variant="dark" onClick={() => setModalShow(true)}>Вход</Button>
        <Button variant="dark" onClick={() => {
            setRegistrationStep(1)
            setRegistrationShow(true)
        }}>Регистрация</Button>
        <Login
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <Registration
            show={registrationShow}
            onHide={() => setRegistrationShow(false)}
            registrationStep = {registrationStep}
            regStep = {regStep}
        />
        </>
    );
}
