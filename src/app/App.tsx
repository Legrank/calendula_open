import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {Main} from 'features/main/Main'
import {Catalog} from 'features/catalog/Catalog'
import {Header} from 'components/header/Header' 
import {Footer} from 'components/footer/Footer'
import {Lk} from 'features/lk/Lk'
import {CatalogInfo} from 'features/catalog/CatalogInfo'

import './App.scss'

function App() {
  return (
    <>
    <div className="App h-100">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/catalog/catalogSub/catalogItem/v1" component={CatalogInfo} />
        <Route path="/catalog" component={Catalog} /> 
        <Route exact path="/lk" component={Lk} />
        
      </Switch>
      
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
