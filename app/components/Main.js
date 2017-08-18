import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Program from './Program'



const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Program' component={Program}/>
    </Switch>
  </main>
)

export default Main
