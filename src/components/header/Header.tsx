import React from 'react'
import {Navbar, Nav, Form, Button, Dropdown, ButtonGroup} from 'react-bootstrap'
import {  Link  } from 'react-router-dom'

import {Account} from 'features/account/Account'

import vector from './img/Vector.png'
import favorites from './img/favorites.png'
import lilac from './img/image 2.png'

export function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark" className="py-0">
      <img src={vector} alt="logo"  className="ml-5"/>
      <Dropdown as={ButtonGroup} className="mr-auto">
      <Button variant="dark">Москва и МО</Button>

        <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Хабаровск</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Пермь</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Рязань</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Nav className="mr-auto">
        <Link className='nav-link' to={`/`}>О нас</Link>
        <Link className='nav-link' to={`/catalog`}>Каталог</Link>
        <Link className='nav-link' to={`/gg`}>Как это работает</Link>
        <Link className='nav-link' to={`/`}>Стать исполнителем</Link>
      </Nav>
      <Nav className="ml-auto mr-5">
      <Account></Account>
      </Nav>
    </Navbar>
    <Navbar bg="light" variant="light" className="py-3">
      <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-filter-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
      </svg>
      <img src={lilac} alt="lilac"  className="mr-auto ml-5"/>
      <Nav className="mr-auto">
        <Nav.Link href="#home"><p className="font-weight-bold text-dark" >+7 969  656 7859</p></Nav.Link>
        <Nav.Link href="#features">8:00 - 21:00</Nav.Link>
      </Nav>
      <Form inline className="mr-auto col-sm-5">
      <div className="input-group mb-3">
        <input type="text" className="form-control border-right-0" placeholder="Найти памятник" />
        <div className="input-group-append">
          <span className="input-group-text bg-transparent border-left-0" >
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            </svg>
            </span>
        </div>
      </div>
      </Form>
      <img src={favorites} alt="favorites" className="mr-5"/>
    </Navbar>
    </>
  );
}
