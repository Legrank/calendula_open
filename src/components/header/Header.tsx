import React from 'react';

import './Header.css';
import vector from './img/Vector.png'

export function Header() {

  return (
    <div className="header-top">
        <div className="header-left">
            <img src={vector} className="header-vector" alt="logo" />
            <p className="header-location">Москва и МО</p>
        </div>
        <div className="header-center">
            <p>О нас</p>
            <p>Каталог</p>
            <p>Как это работает</p>
            <p>Стать исполнителем</p>
        </div>
        <div className="header-right">
            <p>Вход</p>
            <p>/</p>
            <p>Регистрация</p>
        </div>    
    </div>
  );
}
