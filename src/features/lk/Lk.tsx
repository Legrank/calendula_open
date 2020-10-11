import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import './lk.css'

import { RootState } from 'app/rootReducer'
import {fetchLk} from './lkSlice'

export function Lk() {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchLk())
  }, [dispatch])
  const user = useSelector(
    (state: RootState) => state.accaunt.user
  )
  const lk = useSelector(
    (state: RootState) => state.lk.lk
  )

  return (  
    <div className='mx-1 row align-items-start text-left m-5'>
      <h1 className="w-100">Личный кабинет заказчика</h1>
      <div className='col-9'>
      <div className="card border-success">
        <div className="card-body">
          <h3 className="card-title">Мои заявки</h3>
          <p className="card-text">1. Памятник V6</p>
        </div>
      </div>
      <div className="card border-success p-2 mt-5">
      <table className="table table-striped justify-content-between">
        <thead>
          <tr>
            <th scope="col-1">#</th>
            <th scope="col">Наименоание исполнителя</th>
            <th scope="col">Запрос</th>
            <th scope="col">Рейтинг</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Выбрать</th>
          </tr>
        </thead>
        <tbody>
          {lk.map((item, i) => (
            <tr key={item.id}>
            <th scope="row">{i+1}</th>
            <td>{item.orgName}</td>
            <td>{item.idJob}</td>
            <td>{item.raiting}</td>
            <td>{item.price}</td>
            <td><input type="checkbox" /></td>
          </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
      <div className="card col-2 ml-3 align-items-center">
        <img src="img/Intersect.png" className="lk-avatar rounded-circle" alt="..."></img>
        <div className="card-body">
          <h3 className="card-title text-center">{user.name}</h3>
          <p className="card-text"><span className='text-secondary'>Телефон:</span> {user.phone}</p>
          <p className="card-text"><span className='text-secondary'>E-mail:</span> {user.email}</p>
        </div>
      </div>
    </div>
  );
}
