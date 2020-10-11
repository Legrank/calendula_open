import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  Link  } from 'react-router-dom'

import { RootState } from 'app/rootReducer'
import { fetchItem } from './catalogSlice'
import { SelectSize } from './SelectSize'
import {urlName} from 'utils/urlToWorld'


export function CatalogInfo() {
    const dispatch = useDispatch()
    const urls = useSelector(
        (state: RootState) => state.router.location.pathname
      ).split('/')
      const dir = urls[urls.length-1]
      urls.shift()
      useEffect(() => {
        dispatch(fetchItem())
    }, [dispatch, dir])
    const itemInfo = useSelector(
        (state: RootState) => state.catalog.item
      )

      const [activeH, setActiveH] = useState(0)
      const [activeW, setActiveW] = useState(0)
      const [activeZ, setActiveZ] = useState(0)
      function htmlSize (size:number[], adActive:number, f:(id:number) => void):JSX.Element[] {
        const html = size.map((item, i) => {
            let active = false
            if (i === adActive) {active = true}
            return <SelectSize size={item} key ={item} active={active} setActive={f} id= {i}/>
        })
    
        return html
      }
      const htmlSizeH = htmlSize(itemInfo.sizeH, activeH, setActiveH)
      const htmlSizeW = htmlSize(itemInfo.sizeW, activeW, setActiveW)
      const htmlSizeZ = htmlSize(itemInfo.sizeZ, activeZ, setActiveZ)

  return (
    <div className="row justify-content-center">
    <ol className="breadcrumb w-100">
      {urls.map((item, i, urls) => {
          if (i === urls.length-1) return null
        const url = urls.filter((item, y) => y < i+1 ).join('/')
        return <li className="breadcrumb-item" key={i}><Link className='text-secondary' to={`/${url}`}>{urlName[item]}</Link></li>
      })}
      <li className="breadcrumb-item"><Link className='text-secondary' to={`/${urls.join('/')}`}>{itemInfo.id}</Link></li>
    </ol>
        <h2>{itemInfo.id}</h2>
        <div className="w-100"></div>
        <div className="col-5">
            <img src={itemInfo.img} alt="Rectangle227" className="my-3"/>
            <p className="text-secondary w-50">Вертикальный памятник простой формы  из гранита на могилу с доставкой и установкой на кладбище в Москве и Московской области. Гравировка на памятнике эпитафии и портрета. Онлайн заказ и установка.</p>
            <Button variant="success">Узнать цену</Button>
        </div>
        <div className="col-5 flex-column">
            <h4>Тип: памятник вертикальный</h4>
        <div className="form-group w-50">
            <label htmlFor="exampleFormControlSelect1">Тип захоронения</label>
            <select className="form-control" id="exampleFormControlSelect1">
            <option>Тип 1</option>
            <option>Тип 2</option>
            <option>Тип 3</option>
            </select>
        </div>
        <h4>Размеры:</h4>
        <h6>Высота</h6>
        <div className='d-flex'>{htmlSizeH}</div> 
        <h6>Ширина</h6>
        <div className='d-flex'>{htmlSizeW}</div> 
        <h6>Толщина</h6>
        <div className='d-flex'>{htmlSizeZ}</div> 
        <div className="form-group w-50">
            <label htmlFor="exampleFormControlSelect2">Полировка</label>
            <select className="form-control" id="exampleFormControlSelect2">
            <option>Да</option>
            <option>Нет</option>
            <option>Возможно</option>
            </select>
        </div>
        </div>
        
    </div>
  );
}
