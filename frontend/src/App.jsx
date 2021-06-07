import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { ProductionPage } from './pages/production/ProductionPage'
import { ConsumptionPage } from './pages/consumption/ConsumptionPage'
import NavbarComponent from './components/navBar/NavbarComponent'

import HomePage from './pages/homePage/HomePage'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/production" component={ProductionPage} />
            <Route path="/consumption" component={ConsumptionPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}
