import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {  Link  } from 'react-router-dom'

import {CatalogItem} from './CatalogItem'
import {CatalogDir} from './CatalogDir'
import { fetchCatalog } from './catalogSlice'
import { RootState } from 'app/rootReducer'
import {urlName} from 'utils/urlToWorld'

export function Catalog() {
  const dispatch = useDispatch()

  const catalogItems = useSelector(
    (state: RootState) => state.catalog.catalogItems
  )
  const urls = useSelector(
    (state: RootState) => state.router.location.pathname
  ).split('/')
  const dir = urls[urls.length-1]
  urls.shift()
  useEffect(() => {
    dispatch(fetchCatalog(dir))
}, [dispatch, dir])

let catalog

if (dir === 'catalogItem') {
  catalog = catalogItems.map(item => (
  <div className="col-2" key={item.id}>
    <CatalogItem id={item.id} url={item.img} />
  </div>
))} else {
  catalog = catalogItems.map((item, i) => {
    const url = urls.join('/')+item.url
    return <div className="col-2" key={item.id}>
      <CatalogDir name={item.name!} img={item.img} url={url}/>
    </div>
})}

  return (
    <>
    <ol className="breadcrumb">
      {urls.map((item, i, urls) => {
        const url = urls.filter((item, y) => y < i+1 ).join('/')
        return <li className="breadcrumb-item" key={i}><Link className='text-secondary' to={`/${url}`}>{urlName[item]}</Link></li>
      })}
    </ol>
    <div className='mx-1 row align-items-end'>
    {catalog}
    </div>
    
    </>
  );
}
