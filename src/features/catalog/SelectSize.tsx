import React from 'react';

interface IProps {
    size: number
    active?: boolean
    setActive(id:number):void
    id: number
  }

export function SelectSize({size, active, setActive, id}:IProps) {
    let className = 'border m-1 py-1 px-3'
    if (active) {
        className += ' border-success'
    }
  return (
    <div className={className} onClick={()=> setActive(id)}> 
        {size}
    </div>
  )
}
