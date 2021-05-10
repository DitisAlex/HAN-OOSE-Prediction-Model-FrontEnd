import React from 'react';
import { Switch, Route } from "react-router-dom";

import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout';
import AdminPage from './pages/admin/AdminPage';
import Navbar from './components/navBar/Navbar';

import HomePage from './pages/homePage/HomePage';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/admin" component={AdminPage} />
                    </Switch>
            </div>
        )
    }
}