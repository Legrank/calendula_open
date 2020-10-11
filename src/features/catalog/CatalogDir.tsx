import React from 'react';
import {Button} from 'react-bootstrap'

interface IProps {
    name: string
    img: string
    url: string
  }

export function CatalogDir({name, img, url}:IProps) {
  return (
    <>
            <img src={img} alt="Rectangle227" className="my-3"/>
            <Button variant="outline-success" href={`/${url}`}>{name}</Button>
    </>
  );
}
