import React from 'react'
import {Container, Button} from 'react-bootstrap'

import Rectangle212 from './img/Rectangle 212.png'
import Rectangle214 from './img/Rectangle 214.png'
import Rectangle215 from './img/Rectangle 215.png'
import Rectangle216 from './img/Rectangle 216.png'
import Rectangle217 from './img/Rectangle 217.png'
import Rectangle220 from './img/Rectangle 220.png'
import Rectangle221 from './img/Rectangle 221.png'
import Rectangle222 from './img/Rectangle 222.png'
import Rectangle223 from './img/Rectangle 223.png'
import Rectangle224 from './img/Rectangle 224.png'
import Rectangle225 from './img/Rectangle 225.png'
import Rectangle226 from './img/Rectangle 226.png'
import Rectangle227 from './img/Rectangle 227.png'
import img4 from './img/image 4.png'
import img5 from './img/image 5.png'
import img6 from './img/image 6.png'
import img7 from './img/image 7.png'
import img8 from './img/image 8.png'

import './Main.css'


export function Main() {

  return (
    <div>
      <Container>
        <div className="main-bg row text-left py-5">
          <div className="col my-auto">
          <h4>Поможем найти изготовителя памятника с оптимальными условиями: цена-качество-сроки</h4>
          <p className="text-secondary ">С нами вам НЕ НУЖНО тратить время на поиск изготовителя памятника. Кроме того, наш сервис сэкономит вам до 20% от стоимости</p>
          </div>
          <div className="col">
          <img src={Rectangle212} alt="Rectangle212" />
          </div>
        </div>
      <h1 className="py-5">Как мы работаем</h1>
      <div className="my-5 row">
        <div className="mx-2 col">
          <img src={Rectangle214} alt="Rectangle214" />
          <h4>Оформление заявки</h4>
          <p className="text-secondary">Заполните анкету с основными параметрами памятника (могильного комплекса) на сайте</p>
        </div>
        <div className="mx-2 col">
          <img src={Rectangle215} alt="Rectangle214" />
          <h4>Выбор исполнителя</h4>
          <p className="text-secondary">Мы связываемся с агентствами вашего города - Анализируем результат - Выдаём вам самые оптимальные предложения: цена-качество</p>
        </div>
        <div className="mx-2 col">
          <img src={Rectangle216} alt="Rectangle214" />
          <h4>Заключение договора</h4>
          <p className="text-secondary">Вы делаете свой выбор и размещаете заказ у исполнителя</p>
        </div>
        <div className="mx-2 col">
          <img src={Rectangle217} alt="Rectangle214" />
          <h4>Выполненный заказ</h4>
          <p className="text-secondary">Принимаете работу у исполнителя - Оцените результат выполненных работ "в живую" или закажите фото/видео отчет</p>
        </div>
      </div>
      <div>
      <h1 className="pt-5">Мы в цифрах</h1>
      <div className="pb-5 row">
        <div className="mx-2 col">
          <h2 className="font-weight-bold">250</h2>
          <p className="text-secondary">памятников купили через нас</p>
        </div>
        <div className="mx-2 col">
          <h2 className="font-weight-bold">61</h2>
          <p className="text-secondary">исплнитель на сайте </p>
        </div>
        <div className="mx-2 col">
          <h2 className="font-weight-bold">47</h2>
          <p className="text-secondary">регинов работы</p>
        </div>
        <div className="mx-2 col">
          <h2 className="font-weight-bold">15%</h2>
          <p className="text-secondary">экономия при заказе у нас</p>
        </div>
      </div>
      </div>
      <div>
        <h1 className="pt-5">Каталог</h1>
        <div className="pb-5 row">
          <div className="p-0 col-3">
            <img src={Rectangle220} alt="Rectangle220" className="my-3"/>
            <h4>ВЕРТИКАЛЬНЫЕ</h4>
            <Button variant="success">Выбрать</Button>
          </div>
          <div className="p-0 col-3">
            <img src={Rectangle221} alt="Rectangle220" className="my-3"/>
            <h4>ВЕРТИКАЛЬНЫЕ</h4>
            <Button variant="success">Выбрать</Button>
          </div>
          <div className="p-0 col-3">
            <img src={Rectangle222} alt="Rectangle220" className="my-3"/>
            <h4>ВЕРТИКАЛЬНЫЕ</h4>
            <Button variant="success">Выбрать</Button>
          </div>
          <div className="p-0 col-3">
            <img src={Rectangle223} alt="Rectangle220" className="my-3"/>
            <h4>ВЕРТИКАЛЬНЫЕ</h4>
            <Button variant="success">Выбрать</Button>
          </div>
          <div className="p-0 col-3">
            <img src={Rectangle224} alt="Rectangle224" className="my-3"/>
            <h4>ВЕРТИКАЛЬНЫЕ</h4>
            <Button variant="success">Выбрать</Button>
          </div>
          <div className="p-0 col-3">
            <img src={Rectangle225} alt="Rectangle225" className="my-3"/>
            <h4>ВЕРТИКАЛЬНЫЕ</h4>
            <Button variant="success">Выбрать</Button>
          </div>
          <div className="p-0 col-3">
            <img src={Rectangle226} alt="Rectangle226" className="my-3"/>
            <h4>ВЕРТИКАЛЬНЫЕ</h4>
            <Button variant="success">Выбрать</Button>
          </div>
          <div className="p-0 col-3">
            <img src={Rectangle227} alt="Rectangle227" className="my-3"/>
            <h4>ВЕРТИКАЛЬНЫЕ</h4>
            <Button variant="success">Выбрать</Button>
          </div>
        </div>
      </div>
      <div>
      <h1 className="pt-5">Популярные модели</h1>
      <div className="pb-5 row align-items-end">
          <div className="p-0 col-2">
            <img src={img4} alt="Rectangle227" className="my-3"/>
            <p className="text-secondary">Вертикальный памятник</p>
            <h4>V1</h4>
            <Button variant="outline-success">Выбрать размер</Button>
          </div>
          <div className="p-0 col-2">
            <img src={img5} alt="Rectangle227" className="my-3"/>
            <p className="text-secondary">Вертикальный памятник</p>
            <h4>V2</h4>
            <Button variant="outline-success">Выбрать размер</Button>
          </div>
          <div className="p-0 col-2">
            <img src={img6} alt="Rectangle227" className="my-3"/>
            <p className="text-secondary">Вертикальный памятник</p>
            <h4>V17</h4>
            <Button variant="outline-success">Выбрать размер</Button>
          </div>
          <div className="p-0 col-2">
            <img src={img7} alt="Rectangle227" className="my-3"/>
            <p className="text-secondary">Вертикальный памятник</p>
            <h4>V22</h4>
            <Button variant="outline-success">Выбрать размер</Button>
          </div>
          <div className="p-0 col-2">
            <img src={img8} alt="Rectangle227" className="my-3"/>
            <p className="text-secondary">Вертикальный памятник</p>
            <h4>V8</h4>
            <Button variant="outline-success">Выбрать размер</Button>
          </div>
      </div>
      </div>
      
      </Container>
    </div>
  );
}
