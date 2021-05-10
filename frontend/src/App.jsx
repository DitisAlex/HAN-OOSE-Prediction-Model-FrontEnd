import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from './pages/auth/Login'
import Logout from './pages/auth/Logout'
import AdminPage from './pages/admin/AdminPage'
import ProductionPage from './pages/production/ProductionPage'
import Navbar from './components/navBar/Navbar'

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
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/production" component={ProductionPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}
