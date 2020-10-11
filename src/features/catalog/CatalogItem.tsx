import React from 'react';
import {Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { RootState } from 'app/rootReducer'

interface IProps {
    id: string
    url: string
  }

export function CatalogItem({id, url}:IProps) {
  const urlInfo = useSelector(
    (state: RootState) => state.router.location.pathname
  )+'/v1'
  return (
    <>
            <img src={url} alt="Rectangle227" className="my-3"/>
            <p className="text-secondary">Вертикальный памятник</p>
            <h4>{id}</h4>
            <Button variant="outline-success" href={urlInfo}>Выбрать размер</Button>
    </>
  );
}
