import React from 'react'
import {Navbar, Nav, Button, Dropdown, ButtonGroup} from 'react-bootstrap'

import {Account} from 'features/account/Account'

import vector from './img/Vector.png'

export function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="py-0">
      <img src={vector} alt="logo"  className="ml-2"/>
      <Dropdown as={ButtonGroup} className="mr-auto">
      <Button variant="dark">Москва и МО</Button>

        <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Хабаровск</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Пермь</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Рязань</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Nav className="ml-auto mr-2">
      <Account></Account>
      </Nav>
    </Navbar>
  );
}
