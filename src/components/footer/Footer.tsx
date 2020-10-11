import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './footer.css'


export function Footer() {

  return (
    <Navbar variant="light" className="py-3 footer-bg text-left align-items-start">
        <Nav className="ml-5  col-4 align-self-center" >
            <Nav.Link href="/home">&copy; 2020 СИРЕНЬ</Nav.Link>
        </Nav>
        <Nav  className="flex-column col">
            <h5 className="p-2">О компании</h5>
            <Nav.Link href="/home">Пресс-центр</Nav.Link>
            <Nav.Link eventKey="link-1">Вакансии</Nav.Link>
            <Nav.Link eventKey="link-2">Реквизиты</Nav.Link>
        </Nav>
        <Nav  className="flex-column col">
            <h5 className="p-2">Информация</h5>
            <Nav.Link href="/home">Оплата</Nav.Link>
            <Nav.Link eventKey="link-1">Доставка</Nav.Link>
            <Nav.Link eventKey="link-2">Гарантии</Nav.Link>
        </Nav>
        <Nav  className="flex-column col">
            <h5 className="p-2">Сотрудничество</h5>
            <Nav.Link href="/home">Производители</Nav.Link>
            <Nav.Link eventKey="link-1">Партнёрская программа</Nav.Link>
            <Nav.Link eventKey="link-2">Новости компании</Nav.Link>
        </Nav>
        <Nav  className="flex-column col">
            <h5 className="p-2">Контакты</h5>
            <Nav.Link href="/home">с 8:00 до 21:00</Nav.Link>
            <Nav.Link href="#home"><p className="font-weight-bold text-dark" >+7 969  656 7859</p></Nav.Link>
        </Nav>
    </Navbar>
  );
}
