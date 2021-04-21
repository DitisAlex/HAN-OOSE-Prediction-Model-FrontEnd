import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import AdminPage from './AdminPage';
import DataPageA from './DataPageA';
import DataPageB from './DataPageB';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="App">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand">Prediction Model</a>
                    <div class="collapse navbar-collapse justify-content-between align-items-center w-100" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/" class="nav-link">DataA</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/data" class="nav-link">DataB</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
                            <li class="nav-item">
                                <Link to="/login" class="nav-link">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={DataPageA} />
                        <Route path="/data" component={DataPageB} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/admin" component={AdminPage} />
                    </Switch>
                </div>
            </div>
        )
    }
}