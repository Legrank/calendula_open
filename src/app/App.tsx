import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Main } from 'features/main/Main'
import { Header } from 'components/header/Header'
import { Lk } from 'features/lk/Lk'

import './App.scss'

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/lk" component={Lk} />
        </Switch>
      </div>
    </>
  )
}

export default App
